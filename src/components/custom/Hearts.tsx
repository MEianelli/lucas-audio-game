import { useStore } from "@/lib/store";
import { FlexR } from "../containers/flex";
import { JSX, useEffect, useMemo, useRef } from "react";
import { HeartIcon, HeartEmptyIcon, HeartFillingIcon } from "../icons/hearts";
import { MAX_LIFE_CAP, TIME_TO_GAIN_HEART } from "@/lib/contants";

export type THeartState = "full" | "filling" | "empty" | "exploding";

export const heartsMapper: Record<THeartState, (i: number) => JSX.Element> = {
  empty: (i: number) => <HeartEmptyIcon key={`empty${i}`} />,
  exploding: (i: number) => <HeartFillingIcon key={`exploding${i}`} />,
  filling: (i: number) => <HeartFillingIcon key={`filling${i}`} />,
  full: (i: number) => <HeartIcon key={`full${i}`} />,
};

export const Hearts = () => {
  const lifes = useStore((store) => store.lifes);
  const setAddLife = useStore((store) => store.setAddLife);
  const lastLifeChange = useStore((store) => store.lastLifeChange);
  const lastheartgain = useStore((store) => store.lastheartgain);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (lifes >= MAX_LIFE_CAP) return;
    intervalRef.current = setInterval(() => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - lastheartgain;
      const timesToGain = Math.min(
        MAX_LIFE_CAP - lifes,
        Math.floor(elapsedTime / TIME_TO_GAIN_HEART)
      );

      if (elapsedTime >= TIME_TO_GAIN_HEART) {
        setAddLife(timesToGain);
      }
    }, 500);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
    //eslint-disable-next-line
  }, [lifes]);

  const heartsArray = useMemo(() => {
    return buildStateArray(lifes, lastLifeChange);
  }, [lifes, lastLifeChange]);

  return (
    <FlexR css={{ justifyContent: "center", marginTop: "0px" }}>
      {heartsArray.map((heart, i) => heartsMapper[heart](i))}
    </FlexR>
  );
};

function buildStateArray(
  lifes: number,
  lastLifeChange: "added" | "subbed" | "none",
  totalLifes = 5
) {
  const result: THeartState[] = [];
  for (let i = 0; i < totalLifes; i++) {
    if (i < lifes) {
      result.push("full");
    } else if (i === lifes) {
      result.push("filling");
    } else {
      result.push("empty");
    }
  }
  if (lastLifeChange === "subbed") {
    result[lifes] = "exploding";
  }
  return result;
}
