import { FlexC } from "@/components/containers/flex";
import { Ranking } from "./Ranking";
import { Timer } from "./Timer";
import { useFetchRank } from "@/lib/hooks/useFetchRank";

export const Finished = () => {
  useFetchRank()
  
  return (
    <FlexC css={{ gap: 20 }}>
      <Ranking />
      <Timer />
    </FlexC>
  );
};
