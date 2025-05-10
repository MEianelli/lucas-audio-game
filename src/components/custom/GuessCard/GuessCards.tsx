import { GuessCard } from "./GuessCard";
import { FlexC } from "@/components/containers/flex";
import { Answers } from "./Answers";
import { type Card } from "@/types/types";
import { useState } from "react";

export const GuessCards = ({ cards }: { cards: Card[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setTimeout(() => setCurrentIndex((prev) => prev + 1), 1000);
  };

  return (
    <FlexC
      css={{
        padding: "0px 20px",
        alignItems: "center",
        gap: 12,
        width: "100%",
        margin: "auto",
      }}
    >
      <GuessCard card={cards[currentIndex]} />
      <Answers card={cards[currentIndex]} goToNext={goToNext} />
    </FlexC>
  );
};
