/* eslint-disable */
import { useEffect, useRef } from "react";

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
