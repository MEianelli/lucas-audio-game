import { RndMovie } from "@/lib/supabase";
import { getRndArrElements, shuffleArray } from "@/utils/random";
import { useMemo, useState } from "react";
import { AnswersButton } from "./AnswersButton";

export function Answers({ card }: { readonly card: RndMovie }) {
  const [disableAll, setDisableAll] = useState(false);
  const options = useMemo(() => {
    const shorts = card?.movie_data.wrongs.map((ans) => {
      if (ans.length > 30) {
        return ans.slice(0, 30) + "...";
      }
      return ans;
    });
    const rndWrongs = getRndArrElements(shorts);
    rndWrongs.push(card?.movie_data.correct);
    return shuffleArray(rndWrongs);
  }, [card]);

  function handleClick() {
    setDisableAll(true);
    return;
  }

  if (!options?.length) return null;

  return (
    <>
      {options?.map((option) => (
        <AnswersButton
          key={option}
          correct={card.movie_data.correct}
          onclick={() => handleClick()}
          text={option}
          disabled={disableAll}
        />
      ))}
    </>
  );
}
