import { Carrousel } from "../containers/div";
import { FlexC, FlexR } from "../containers/flex";
import { GuessCards } from "./GuessCard/GuessCards";
import { Hearts } from "./Hearts";

export const Content = () => {
  return (
    <FlexC css={{ backgroundColor: "$lightblack" }}>
      <FlexR sb css={{ paddingX: 16 }}>
        <Hearts />
      </FlexR>
      <Carrousel>
        <GuessCards />
      </Carrousel>
    </FlexC>
  );
};
