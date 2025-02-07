import { useEffect, useMemo, useState } from "react";
import { FlexC } from "../../containers/flex";
import { GuessCard } from "./GuessCard";
import { getAllGuesses, TGuess } from "@/lib/supabase";
import { useStore } from "@/lib/store";
import { cardDimentions } from "@/styles/stitches.config";

const NUMBER_OF_CARDS = 3;

export const GuessCards = () => {
  const [guesses, setGuesses] = useState<TGuess[] | null>(null);

  const hitids = useStore((store) => store.hitids);

  const filtered = useMemo(() => {
    return guesses?.filter((it) => !hitids?.includes(it.id));
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
          cardDimentions.width * NUMBER_OF_CARDS + 16 * NUMBER_OF_CARDS
        }px`,
        paddingBottom: 16,
      }}
    >
      {filtered?.map((it, i) => (
        <GuessCard key={it.image_src! + i} card={it} />
      ))}
    </FlexC>
  );
};
