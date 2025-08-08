import { useEffect } from "react";
import { useStore } from "../store";
import { fetchRankBff } from "../apis/rank/fetchRankBff";

export function useFetchRank() {
  const updateRankData = useStore((s) => s.updateRankData);
  const rankData = useStore((s) => s.rankData);
  const id = useStore((s) => s.id);

  useEffect(() => {
    if (rankData) return;
    async function getRankData() {
      const rankData = await fetchRankBff(id);
      if (rankData) {
        updateRankData(rankData);
      }
    }
    getRankData();
    //eslint-disable-next-line
  }, []);
}
