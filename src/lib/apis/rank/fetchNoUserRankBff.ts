import { RankData } from "@/types/types";
import api from "@/utils/api";

export const fetchNoUserRankBff = async () => {
  try {
    const rankData: { data: RankData } = await api(`${process.env.NEXT_PUBLIC_APP_URL}/api/rank`, {
      method: "POST",
    });

    if (!rankData.data) {
      console.log("Network response was not ok");
      return undefined;
    }

    return await rankData.data;
  } catch (error) {
    console.log("Error fetching cards:", error);
    return undefined;
  }
};
