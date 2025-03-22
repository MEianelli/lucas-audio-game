import { CardState } from "@/types/types";
import { useStore } from "../store";
import { missIdsToObj } from "../helpers/missIdsParsers";

export function useAnsState(cardId: number): {
  state: CardState;
  clickedIndex: number | undefined;
} {
  const hitids = useStore((s) => s.hitids);
  const missids = useStore((s) => s.missids);

  if (hitids.includes(cardId)) return { state: "ok", clickedIndex: undefined };

  const parsed = missIdsToObj(missids);

  const findMiss = parsed.find((miss) => miss.id === cardId);

  if (findMiss) return { state: "nok", clickedIndex: findMiss.index };

  return { state: "neutral", clickedIndex: undefined };
}
