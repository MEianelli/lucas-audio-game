import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hiinnoepvfmkkdioyanc.supabase.co";
const supabaseKey =
  process.env.SUPABASE_ANON_KEY ||
  (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string);
export const supabase = createClient(supabaseUrl, supabaseKey);

export const storageBaseUrl =
  "https://hiinnoepvfmkkdioyanc.supabase.co/storage/v1/object/public";
