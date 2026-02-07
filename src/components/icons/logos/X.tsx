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

export function XLogo({ size = 18 }: LogoProps) {
  return (
    <IconContainer css={{ width: size, height: size, animation: `${scalePulse} 0.2s infinite alternate` }}>
      <BaseIcon width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4.5 3h4.2l4.07 5.65L17.7 3H21l-6.71 7.62L21.5 21h-4.2l-4.47-6.2L7.56 21H4.25l7.06-8.04L4.5 3Zm3.1 2 8.26 11.5h1.53L9.12 5H7.6Z"
          fill="currentColor"
        />
      </BaseIcon>
      <BlinkIcon width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4.5 3h4.2l4.07 5.65L17.7 3H21l-6.71 7.62L21.5 21h-4.2l-4.47-6.2L7.56 21H4.25l7.06-8.04L4.5 3Zm3.1 2 8.26 11.5h1.53L9.12 5H7.6Z"
          fill="currentColor"
        />
      </BlinkIcon>
    </IconContainer>
  );
}
