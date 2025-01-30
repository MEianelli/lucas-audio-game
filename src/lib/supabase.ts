import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hiinnoepvfmkkdioyanc.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;
export const supabase = createClient(supabaseUrl, supabaseKey);

export const storageBaseUrl =
  "https://hiinnoepvfmkkdioyanc.supabase.co/storage/v1/object/public/";

export type TBuckets = "audio" | "images";

export async function uploadDataSupabase(file: File, folder: TBuckets) {
  try {
    const res = await supabase.storage
      .from(folder)
      .upload(file.name || "", file, {
        cacheControl: "3600",
        upsert: true,
      });
    if (!res.data?.fullPath) {
      throw Error(`${res.error?.message}`);
    }
    return res.data.fullPath;
  } catch (error: unknown) {
    throw Error(`${error}`);
  }
}

export async function uploadToGuesses(payload: {
  audio_src: string;
  image_src: string;
  correct_answers: string;
}) {
  const { error } = await supabase.from("guesses").insert(payload);
  if (error) {
    throw Error(`${error.message}`);
  }
}

export async function getAllGuesses(): Promise<TGuess[]> {
  const { data, error } = await supabase.from("guesses").select();
  if (data?.length) {
    return data;
  }
  throw Error(`${error?.message}`);
}

export async function getLatest(): Promise<TGuess[]> {
  const { data, error } = await supabase
    .from("guesses")
    .select()
    .order("created_at", { ascending: false })
    .limit(1);
  if (data?.length) {
    return data;
  }
  throw Error(`${error?.message}`);
}

export async function deleteOne(id: number): Promise<boolean> {
  const { status, error } = await supabase
    .from("guesses")
    .delete()
    .eq("id", id);
  if (status === 204) {
    return true;
  }
  throw Error(`${error?.message}`);
}

export async function addOneUser(data: { name: string; pass: string }) {
  const { status, error } = await supabase.from("users").insert(data);
  if (status === 201) {
    return true;
  }
  throw Error(`${error?.message}`);
}

export async function getOneUser({
  field,
  value,
}: {
  field: "name" | "pass";
  value: string;
}) {
  const { data, status } = await supabase
    .from("users")
    .select()
    .eq(field, value);
  if (status === 200) {
    return data;
  }
  return [];
}

export type TGuess = {
  audio_src: string | null;
  correct_answers: string | null;
  created_at: string;
  id: number;
  image_src: string | null;
};

export type User = {
  name: string;
  pass: string;
  hits?: string[];
  lifes?: number;
  score?: number;
};
