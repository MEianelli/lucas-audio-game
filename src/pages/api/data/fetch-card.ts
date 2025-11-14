import { supabase } from "@/lib/supabase";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  try {
    const query = supabase.from("cards").select("*").eq("id", id);
    const { data, error } = await query;
    if (error) throw error;
    return res.status(200).json(data);
  } catch (error: unknown) {
    return res.status(500).json({ error: `${(error as { message: string })?.message}` });
  }
}
