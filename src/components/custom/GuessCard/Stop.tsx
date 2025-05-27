import { BlurTextStrong } from "@/components/buttons/BlurText/BlurTextStrong";
import { keyframes } from "@stitches/react";

const blinkAnimation = keyframes({
  "0%": { opacity: 1 },
  "50%": { opacity: 1 },
  "100%": { opacity: 0 },
});

export function StopButton() {
  return (
    <BlurTextStrong
      title="Stop ⏹"
      css={{ fontSize: "14px", fontFamily: "vcr", animation: `${blinkAnimation} 0.5s infinite alternate` }}
    />
  );
}
