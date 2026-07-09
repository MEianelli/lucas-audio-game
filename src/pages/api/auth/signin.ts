import { NextApiRequest, NextApiResponse } from "next";
import { createSupabaseServerClient } from "@/lib/supabaseServer";
import type { Provider } from "@supabase/supabase-js";

const ALLOWED_PROVIDERS: Provider[] = ["google"];

// GET /api/auth/signin?provider=google
// Starts the OAuth flow server-side and redirects the browser to the provider.
async function SignIn(req: NextApiRequest, res: NextApiResponse) {
  const provider = req.query.provider as Provider;

  if (!ALLOWED_PROVIDERS.includes(provider)) {
    return res.redirect("/?auth_error=invalid_provider");
  }

  const supabase = createSupabaseServerClient(req, res);

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/callback`,
    },
  });

  if (error || !data?.url) {
    console.log("signin error :", JSON.stringify(error, null, 2));
    return res.redirect("/?auth_error=oauth_failed");
  }

  return res.redirect(data.url);
}

export default SignIn;
