import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/lib/supabase";
import { RankData, type User } from "@/types/types";
import { JSONParse } from "@/utils/json";

async function Rank(req: NextApiRequest, res: NextApiResponse) {
  const { id }: User = JSONParse(req.body);

  const scoreRes = await supabase.from("users").select("id, name, score").order("score", { ascending: false }).limit(5);

  if (scoreRes.error) {
    console.log("scoreRes :", scoreRes);
    return res.status(200).json({ error: "no user data", data: null });
  }

  if (!id) {
    const payload: RankData = {
      top5score: scoreRes.data,
      userScorePos: null,
    };

    return res.status(200).json({ data: payload });
  }

  const userRankScoreRes = await supabase.rpc("get_user_score_row_index", {
    user_id: id,
  });

  if (userRankScoreRes.error) {
    console.log("userRankScoreRes :", userRankScoreRes);
    return res.status(200).json({ error: "no rank score", data: null });
  }

  const payload: RankData = {
    top5score: scoreRes.data,
    userScorePos: userRankScoreRes.data[0].row_index,
  };

  res.status(200).json({ data: payload });
}

export default Rank;
