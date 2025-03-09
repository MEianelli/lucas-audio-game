import React, { useEffect, useMemo, useRef, useState } from "react";
import { GuessCard } from "./GuessCard";
import { getRandomMoviesWithMedia } from "@/lib/supabase";
import { useStore } from "@/lib/store";
import {
  EmblaCarousel,
  EmblaCarouselSlide,
  useEmbla,
} from "@/components/containers/EmblaCarousel";
import { FlexC } from "@/components/containers/flex";
import { Answers } from "./Answers";
import { RndMovie } from "@/types/types";

export const GuessCards = () => {
  const [guesses, setGuesses] = useState<RndMovie[] | null>(null);
  const { current, emblaRef } = useEmbla();
  const hasFetched = useRef(false);

  const hitids = useStore((store) => store.hitids);
  const ignoreids = useStore((store) => store.ignoreids);
  const missids = useStore((store) => store.missids);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;
    async function getData() {
      try {
        const data = await getRandomMoviesWithMedia(
          [...hitids, ...ignoreids, ...missids],
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

  const filtered = useMemo(() => {
    return guesses?.filter((guess) => {
      return (
        !hitids?.includes(guess?.audio_data?.id) &&
        !missids?.includes(guess?.audio_data?.id)
      );
    });
  }, [hitids, missids, guesses]);

  return (
    <>
      <EmblaCarousel emblaRef={emblaRef}>
        {filtered?.map((it, index) => {
          const isInView = current === index;
          return (
            <EmblaCarouselSlide key={index + 198374}>
              <GuessCard card={it} isInView={isInView} />
            </EmblaCarouselSlide>
          );
        })}
      </EmblaCarousel>
      <FlexC css={{ padding: "25px 0px", alignItems: "center", gap: 6 }}>
        {filtered?.map((it, index) => {
          const isInView = current === index;

          return <Answers card={it} key={index + 98734} isInView={isInView} />;
        })}
      </FlexC>
    </>
  );
};
