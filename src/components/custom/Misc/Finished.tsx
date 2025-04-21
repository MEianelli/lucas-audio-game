import { Ranking } from "./Ranking";
import { FlexC } from "@/components/containers/flex";
import { GoHome } from "../Header/Menu/GoHome";
import { Timer } from "./Timer";

export const Finished = () => {

  return (
    <FlexC css={{ gap: 12 }}>
      <Ranking />
      <Timer />
      <GoHome />
    </FlexC>
  );
};
