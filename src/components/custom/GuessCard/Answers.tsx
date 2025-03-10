import { getRndArrElements, shuffleArray } from "@/utils/random";
import { useMemo, useState } from "react";
import { AnswersButton } from "./AnswersButton";
import { useStore } from "@/lib/store";
import { RndMovie } from "@/types/types";
import { MAX_ANS_LEN } from "@/lib/contants";

function reduceAnsSize(ans: string) {
  if (ans.length > MAX_ANS_LEN) {
    return ans.slice(0, MAX_ANS_LEN) + "...";
  }
  return ans;
}

export function Answers({
  card,
  isInView,
}: {
  readonly card: RndMovie;
  readonly isInView: boolean;
}) {
  const [disableAll, setDisableAll] = useState(false);
  const setSubLife = useStore((store) => store.setSubLife);
  const sethitids = useStore((store) => store.sethitids);

  const options = useMemo(() => {
    const shorts = card?.movie_data.wrongs.map((ans) => {
      return reduceAnsSize(ans);
    });
    const rndWrongs = getRndArrElements(shorts);
    rndWrongs.push(reduceAnsSize(card?.movie_data.correct));
    return shuffleArray(rndWrongs);
  }, [card]);

  if (!isInView || !options?.length) return null;

  function handleClick() {
    setDisableAll(true);
    return;
  }

  function handleRight() {
    setTimeout(() => sethitids([card.audio_data.id]), 1500);
    return;
  }

  function handleWrong() {
    setTimeout(() => setSubLife([card.audio_data.id]), 1500);
    return;
  }

  return (
    <>
      {options?.map((option) => (
        <AnswersButton
          key={option}
          correct={card.movie_data.correct}
          onclick={handleClick}
          onRight={handleRight}
          onWrong={handleWrong}
          text={option}
          disabled={disableAll}
        />
      ))}
    </>
  );
}
