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

const fontCss = {
  fontFamily: "Parkinsans",
  fontWeight: 800,
  fontSize: "26px",
};

const hiddenFont = {
  color: "transparent",
  ...fontCss,
};

const Container = styled("button", {
  ...hiddenFont,
  backgroundColor: "transparent",
  width: "100%",
  border: "none",
  flex: 1,
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

export const BlurText = ({ title, onclick, css }: { title: string; onclick?: () => void; css?: CSS }) => {
  function handleClick() {
    onclick?.();
  }

  return (
    <Container onClick={handleClick} css={{ ...css }}>
      {title}
      <MainText css={{ ...css }}>{title}</MainText>
      <BlinkText css={{ ...css }}>{title}</BlinkText>
    </Container>
  );
};
