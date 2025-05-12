import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/lib/supabase";
import { type User } from "@/types/types";
import { encryptData } from "@/utils/crypto";
import { setCookie } from "cookies-next";
import { COOKIE_NAME } from "@/lib/contants";
import { JSONParse } from "@/utils/json";

async function Login(req: NextApiRequest, res: NextApiResponse) {
  const { name, pass }: User = JSONParse(req.body);

  const { data, error } = await supabase.from("users").select().eq("name", name).single();

  if (!data?.id) {
    if (error) console.log("error :", JSON.stringify(error, null, 2));
    return res.status(200).json({ res: "unexistant" });
  }

  if (data.pass !== pass) {
    return res.status(200).json({ res: "wrongPass" });
  }

  setCookie(COOKIE_NAME, encryptData({ name }), {
    req,
    res,
    maxAge: 60 * 60 * 24 * 100, //100 days
  });

  return res.status(200).json({ res: "logged", user: data });
}

export default Login;
