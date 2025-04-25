import { useEffect, useState } from "react";
import { AnswersButton } from "./AnswersButton";
import { useStore } from "@/lib/store";
import { type Card } from "@/types/types";
import { useAnsState } from "@/lib/hooks/useAnsState";

export function Answers({
  card,
  goToNext,
}: {
  readonly card: Card;
  readonly goToNext?: () => void;
}) {
  const [disableAll, setDisableAll] = useState(false);
  const setIds = useStore((s) => s.setIds);
  const lifes = useStore((s) => s.lifes);

  const { state } = useAnsState(card.card_id);

  function handleClick(isRight: boolean) {
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
      goToNext?.();
    }
    return;
  }

  useEffect(() => {
    setDisableAll(false);
  }, [card.card_id]);

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
