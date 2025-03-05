import { Div } from "../containers/div";
import { FlexC, FlexR } from "../containers/flex";
import { GuessCards } from "./GuessCard/GuessCards";


export const Content = () => {
  return (
    <FlexC css={{ backgroundColor: "#000" }}>
      <FlexR sb>
      </FlexR>
      <Div>
        <GuessCards />
      </Div>
    </FlexC>
  );
};
