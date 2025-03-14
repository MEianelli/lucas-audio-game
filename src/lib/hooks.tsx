/* eslint-disable */
import { useEffect, useRef } from "react";
import { useStore } from "./store";

export const useSkipRenders = (
  callbacks: ((...params: any[]) => unknown)[], // Accepts an array of functions
  dependencyArray: unknown[] = []
) => {
  const firstRender = useRef(0);

  useEffect(() => {
    if (firstRender.current < 2) {
      firstRender.current += 1;
      return;
    }

    callbacks.forEach((callback) => {
      if (typeof callback === "function") {
        callback();
      }
    });
  }, [...dependencyArray]); // Spread dependencyArray to avoid unnecessary re-renders
};

export function useAnsState(cardId: number): {
  state: "ok" | "nok" | "neutral";
  clickedIndex: number | undefined;
} {
  const hitids = useStore((s) => s.hitids);
  const missids = useStore((s) => s.missids);

  if (hitids.includes(cardId)) return { state: "ok", clickedIndex: undefined };

  const parsed = missids.map((miss) => {
    const [id, index] = miss.split(",").map(Number);
    return { id, index };
  });

  const findMiss = parsed.find((miss) => miss.id === cardId);

  if (findMiss) return { state: "nok", clickedIndex: findMiss.index };

  return { state: "neutral", clickedIndex: undefined };
}

export function colorPicker(
  state: "ok" | "nok" | "neutral",
  isRight: boolean,
  isClicked?: boolean
) {
  if (state === "ok" && isRight) return "$green";
  if (state === "ok") return "$purple";
  if (state === "nok" && isClicked) return "$red";
  if (state === "nok") return "$purple";
  return "$purple";
}
