import { useEffect, useState } from "react";
import { AnswersButton } from "./AnswersButton";
import { useStore } from "@/lib/store";
import { type Card } from "@/types/types";
import { FlexC } from "@/components/containers/flex";
import * as unit from "@/utils/unitTest";

export function Answers({ card }: { readonly card: Card }) {
  const [disableAll, setDisableAll] = useState(false);
  const setIds = useStore((s) => s.setIds);
  const setModalOption = useStore((s) => s.setModalOption);
  const lifes = useStore((s) => s.lifes);
  const noLifes = lifes <= 0;

  function handleClick(is: boolean) {
    if (noLifes) {
      setModalOption("finished");
      return;
    }
    if (disableAll || noLifes) return;
    setDisableAll(true);
    if (is) {
      setIds([card.card_id], "hitids");
      return;
    }
    setIds([card.card_id], "missids");
    const updatedLife = Math.max(lifes - 1, 0);
    if (updatedLife > 0) {
    }
    return;
  }

  useEffect(() => {
    setDisableAll(false);
  }, [card.card_id]);

  return (
    <FlexC css={{ width: "100%", gap: 10, paddingX: "7px" }}>
      {card.options?.map((option, index) => {
        let dateAdded = Number(card.archive);
        dateAdded = unit.detach4(dateAdded);
        dateAdded = unit.detach3(dateAdded);
        dateAdded = unit.detach2(dateAdded);
        dateAdded = unit.detach1(dateAdded);
        const isDated = dateAdded === index;
        return (
          <AnswersButton
            key={card.card_id + option}
            date={isDated}
            onclick={handleClick}
            text={option}
            disabled={disableAll || noLifes}
          />
        );
      })}
    </FlexC>
  );
}
