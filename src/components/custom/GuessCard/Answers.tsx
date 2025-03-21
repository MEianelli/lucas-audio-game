import { useState } from "react";
import { AnswersButton } from "./AnswersButton";
import { useStore } from "@/lib/store";
import { type Card } from "@/types/types";
import { useAnsState } from "@/lib/hooks";

export function Answers({
  card,
  isInView,
}: {
  readonly card: Card;
  readonly isInView: boolean;
}) {
  const [disableAll, setDisableAll] = useState(false);
  const setIds = useStore((s) => s.setIds);
  const { state, clickedIndex } = useAnsState(card.id);

  if (!isInView || !card.options?.length) return null;

  function handleClick() {
    setDisableAll(true);
    return;
  }

  function handleRight() {
    setIds([card.id], "hitids");
    return;
  }

  function handleWrong(index: number) {
    setIds([card.id + "," + index], "missids");
    return;
  }

  return (
    <>
      {card.options?.map((option, index) => {
        return (
          <AnswersButton
            key={option}
            correct={card.media.title}
            onclick={handleClick}
            onRight={handleRight}
            onWrong={() => handleWrong(index)}
            text={option}
            disabled={disableAll}
            state={state}
            clickedIndex={clickedIndex}
            index={index}
          />
        );
      })}
    </>
  );
}
