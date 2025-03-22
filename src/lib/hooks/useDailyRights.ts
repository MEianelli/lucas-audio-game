import { countElementsInArray } from "@/utils/arrays";
import { missIdsToids } from "../helpers/missIdsParsers";
import { useStore } from "../store";

export function useDailyRights(dailyIds: number[]) {
  const hitids = useStore((s) => s.hitids);
  const missids = useStore((s) => s.missids);
  const parsedMiss = missIdsToids(missids);
  const hits = countElementsInArray(hitids, dailyIds);
  const misses = countElementsInArray(parsedMiss, dailyIds);
  return { hits, played: hits + misses };
}
