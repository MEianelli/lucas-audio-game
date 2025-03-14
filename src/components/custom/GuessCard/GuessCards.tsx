import { GuessCard } from "./GuessCard";
import {
  EmblaCarousel,
  EmblaCarouselSlide,
  useEmbla,
} from "@/components/containers/EmblaCarousel";
import { FlexC } from "@/components/containers/flex";
import { Answers } from "./Answers";
import { type Card } from "@/types/types";

export const GuessCards = ({ cards }: { cards: Card[] }) => {
  const { current, emblaRef } = useEmbla();

  return (
    <>
      <EmblaCarousel emblaRef={emblaRef}>
        {cards?.map((it, index) => {
          const isInView = current === index;
          return (
            <EmblaCarouselSlide key={it.image_src}>
              <GuessCard card={it} isInView={isInView} />
            </EmblaCarouselSlide>
          );
        })}
      </EmblaCarousel>
      <FlexC css={{ padding: "25px 0px", alignItems: "center", gap: 6 }}>
        {cards?.map((it, index) => {
          const isInView = current === index;

          return <Answers card={it} key={it.audio_src} isInView={isInView} />;
        })}
      </FlexC>
    </>
  );
};
