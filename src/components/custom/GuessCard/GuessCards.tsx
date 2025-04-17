import { GuessCard } from "./GuessCard";
import { FlexC } from "@/components/containers/flex";
import { Answers } from "./Answers";
import { type Card } from "@/types/types";
import { styled } from "@/styles/stitches.config";
import { useState } from "react";

const SliderContainer = styled('div', {
  position: 'relative',
  width: '100%',
  marginX: "7%"
});

const SliderTrack = styled('div', {
  display: 'flex',
  transition: 'transform 0.5s ease-in-out',
  gap: '3%',
});

const Slide = styled('div', {
  display: "flex",
  alignItems: "center",
  flex: "0 0 86%",
});



export const GuessCards = ({ cards }: { cards: Card[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const goToNext = () => {
    if (currentIndex < cards.length - 1) {
      setTimeout(() => setCurrentIndex((prev) => prev + 1), 1000);
    }
  };

  const getTransformValue = (index: number) => {
    return `translateX(calc(-${index * 89}%))`;
  };

  return (
    <FlexC>
      <SliderContainer>
        <SliderTrack
          css={{
            transform: getTransformValue(currentIndex),
          }}
        >
          {cards.map((card, index) => {
            const isInView = currentIndex === index;
            return (
              <Slide key={index}>
                <GuessCard card={card} isInView={isInView} />
              </Slide>
            )
          })}
        </SliderTrack>
      </SliderContainer>

      <FlexC css={{ padding: "25px 0px", alignItems: "center", gap: 12, width: "85%", margin: "auto" }}>
        {cards?.map((it, index) => {
          const isInView = currentIndex === index;

          return <Answers card={it} key={index} isInView={isInView} goToNext={goToNext} />;
        })}
      </FlexC>
    </FlexC>
  );
};
