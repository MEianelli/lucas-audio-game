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

export function TikTokLogo({ size = 18 }: LogoProps) {
  return (
    <IconContainer css={{ width: size, height: size, animation: `${scalePulse} 0.2s infinite alternate` }}>
      <BaseIcon width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden="true">
        <path
          d="M39.76,89.95c-14.92,0-27.05-12.14-27.05-27.05s12.14-27.05,27.05-27.05c1.74,0,3.46.16,5.15.49l.09,13.52c-1.66-.67-3.43-1.01-5.24-1.01-7.75,0-14.05,6.3-14.05,14.05s6.3,14.05,14.05,14.05,14.05-6.3,14.05-14.05V10.05h13v52.85c0,14.92-12.14,27.05-27.05,27.05Z"
          fill="currentColor"
        />
        <path
          d="M87.3,43.53c-18.46,0-33.48-15.02-33.48-33.48h13c0,11.29,9.19,20.48,20.48,20.48v13Z"
          fill="currentColor"
        />
      </BaseIcon>
      <BlinkIcon width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden="true">
        <path
          d="M39.76,89.95c-14.92,0-27.05-12.14-27.05-27.05s12.14-27.05,27.05-27.05c1.74,0,3.46.16,5.15.49l.09,13.52c-1.66-.67-3.43-1.01-5.24-1.01-7.75,0-14.05,6.3-14.05,14.05s6.3,14.05,14.05,14.05,14.05-6.3,14.05-14.05V10.05h13v52.85c0,14.92-12.14,27.05-27.05,27.05Z"
          fill="currentColor"
        />
        <path
          d="M87.3,43.53c-18.46,0-33.48-15.02-33.48-33.48h13c0,11.29,9.19,20.48,20.48,20.48v13Z"
          fill="currentColor"
        />
      </BlinkIcon>
    </IconContainer>
  );
}
