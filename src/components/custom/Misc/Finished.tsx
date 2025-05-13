import { FlexC } from "@/components/containers/flex";
import { GoHome } from "../Header/Menu/GoHome";
import { Timer } from "./Timer";
import { GetMoreLifes } from "./GetMoreLifes";
import { Ranking } from "./NewRanking";

export const Finished = () => {
  return (
    <FlexC css={{ gap: 20 }}>
      <GetMoreLifes />
      <Ranking />
      <Timer />
      <GoHome />
    </FlexC>
  );
};
