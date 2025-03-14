import { createClient } from "@supabase/supabase-js";
import { supabaseUrl } from "./contants";

const supabaseKey = process.env.SUPABASE_ANON_KEY as string;
export const supabase = createClient(supabaseUrl, supabaseKey);
