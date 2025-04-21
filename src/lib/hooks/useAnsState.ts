import { CardState } from "@/types/types";
import { useStore } from "../store";

export function useAnsState(cardId: number): {
  state: CardState;
} {
  const hitids = useStore((s) => s.hitids);
  const missids = useStore((s) => s.missids);

  if (hitids.includes(cardId)) return { state: "ok" };

  if (missids.includes(cardId)) return { state: "nok" };

  return { state: "neutral" };
}
