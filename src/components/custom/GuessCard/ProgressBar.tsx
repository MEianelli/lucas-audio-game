import { Div } from "@/components/containers/div";
import { keyframes } from "@/styles/stitches.config";

export const OverLayOpacity = ({ duration }: { duration: number | null }) => {
  const slide = keyframes({
    "0%": { left: "-100%" },
    "100%": { left: 0 },
  });

  const animationDuration = duration ? duration + "ms" : "";
  const animation = `${slide} ${animationDuration} linear`;
  return (
    <Div
      css={{
        position: "absolute",
        top: 0,
        left: "-100%",
        width: "100%",
        height: "100%",
        background: "#00000077",
        animation,
      }}
    ></Div>
  );
};
