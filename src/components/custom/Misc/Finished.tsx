import { FlexC } from "@/components/containers/flex";
import { GetMoreLifes } from "./GetMoreLifes";
import { Ranking } from "./Ranking";
import { Timer } from "./Timer";

export const Finished = () => {
  return (
    <FlexC css={{ gap: 20 }}>
      <GetMoreLifes />
      <Ranking />
      <Timer />
    </FlexC>
  );
};
