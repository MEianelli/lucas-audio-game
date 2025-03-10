import { Div } from "../../containers/div";
import { FlexC, FlexR } from "../../containers/flex";
import { GuessCards } from "../GuessCard/GuessCards";
import { Header } from "../Header/Header";

export const Content = () => {
  return (
    <>
      <Header />
      <FlexC css={{ backgroundColor: "#000" }}>
        <FlexR sb></FlexR>
        <Div>
          <GuessCards />
        </Div>
      </FlexC>
    </>
  );
};
