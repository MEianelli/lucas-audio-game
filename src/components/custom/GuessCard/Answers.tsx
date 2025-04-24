import { useState } from "react";
import { AnswersButton } from "./AnswersButton";
import { useStore } from "@/lib/store";
import { type Card } from "@/types/types";
import { useAnsState } from "@/lib/hooks/useAnsState";

export function Answers({ card, isInView, goToNext }: { readonly card: Card; readonly isInView: boolean; readonly goToNext?: () => void }) {
  const [disableAll, setDisableAll] = useState(false);
  const setIds = useStore((s) => s.setIds);
  const setModalOption = useStore((s) => s.setModalOption);
  const lifes = useStore((s) => s.lifes);

  const { state } = useAnsState(card.card_id);

  if (!isInView) return null;

  function handleClick(isRight: boolean) {
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
    setIds([card.card_id], "missids");
    const updatedLife = Math.max(lifes - 1, 0);
    if (updatedLife > 0) {
      goToNext?.()
    };
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
            index={index}
          />
        );
      })}
    </>
  );
}
