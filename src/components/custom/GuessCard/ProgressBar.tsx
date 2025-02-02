import { Div } from "@/components/containers/div";
import { keyframes } from "@/styles/stitches.config";

export const ProgressBar = ({
  duration,
  isPlaying,
}: {
  duration: number | null;
  isPlaying: boolean;
}) => {
  const widthAnimation = keyframes({
    "0%": { width: 0 },
    "100%": { width: "100%" },
  });

  const animationDuration = duration ? duration + "ms" : "";
  const animation = isPlaying
    ? `${widthAnimation} ${animationDuration} linear`
    : "none";

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
          backgroundColor: "$white",
          width: "0%",
          borderRadius: "20px",
          height: "100%",
          animation: animation,
        }}
      />
    </Div>
  );
};
