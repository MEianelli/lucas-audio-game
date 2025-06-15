import { FlexC } from "@/components/containers/flex";
import { GetMoreLifes } from "./GetMoreLifes";
import { Timer } from "./Timer";

export const NoLifesHome = () => {
  return (
    <FlexC css={{ gap: 20 }}>
      <GetMoreLifes />
      <Timer />
    </FlexC>
  );
};
