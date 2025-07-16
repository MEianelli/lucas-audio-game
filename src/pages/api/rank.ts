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
    console.log("scoreRes :", scoreRes);
    return res.status(200).json({ error: "no user data", data: null });
  }

  const scoreweekRes = await supabase
    .from("users")
    .select("name, scoreweek, maxstreakweek")
    .order("scoreweek", { ascending: false })
    .limit(5);

  if (scoreweekRes.error) {
    console.log("scoreweekRes :", scoreweekRes);
    return res.status(200).json({ error: "no user data", data: null });
  }

  const streakRes = await supabase
    .from("users")
    .select("name, maxstreak, score")
    .order("maxstreak", { ascending: false })
    .limit(5);

  if (streakRes.error) {
    console.log("streakRes :", streakRes);
    return res.status(200).json({ error: "no user data", data: null });
  }

  const streakweekRes = await supabase
    .from("users")
    .select("name, maxstreakweek, scoreweek")
    .order("maxstreakweek", { ascending: false })
    .limit(5);

  if (streakweekRes.error) {
    console.log("streakweekRes :", streakweekRes);
    return res.status(200).json({ error: "no user data", data: null });
  }

  if (!id) {
    const payload = {
      all: {
        top5score: scoreRes.data,
        top5streak: streakRes.data,
        userScorePos: null,
        userStreakPos: null,
      },
      week: {
        top5score: scoreweekRes.data.map(convertWeekToNormal),
        top5streak: streakweekRes.data.map(convertWeekToNormal),
        userScorePos: null,
        userStreakPos: null,
      },
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

  const userRankScoreweekRes = await supabase.rpc("get_user_scoreweek_row_index", {
    user_id: id,
  });

  if (userRankScoreweekRes.error) {
    console.log("userRankScoreweekRes :", userRankScoreweekRes);
    return res.status(200).json({ error: "no rank scoreweek", data: null });
  }

  const userStreakRes = await supabase.rpc("get_user_streak_row_index", {
    user_id: id,
  });

  if (userStreakRes.error) {
    console.log("userStreakRes :", userStreakRes);
    return res.status(200).json({ error: "no rank streak", data: null });
  }

  const userStreakweekRes = await supabase.rpc("get_user_maxstreakweek_row_index", {
    user_id: id,
  });

  if (userStreakweekRes.error) {
    console.log("userStreakweekRes :", userStreakweekRes);
    return res.status(200).json({ error: "no rank streak", data: null });
  }

  const payload = {
    all: {
      top5score: scoreRes.data,
      top5streak: streakRes.data,
      userScorePos: userRankScoreRes.data[0].row_index,
      userStreakPos: userStreakRes.data[0].row_index,
    },
    week: {
      top5score: scoreweekRes.data.map(convertWeekToNormal),
      top5streak: streakweekRes.data.map(convertWeekToNormal),
      userScorePos: userRankScoreweekRes.data[0].row_index,
      userStreakPos: userStreakweekRes.data[0].row_index,
    },
  };

  res.status(200).json({ data: payload });
}

export default Rank;

function convertWeekToNormal(it: { name: string; scoreweek: number | string; maxstreakweek: number | string }) {
  return {
    score: it.scoreweek,
    maxstreak: it.maxstreakweek,
    name: it.name,
  };
}
