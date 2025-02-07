import { useEffect, useMemo, useState } from "react";
import { FlexC } from "../../containers/flex";
import { GuessCard } from "./GuessCard";
import { getAllGuesses, TGuess } from "@/lib/supabase";
import { useStore } from "@/lib/store";
import { cardDimentions } from "@/styles/stitches.config";
import * as motion from "motion/react-client";

const NUMBER_OF_CARDS = 3;

export const GuessCards = () => {
  const [guesses, setGuesses] = useState<TGuess[] | null>(null);

  const hitids = useStore((store) => store.hitids);

  const filtered = useMemo(() => {
    return guesses?.toSorted((a, b) => {
      const aInHitids = hitids.includes(a.id) ? 1 : 0;
      const bInHitids = hitids.includes(b.id) ? 1 : 0;
      return aInHitids - bInHitids;
    });
  }, [hitids, guesses]);

  useEffect(() => {
    async function getData() {
      try {
        const data = await getAllGuesses();
        setGuesses(data);
      } catch (error) {
        alert(error);
      }
    }
    getData();
  }, []);

  return (
    <FlexC
      css={{
        gap: "16px",
        width: "fit-content",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        maxHeight: `${
          cardDimentions.width * NUMBER_OF_CARDS + 32 * NUMBER_OF_CARDS
        }px`,
        padding: 16,
      }}
    >
      {filtered?.map((it) => (
        <motion.div
          key={it.id}
          layout
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 300,
          }}
        >
          <GuessCard card={it} />
        </motion.div>
      ))}
    </FlexC>
  );
};
