import { Div } from "../containers/div";
import { FlexC, FlexR } from "../containers/flex";
import { GuessCards } from "./GuessCard/GuessCards";
import { Hearts } from "./Hearts";

export const Content = () => {
  return (
    <FlexC css={{ backgroundColor: "$lightblack" }}>
      <FlexR sb>
        <Hearts />
      </FlexR>
      <Div>
        <GuessCards />
      </Div>
    </FlexC>
  );
};
