import { useEffect, useMemo, useState } from "react";
import { FlexR } from "../containers/flex";
import { GuessCard } from "./GuessCard";
import { getAllGuesses, TGuess } from "@/lib/supabase";
import { useStore } from "@/lib/store";

export const GuessCards = () => {
  const [guesses, setGuesses] = useState<TGuess[] | null>(null);

  const hitIds = useStore((store) => store.hitIds);

  const filtered = useMemo(() => {
    return guesses?.filter((it) => !hitIds.has(it.id)).slice(0, 3);
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
    <FlexR
      css={{
        gap: "16px",
        width: "100%",
        flexWrap: "wrap",
      }}
    >
      {filtered?.map((it, i) => (
        <GuessCard key={it.image_src! + i} card={it} />
      ))}
    </FlexR>
  );
};
