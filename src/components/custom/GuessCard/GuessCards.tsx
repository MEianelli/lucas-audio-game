import React, { useEffect, useState } from "react";
import { GuessCard } from "./GuessCard";
import { getRandomMoviesWithMedia, RndMovie } from "@/lib/supabase";
import { useStore } from "@/lib/store";
import {
  EmblaCarousel,
  EmblaCarouselSlide,
  useEmbla,
} from "@/components/containers/EmblaCarousel";
import { FlexC } from "@/components/containers/flex";
import { Answers } from "./Answers";

export const GuessCards = () => {
  const [guesses, setGuesses] = useState<RndMovie[] | null>(null);
  const { current, emblaRef } = useEmbla();

  const hitids = useStore((store) => store.hitids);
  const ignoreids = useStore((store) => store.ignoreids);

  useEffect(() => {
    async function getData() {
      try {
        const data = await getRandomMoviesWithMedia(
          [...hitids, ...ignoreids],
          8
        );
        if (data?.length) {
          setGuesses(data);
        }
      } catch (error) {
        alert(error);
      }
    }
    getData();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <EmblaCarousel emblaRef={emblaRef}>
        {guesses?.map((it, index) => {
          const isInView = current === index;
          return (
            <EmblaCarouselSlide key={it.movie_id}>
              <GuessCard card={it} isInView={isInView} />
            </EmblaCarouselSlide>
          );
        })}
      </EmblaCarousel>
      <FlexC css={{ padding: "25px 0px", alignItems: "center", gap: 6 }}>
        {guesses?.map((it, index) => {
          const isInView = current === index;

          return (
            <>{isInView && <Answers card={it} key={it.movie_id + index} />}</>
          );
        })}
      </FlexC>
    </>
  );
};
