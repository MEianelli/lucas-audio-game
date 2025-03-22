import { useStore } from "./store";
import { type CardState } from "@/types/types";
import { missIdsToids, missIdsToObj } from "./helpers/missIdsParsers";
import { countElementsInArray } from "@/utils/arrays";

export function useDailyRights(dailyIds: number[]) {
  const hitids = useStore((s) => s.hitids);
  const missids = useStore((s) => s.missids);
  const parsedMiss = missIdsToids(missids);
  const hits = countElementsInArray(hitids, dailyIds);
  const misses = countElementsInArray(parsedMiss, dailyIds);
  return { hits, played: hits + misses };
}

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

export function colorPicker(
  state: CardState,
  isRight: boolean,
  isClicked?: boolean
) {
  if (state === "ok" && isRight) return "$green";
  if (state === "ok") return "$white";
  if (state === "nok" && isClicked) return "$red";
  if (state === "nok") return "$white";
  return "$white";
}
