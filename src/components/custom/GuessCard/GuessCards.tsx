import { GuessCard } from "./GuessCard";
import { FlexC } from "@/components/containers/flex";
import { Answers } from "./Answers";
import { type Card } from "@/types/types";
import { useState } from "react";
import { useAnsState } from "@/lib/hooks/useAnsState";
import { moveInSide, moveOutSide } from "./GuessCardAnimations";

export const GuessCards = ({ cards }: { cards: Card[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { state } = useAnsState(cards[currentIndex].card_id);

  const goToNext = () => {
    setTimeout(() => setCurrentIndex((prev) => prev + 1), 1000);
  };

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
      <GuessCard card={cards[currentIndex]} ncard={cards[currentIndex + 1]} />
      <Answers card={cards[currentIndex]} goToNext={goToNext} />
    </FlexC>
  );
};
