import { useStore } from "@/lib/store";
import { FlexR } from "../containers/flex";
import { JSX, useMemo } from "react";
import {
  HeartIcon,
  HeartEmptyIcon,
  HeartFillingIcon,
  ExplodingHeart,
} from "../icons/hearts";

export type THeartState = "full" | "filling" | "empty" | "exploding";

export const heartsMapper: Record<THeartState, (i: number) => JSX.Element> = {
  empty: (i: number) => <HeartEmptyIcon key={`empty${i}`} />,
  exploding: (i: number) => <ExplodingHeart key={`exploding${i}`} />,
  filling: (i: number) => <HeartFillingIcon key={`filling${i}`} />,
  full: (i: number) => <HeartIcon key={`full${i}`} />,
};

export const Hearts = () => {
  const life = useStore((store) => store.lifes);
  const lastLifeChange = useStore((store) => store.lastLifeChange);

  const heartsArray = useMemo(() => {
    return buildStateArray(life, lastLifeChange);
  }, [life, lastLifeChange]);

  return (
    <FlexR css={{ justifyContent: "center", marginTop: "16px" }}>
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
