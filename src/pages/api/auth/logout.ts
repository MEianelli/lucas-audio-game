import { NextApiRequest, NextApiResponse } from "next";
import { createSupabaseServerClient } from "@/lib/supabaseServer";

// POST /api/auth/logout — clears the Supabase session cookies.
async function Logout(req: NextApiRequest, res: NextApiResponse) {
  const supabase = createSupabaseServerClient(req, res);
  await supabase.auth.signOut();
  return res.status(200).json({ res: "loggedOut" });
}

export default Logout;
