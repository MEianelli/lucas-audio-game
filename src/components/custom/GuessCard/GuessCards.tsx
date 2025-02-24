import React, { useEffect, useMemo, useState } from "react";
import { GuessCard } from "./GuessCard";
import { getRandomMoviesWithMedia, RndMovie } from "@/lib/supabase";
import { useStore } from "@/lib/store";
import {
  EmblaCarousel,
  EmblaCarouselSlide,
  useEmbla,
} from "@/components/containers/EmblaCarousel";
import { FlexC } from "@/components/containers/flex";
import { getRndArrElements, shuffleArray } from "@/utils/random";
import { ButtonG } from "@/components/buttons/buttons";

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

          return <>{isInView && <Answers card={it} key={it.movie_id} />}</>;
        })}
      </FlexC>
    </>
  );
};

function Answers({ card }: { readonly card: RndMovie }) {
  const options = useMemo(() => {
    const rndWrongs = getRndArrElements(card?.movie_data.wrongs);
    rndWrongs.push(card?.movie_data.correct);
    return shuffleArray(rndWrongs);
  }, [card]);

  if (!options?.length) return null;

  return (
    <>
      {options?.map((option) => (
        <ButtonG key={option} css={{ width: "85%" }}>
          {option}
        </ButtonG>
      ))}
    </>
  );
}
