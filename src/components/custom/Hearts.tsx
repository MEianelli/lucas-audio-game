import { useStore } from "@/lib/store";
import { FlexR } from "../containers/flex";
import { HeartIcon } from "../icons/heart";
import { useState } from "react";
import { HeartExploding } from "../icons/heartexploding";
import { useSkipRenders } from "@/lib/hooks";

export const Hearts = () => {
  const life = useStore((store) => store.lifes);
  const [animate, setAnimate] = useState(false);

  useSkipRenders(
    [() => setAnimate(true), () => setTimeout(() => setAnimate(false), 2000)],
    [life]
  );

  return (
    <FlexR css={{ justifyContent: "center", marginTop: "16px" }}>
      {Array.from(Array(life)).map((_, i) => {
        return <HeartIcon key={"heart_" + i} />;
      })}
      {animate && <HeartExploding />}
    </FlexR>
  );
};
