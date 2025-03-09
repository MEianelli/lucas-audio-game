import { useState } from "react";
import { FlexC } from "@/components/containers/flex";
import { getRandomMoviesWithMedia } from "@/lib/supabase";
import { Button } from "@/components/buttons/buttons";
import { Text } from "@/components/text/text";
import { RndMovie } from "@/types/types";
import { GuessCard } from "../GuessCard/GuessCard";

export const GenerateRandomCard = () => {
  const [guess, setGuess] = useState<RndMovie | null>(null);

  async function handleGenerate() {
    const data = await getRandomMoviesWithMedia([], 8);
    if (data?.[0]) {
      setGuess(data[0]);
    }
  }

  return (
    <FlexC
      css={{
        gap: "32px",
        width: "100%",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <Button variant={"delete"} onClick={handleGenerate}>
        Generate
      </Button>
      <Text size={"b"}>Gerar card para vizualizacao:</Text>
      <GuessCard key={guess?.movie_id} card={guess!} isInView={true} />
    </FlexC>
  );
};
