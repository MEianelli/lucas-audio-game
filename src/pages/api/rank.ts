import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/lib/supabase";
import { type User } from "@/types/types";
import { JSONParse } from "@/utils/json";

async function Rank(req: NextApiRequest, res: NextApiResponse) {
  const { id }: User = JSONParse(req.body);

  const scoreRes = await supabase
    .from("users")
    .select("name, score, maxstreak")
    .order("score", { ascending: false })
    .limit(5);

  if (scoreRes.error) {
    return res.status(200).json({ error: "no user data" });
  }

  const streakRes = await supabase
    .from("users")
    .select("name, maxstreak, score")
    .order("maxstreak", { ascending: false })
    .limit(5);

  if (streakRes.error) {
    return res.status(200).json({ error: "no user data" });
  }

  if (!id) {
    const payload = {
      top5score: scoreRes.data,
      top5streak: streakRes.data,
      userScorePos: null,
      userStreakPos: null,
    };

    res.status(200).json({ data: payload });
  }

  const userRankScoreRes = await supabase.rpc("get_user_score_row_index", {
    user_id: id,
  });

  if (userRankScoreRes.error) {
    return res.status(200).json({ error: "no rank score" });
  }

  const userStreakRes = await supabase.rpc("get_user_streak_row_index", {
    user_id: id,
  });

  if (userStreakRes.error) {
    return res.status(200).json({ error: "no rank streak" });
  }

  const payload = {
    top5streak: streakRes.data,
    top5score: scoreRes.data,
    userScorePos: userRankScoreRes.data[0].row_index,
    userStreakPos: userStreakRes.data[0].row_index,
  };

  res.status(200).json({ data: payload });
}

export default Rank;
