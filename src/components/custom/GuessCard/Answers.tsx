import { useState } from "react";
import { AnswersButton } from "./AnswersButton";
import { useStore } from "@/lib/store";
import { type Card } from "@/types/types";
import { useAnsState } from "@/lib/hooks/useAnsState";

export function Answers({ card, isInView, goToNext }: { readonly card: Card; readonly isInView: boolean; readonly goToNext?: () => void }) {
  const [disableAll, setDisableAll] = useState(false);
  const setIds = useStore((s) => s.setIds);
  const setLifes = useStore((s) => s.setLifes);
  const lifes = useStore((s) => s.lifes);
  const { state, clickedIndex } = useAnsState(card.card_id);

  if (!isInView || !card.options?.length) return null;

  function handleClick() {
    setDisableAll(true);
    goToNext?.();
    return;
  }

  function handleRight() {
    setIds([card.card_id], "hitids");
    return;
  }

  function handleWrong(index: number) {
    setIds([card.card_id + "," + index], "missids");
    setLifes(lifes - 1);
    return;
  }

  return (
    <>
      {card.options?.map((option, index) => {
        return (
          <AnswersButton
            key={option}
            correct={card.title}
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
