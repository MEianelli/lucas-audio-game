import { NextApiRequest, NextApiResponse } from "next";
import { createSupabaseServerClient } from "@/lib/supabaseServer";
import { supabase } from "@/lib/supabase";
import type { User as AuthUser } from "@supabase/supabase-js";

// Creates the game profile row in `users` for a first-time social login,
// or returns the existing one (matched by auth_id).
async function ensureUserRow(authUser: AuthUser) {
  const { data: existing } = await supabase.from("users").select().eq("auth_id", authUser.id).single();
  if (existing?.id) return existing;

  const meta = authUser.user_metadata ?? {};
  const rawName: string = meta.full_name || meta.name || authUser.email?.split("@")[0] || "player";
  const base = rawName.replace(/[^A-Za-z0-9]/g, "").slice(0, 16) || "player";

  for (let attempt = 0; attempt < 3; attempt++) {
    const name = attempt === 0 ? base : `${base}${Math.floor(1000 + Math.random() * 9000)}`;

    const { data: taken } = await supabase.from("users").select("id").eq("name", name).single();
    if (taken?.id) continue;

    const { data: created, error } = await supabase
      .from("users")
      .insert({ name, auth_id: authUser.id })
      .select()
      .single();

    if (created?.id) return created;
    if (error) console.log("ensureUserRow error :", JSON.stringify(error, null, 2));
  }

  return null;
}

// GET /api/auth/callback?code=...
// OAuth redirect target: exchanges the code for a session (sets cookies),
// provisions the game profile, then sends the user back to the app.
async function Callback(req: NextApiRequest, res: NextApiResponse) {
  const code = req.query.code as string | undefined;

  if (!code) {
    return res.redirect("/?auth_error=missing_code");
  }

  const supabaseAuth = createSupabaseServerClient(req, res);

  const { data, error } = await supabaseAuth.auth.exchangeCodeForSession(code);

  if (error || !data?.user) {
    console.log("callback error :", JSON.stringify(error, null, 2));
    return res.redirect("/?auth_error=exchange_failed");
  }

  const userRow = await ensureUserRow(data.user);

  if (!userRow) {
    return res.redirect("/?auth_error=profile_failed");
  }

  return res.redirect("/");
}

export default Callback;
