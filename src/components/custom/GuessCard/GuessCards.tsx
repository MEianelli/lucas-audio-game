import { useEffect, useMemo, useState } from "react";
import { FlexC } from "../../containers/flex";
import { GuessCard } from "./GuessCard";
import { getAllGuesses, TGuess } from "@/lib/supabase";
import { useStore } from "@/lib/store";
import { cardDimentions } from "@/styles/stitches.config";

export const GuessCards = () => {
  const [guesses, setGuesses] = useState<TGuess[] | null>(null);

  const hitIds = useStore((store) => store.hitIds);

  const filtered = useMemo(() => {
    return guesses?.filter((it) => !hitIds.includes(it.id));
  }, [hitIds, guesses]);

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
        maxHeight: `${cardDimentions.width * 2 + 32}px`,
      }}
    >
      {filtered?.map((it, i) => (
        <GuessCard key={it.image_src! + i} card={it} />
      ))}
    </FlexC>
  );
};
