import { useEffect } from "react";
import { useStore } from "../store";
import { fetchNoUserRankBff } from "../apis/rank/fetchNoUserRankBff";

export function useFetchRankNoUser() {
  const updateRankData = useStore((s) => s.updateRankData);
  const rankData = useStore((s) => s.rankData);
  const name = useStore((s) => s.name);

  useEffect(() => {
    if (name || rankData) return;
    async function getRankDataNoUser() {
      const rankData = await fetchNoUserRankBff();
      if (rankData) {
        updateRankData(rankData);
      }
    }
    getRankDataNoUser();
  }, []);
}
