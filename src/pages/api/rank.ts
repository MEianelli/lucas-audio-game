import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/lib/supabase";
import { type User } from "@/types/types";
import { JSONParse } from "@/utils/json";

async function Rank(req: NextApiRequest, res: NextApiResponse) {
  const { id }: User = JSONParse(req.body);

  if (!id) {
    return res.status(200).json({ error: "empty id" });
  }

  const winRateRes = await supabase
    .from("users")
    .select("name, winrate")
    .order("winrate", { ascending: false })
    .limit(5);

  if (winRateRes.error) {
    return res.status(200).json({ error: "no user data" });
  }

  const streakRes = await supabase
    .from("users")
    .select("name, maxstreak")
    .order("maxstreak", { ascending: false })
    .limit(5);

  if (streakRes.error) {
    return res.status(200).json({ error: "no user data" });
  }

  const userRankWinRateRes = await supabase.rpc("get_user_winrate_row_index", {
    user_id: id,
  });

  if (userRankWinRateRes.error) {
    return res.status(200).json({ error: "no rank winrate" });
  }

  const userStreakRes = await supabase.rpc("get_user_streak_row_index", {
    user_id: id,
  });

  if (userStreakRes.error) {
    return res.status(200).json({ error: "no rank streak" });
  }

  const payload = {
    top5winrate: winRateRes.data,
    top5streak: streakRes.data,
    userWinRatePos: userRankWinRateRes.data[0].row_index,
    userStreakPos: userStreakRes.data[0].row_index,
  };

  res.status(200).json({ data: payload });
}

export default Rank;
