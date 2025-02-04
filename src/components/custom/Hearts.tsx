import { useStore } from "@/lib/store";
import { FlexR } from "../containers/flex";
import { HeartIcon } from "../icons/heart";
import { useEffect, useRef, useState } from "react";
import { HeartExploding } from "../icons/heartexploding";

export const Hearts = () => {
  const life = useStore((store) => store.life);
  const [animate, setAnimate] = useState(false);
  const hearRef = useRef(life);

  useEffect(() => {
    if (hearRef.current > life) {
      setAnimate(true);
      hearRef.current = life;
      setTimeout(() => {
        setAnimate(false);
      }, 1000);
    }
  }, [life]);

  return (
    <FlexR css={{ justifyContent: "center", marginTop: "16px" }}>
      {Array.from(Array(life)).map((_, i) => {
        return <HeartIcon key={"heart_" + i} />;
      })}
      {animate && <HeartExploding />}
    </FlexR>
  );
};
