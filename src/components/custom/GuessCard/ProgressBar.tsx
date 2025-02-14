import { Div } from "@/components/containers/div";
import { keyframes } from "@/styles/stitches.config";

export const ProgressBar = ({ duration }: { duration: number | null }) => {
  const widthAnimation = keyframes({
    "0%": { width: 0 },
    "100%": { width: "100%" },
  });

  const animationDuration = duration ? duration + "ms" : "";
  const animation = `${widthAnimation} ${animationDuration} linear`;

  return (
    <Div
      css={{
        width: "$cardWidthPadding",
        height: "10px",
        padding: 3,
        borderRadius: "20px",
        backgroundColor: "$grey",
        position: "absolute",
        top: 8,
        left: 8,
      }}
    >
      <Div
        css={{
          backgroundColor: "$brightPink",
          width: "0%",
          borderRadius: "20px",
          height: "100%",
          animation: animation,
        }}
      />
    </Div>
  );
};

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
