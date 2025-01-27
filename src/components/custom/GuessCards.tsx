import { useEffect, useState } from "react";
import { FlexR } from "../containers/flex";
import { GuessCard } from "./GuessCard";
import { getAllGuesses, TGuess } from "@/lib/supabase";

export const GuessCards = () => {
  const [guesses, setGuesses] = useState<TGuess[] | null>(null);

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
      {guesses?.map((it, i) => (
        <GuessCard key={it.image_src! + i} card={it} />
      ))}
    </FlexR>
  );
};
