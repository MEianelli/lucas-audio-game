import { Div } from "../../containers/div";
import { FlexC, FlexR } from "../../containers/flex";
import { GuessCards } from "../GuessCard/GuessCards";
import { Header } from "../Header/Header";

export const Content = () => {
  return (
    <>
      <Header />
      <FlexC css={{ backgroundColor: "$lightblack" }}>
        <FlexR sb></FlexR>
        <Div>
          <GuessCards />
        </Div>
      </FlexC>
    </>
  );
};
