import { GuessCard } from "./GuessCard";
import { FlexC } from "@/components/containers/flex";
import { Answers } from "./Answers";
import { type Card } from "@/types/types";
import { useAnsState } from "@/lib/hooks/useAnsState";
import { moveInSide, moveOutSide } from "./GuessCardAnimations";

export const GuessCards = ({ cards }: { cards: Card[] }) => {
  const { state } = useAnsState(cards[0].card_id);

  return (
    <FlexC
      id="container_img_e_btns"
      css={{
        padding: "0px 20px",
        alignItems: "center",
        gap: 12,
        width: "100%",
        margin: "auto",
        position: "relative",
        animation: state !== "neutral" ? `${moveOutSide} 1s forwards` : `${moveInSide} 0.2s forwards`,
      }}
    >
      <GuessCard cards={cards} />
      <Answers card={cards[0]} />
    </FlexC>
  );
};
