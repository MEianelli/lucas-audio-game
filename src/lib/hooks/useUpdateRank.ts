import { useEffect } from "react";
import { useStore } from "../store";
import { RankDataWrapper } from "@/types/types";
import api from "@/utils/api";

export function useUpdateRank() {
  const updateRankData = useStore((s) => s.updateRankData);
  const id = useStore((s) => s.id);

  useEffect(() => {
    async function getRankData() {
      console.log("called once");

      const rankData: { data: RankDataWrapper } = await api(`${process.env.NEXT_PUBLIC_APP_URL}/api/rank`, {
        method: "POST",
        body: JSON.stringify({ id }),
      });
      updateRankData(rankData.data);
    }
    getRankData();
    //eslint-disable-next-line
  }, []);
}
