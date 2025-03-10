import {
  RndMovie,
  Tables,
  TAudiosDTO,
  TBuckets,
  TGuess,
  TImagesDTO,
  TMoviesDTO,
  User,
} from "@/types/types";
import { getRandomIds } from "@/utils/random";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hiinnoepvfmkkdioyanc.supabase.co";
const supabaseKey =
  process.env.SUPABASE_ANON_KEY ||
  (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string);
export const supabase = createClient(supabaseUrl, supabaseKey);

export const storageBaseUrl =
  "https://hiinnoepvfmkkdioyanc.supabase.co/storage/v1/object/public";

export async function uploadMany(files: File[], folder: TBuckets) {
  const pathList = [];
  for (const file of files) {
    const path = await uploadDataSupabase(file, folder);
    if (path) pathList.push(path);
  }
  return pathList;
}

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

export async function uploadMovie(
  payload: TMoviesDTO & { audios_src: string[]; images_src: string[] }
) {
  const { audios_src, images_src, ...rest } = payload;
  const { data, error } = await supabase
    .from("movies")
    .insert(rest)
    .select()
    .single();
  if (error) {
    throw Error(`${error.message}`);
  }
  if (!data.id) {
    throw Error(`Didnt return data with lenght and id`);
  }

  const { id } = data;

  const audioDto: TAudiosDTO[] = audios_src.map((src) => ({
    src,
    movie_id: id,
  }));
  const imagesDto: TImagesDTO[] = images_src.map((src) => ({
    src,
    movie_id: id,
  }));

  await uploadToTable<TAudiosDTO[]>(audioDto, "audios");
  await uploadToTable<TImagesDTO[]>(imagesDto, "images");
}

export async function uploadToTable<T>(payload: T, table: Tables) {
  const { error } = await supabase.from(table).insert(payload);
  if (error) {
    throw Error(`${table}: ${error.message}`);
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

export async function getRndCount(
  row_count: number,
  exclude_ids: number[]
): Promise<TGuess[]> {
  const { data, error } = await supabase.rpc("get_random_rows", {
    exclude_ids,
    row_count,
  });

  if (error) {
    throw Error(`${error?.message}`);
  }

  return data;
}

export async function getRandomMoviesWithMedia(
  exclude_ids: number[] = [],
  row_count = 1
): Promise<RndMovie[] | null> {
  const { data, error } = await supabase.rpc("get_random_movies_with_media", {
    exclude_ids: exclude_ids,
    row_count: row_count,
  });

  if (error) {
    console.error("Error fetching random movies with media:", error);
    return null;
  }

  return data;
}

export async function getRandomNumberGuesses(
  number: number,
  ids: number[]
): Promise<TGuess[]> {
  const { data: onlyIds, error: IdsError } = await supabase
    .from("guesses")
    .select("id");

  if (IdsError) {
    throw Error(`${IdsError?.message}`);
  }

  const allIds = onlyIds.map(({ id }) => id);
  const filtered = allIds.filter((id) => !ids.includes(id));
  const randomIds = getRandomIds(filtered, number);

  const { data, error } = await supabase
    .from("guesses")
    .select("*")
    .in("id", randomIds);

  if (error) {
    throw Error(`${error?.message}`);
  }

  return data;
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

export async function updateGuesses(updates: Partial<TGuess>[]) {
  const { status, error } = await supabase
    .from("guesses")
    .upsert(updates, { onConflict: "id" });
  if (status === 200) {
    return true;
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

export async function updateProperty(data: {
  name: string;
  pass: string;
  updates: Partial<User>;
}) {
  const { name, pass, updates } = data;
  const { status, error } = await supabase
    .from("users")
    .update(updates)
    .eq("name", name)
    .eq("pass", pass);
  if (status === 204) {
    return;
  }
  return `${error?.message}`;
}

export async function getOneUser({
  name,
}: {
  name: string;
}): Promise<User | null> {
  const { data, status } = await supabase
    .from("users")
    .select()
    .eq("name", name)
    .single();
  if (status === 200) {
    return data;
  }
  return null;
}

export async function getAllUsers(): Promise<User[] | null> {
  const { data, status } = await supabase.from("users").select();

  if (status === 200) {
    return data;
  }
  return [];
}
