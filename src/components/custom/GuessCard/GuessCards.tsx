import React, { useEffect, useMemo, useState } from "react";
import { GuessCard } from "./GuessCard";
import { getAllGuesses, TGuess } from "@/lib/supabase";
import { useStore } from "@/lib/store";
import { shuffleArray } from "@/utils/random";
import {
  EmblaCarousel,
  EmblaCarouselSlide,
  useEmbla,
} from "@/components/containers/EmblaCarousel";

export const GuessCards = () => {
  const [guesses, setGuesses] = useState<TGuess[] | null>(null);
  const { current, emblaRef } = useEmbla();

  const hitids = useStore((store) => store.hitids);
  const ignoreids = useStore((store) => store.ignoreids);

  useEffect(() => {
    async function getData() {
      try {
        const data = await getAllGuesses();
        if (data.length) {
          setGuesses(shuffleArray(data));
        }
      } catch (error) {
        alert(error);
      }
    }
    getData();
  }, []);

  const filtered = useMemo(() => {
    return guesses
      ?.filter(({ id }) => !hitids.includes(id) && !ignoreids.includes(id))
      .slice(0, 9);
  }, [hitids, ignoreids, guesses]);

  return (
    <EmblaCarousel emblaRef={emblaRef}>
      {filtered?.map((it, index) => {
        const isInView = current === index;
        return (
          <EmblaCarouselSlide key={it.id}>
            <GuessCard card={it} isInView={isInView} />
          </EmblaCarouselSlide>
        );
      })}
    </EmblaCarousel>
  );
};
