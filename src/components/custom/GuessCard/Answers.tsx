import { useState } from "react";
import { AnswersButton } from "./AnswersButton";
import { useStore } from "@/lib/store";
import { type Card } from "@/types/types";
import { useAnsState } from "@/lib/hooks/useAnsState";

export function Answers({ card, isInView, goToNext }: { readonly card: Card; readonly isInView: boolean; readonly goToNext?: () => void }) {
  const [disableAll, setDisableAll] = useState(false);
  const setIds = useStore((s) => s.setIds);
  const setLifes = useStore((s) => s.setLifes);
  const setModalOption = useStore((s) => s.setModalOption);
  const lifes = useStore((s) => s.lifes);

  const { state, clickedIndex } = useAnsState(card.card_id);

  if (!isInView || !card.options?.length) return null;

  function handleClick(isRight: boolean, index: number) {
    if (lifes <= 0) {
      setModalOption("finished");
      return;
    }
    if (disableAll) return;
    setDisableAll(true);
    if (isRight) {
      setIds([card.card_id], "hitids");
      goToNext?.();
      return;
    }
    setIds([card.card_id + "," + index], "missids");
    const updatedLife = Math.max(lifes - 1, 0)
    setLifes(updatedLife);
    updatedLife > 0 ? goToNext?.() : null;
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
            text={option}
            state={state}
            clickedIndex={clickedIndex}
            index={index}
          />
        );
      })}
    </>
  );
}
