import { createServerClient, serializeCookieHeader } from "@supabase/ssr";
import { supabaseUrl } from "./contants";
import type { IncomingMessage, ServerResponse } from "http";

type Req = IncomingMessage & { cookies: Partial<Record<string, string>> };

const supabaseKey = process.env.SUPABASE_ANON_KEY as string;

// Auth-aware Supabase client for API routes and getServerSideProps.
// Reads/writes the Supabase session cookies on the request/response.
export function createSupabaseServerClient(req: Req, res: ServerResponse) {
  return createServerClient(supabaseUrl, supabaseKey, {
    cookies: {
      getAll() {
        return Object.keys(req.cookies).map((name) => ({
          name,
          value: req.cookies[name] ?? "",
        }));
      },
      setAll(cookiesToSet) {
        res.setHeader(
          "Set-Cookie",
          cookiesToSet.map(({ name, value, options }) => serializeCookieHeader(name, value, options))
        );
      },
    },
  });
}
