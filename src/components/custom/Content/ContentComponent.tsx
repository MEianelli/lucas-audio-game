import { type Card } from "@/types/types";
import { FlexC } from "../../containers/flex";
import { GuessCards } from "../GuessCard/GuessCards";
import { Header } from "../Header/Header";

export const ContentComponent = ({ cards }: { cards: Card[] }) => {
  return (
    <>
      <Header />
      <FlexC css={{ backgroundColor: "#000" }}>
        <GuessCards cards={cards} />
      </FlexC>
    </>
  );
};
