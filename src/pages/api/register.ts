import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/lib/supabase";
import { type User } from "@/types/types";
import { encryptData } from "@/utils/crypto";
import { JSONParse } from "@/utils/json";
import { setCookie } from "cookies-next";
import { COOKIE_NAME } from "@/lib/contants";

async function Register(req: NextApiRequest, res: NextApiResponse) {
  const { name, pass }: User = JSONParse(req.body);

  if (!name || !pass) {
    return res.status(200).json({ res: "error" });
  }

  const { data } = await supabase
    .from("users")
    .select()
    .eq("name", name)
    .single();

  if (data?.id) {
    return res.status(200).json({ res: "unavailable" });
  } else {
    const { data, error } = await supabase
      .from("users")
      .insert({ name, pass })
      .select()
      .single();

    if (error) {
      return res.status(200).json({ res: "error" });
    }

    setCookie(COOKIE_NAME, encryptData({ name }), {
      req,
      res,
      maxAge: 60 * 60 * 24 * 10,
    });

    return res.status(200).json({ res: "registered", user: data });
  }
}

export default Register;
