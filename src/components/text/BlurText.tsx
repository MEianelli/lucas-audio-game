import { keyframes, styled } from "@/styles/stitches.config";
import { CSS } from "@stitches/react";

export const pulseBrilho = keyframes({
  "0%, 10%, 20%, 30%, 40%, 50%, 60%, 70%, 80%, 90%, 100%": {
    opacity: "0%",
  },
  "25%, 35%, 45%, 75%": {
    opacity: "25%",
  },
  "15%, 65%, 85%": {
    opacity: "30%",
  },
  "5%, 55%, 95%": {
    opacity: "40%",
  },
});

const scalePulse = keyframes({
  "0%": {
    scale: 1,
  },
  "100%": {
    scale: 1.1,
  },
});

const fontCss = {
  fontFamily: "Parkinsans",
  fontWeight: 800,
  fontSize: "18px",
  width: "min-content",
};

const hiddenFont = {
  color: "transparent",
  ...fontCss,
};

const Container = styled("div", {
  ...hiddenFont,
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  padding: 0,
  whiteSpace: "nowrap",
});

const MainText = styled("p", {
  ...fontCss,
  margin: 0,
  position: "absolute",
  color: "$white",
  filter: "blur(0.7px)",
  textShadow: "0 0 3px #ff8000d6, 0 0 5px #ffe4169e",
});

const BlinkText = styled("p", {
  ...fontCss,
  margin: 0,
  position: "absolute",
  color: "$white",
  filter: "blur(0.7px)",
  textShadow: "0 0 3px #ff8000d6, 0 0 5px #ffe4169e, 0 0 40px rgba(255, 241, 86, 0.76)",
  animation: `${pulseBrilho} 0.6s infinite;`,
});

export const BlurText = ({
  title,
  onclick,
  css,
  pulse,
}: {
  title: string;
  onclick?: () => void;
  css?: CSS;
  pulse?: boolean;
}) => {
  function handleClick() {
    onclick?.();
  }

  const colorChange = pulse ? { textShadow: "0 0 3px rgba(9, 255, 0, 0.84), 0 0 5px rgba(22, 255, 80, 0.62)" } : {};
  const colorChangeBlink = pulse
    ? {
        textShadow:
          "0 0 3px rgba(0, 255, 34, 0.84), 0 0 5px rgba(22, 255, 61, 0.62), 0 0 40px rgba(86, 255, 190, 0.76))",
      }
    : {};
  const animatePulseScale = pulse ? { animation: `${scalePulse} 0.2s infinite alternate` } : {};

  return (
    <Container onClick={handleClick} css={{ ...css }}>
      {title}
      <MainText css={{ ...css, ...animatePulseScale, ...colorChange }}>{title}</MainText>
      <BlinkText css={{ ...css, ...animatePulseScale, ...colorChangeBlink }}>{title}</BlinkText>
    </Container>
  );
};
