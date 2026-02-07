import { pulseBrilho } from "@/components/text/BlurText";
import { keyframes, styled } from "@/styles/stitches.config";

type LogoProps = {
  size?: number | string;
};

const scalePulse = keyframes({
  "0%": {
    scale: 1,
  },
  "100%": {
    scale: 1.01,
  },
});

const IconContainer = styled("span", {
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
});

const BaseIcon = styled("svg", {
  position: "absolute",
  inset: 0,
  color: "$white",
  filter: "blur(0.7px) drop-shadow(0 0 3px #ff8000d6) drop-shadow(0 0 5px #ffe4169e)",
});

const BlinkIcon = styled("svg", {
  position: "absolute",
  inset: 0,
  color: "$white",
  filter:
    "blur(0.7px) drop-shadow(0 0 3px #ff8000d6) drop-shadow(0 0 5px #ffe4169e) drop-shadow(0 0 40px rgba(255, 241, 86, 0.76))",
  animation: `${pulseBrilho} 0.6s infinite`,
});

export function InstagramLogo({ size = 18 }: LogoProps) {
  return (
    <IconContainer css={{ width: size, height: size, animation: `${scalePulse} 0.2s infinite alternate` }}>
      <BaseIcon width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7Zm5 3.5A4.5 4.5 0 1 1 7.5 13 4.5 4.5 0 0 1 12 8.5Zm0 2A2.5 2.5 0 1 0 14.5 13 2.5 2.5 0 0 0 12 10.5Zm5.25-3a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 17.25 7.5Z"
          fill="currentColor"
        />
      </BaseIcon>
      <BlinkIcon width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7Zm5 3.5A4.5 4.5 0 1 1 7.5 13 4.5 4.5 0 0 1 12 8.5Zm0 2A2.5 2.5 0 1 0 14.5 13 2.5 2.5 0 0 0 12 10.5Zm5.25-3a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 17.25 7.5Z"
          fill="currentColor"
        />
      </BlinkIcon>
    </IconContainer>
  );
}
