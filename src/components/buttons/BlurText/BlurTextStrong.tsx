import { keyframes, styled } from "@/styles/stitches.config";
import { CSS } from "@stitches/react";

export const pulseBrilho = keyframes({
  "0%, 10%, 20%, 30%, 40%, 50%, 60%, 70%, 80%, 90%, 100%": { opacity: "45%" },
  "25%, 35%, 45%, 75%": { opacity: "50%" },
  "15%, 65%, 85%": { opacity: "65%" },
  "5%, 55%, 95%": { opacity: "70%" },
});

export const surgindo = keyframes({
  "0%": { opacity: "0%" },
  "25%": { opacity: "100%" },
  "100%": { opacity: "100%" },
});

const fontCss = {
  fontFamily: "Parkinsans",
  fontWeight: 800,
};

const hiddenFont = {
  color: "transparent",
  ...fontCss,
};

const Container = styled("div", {
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
});

const common = {
  margin: 0,
  mixBlendMode: "screen",
  position: "absolute",
  filter: "blur(1.2px)",
};

const MainText = styled("p", {
  ...fontCss,
  ...common,
  zIndex: 5,
  color: "#ffc815",
  filter: "blur(1px)",
  textShadow: "0 0 3px #ffb700, 0 0 12px #ffe416",
});

const Forte = styled("p", {
  ...fontCss,
  ...common,
  color: "#ffffff",
  filter: "blur(15px)",
  animation: `${pulseBrilho} 0.8s infinite`,
});

const Red = styled("p", {
  ...fontCss,
  ...common,
  color: "rgba(255, 0, 0, 1)",
  transform: "translate(1.5%)",
});

const Blue = styled("p", {
  ...fontCss,
  ...common,
  color: "rgba(0, 0, 255, 1)",
  transform: "translate(-2%)",
});

const Green = styled("p", {
  ...fontCss,
  ...common,
  color: "rgb(0, 255, 0)",
});

export const BlurTextStrong = ({ title, css }: { title: string; css?: CSS }) => {
  return (
    <Container css={{ ...css }}>
      {title}
      <MainText css={{ ...css }}>{title}</MainText>
      <Forte css={{ ...css }}>{title}</Forte>
      <Green css={{ ...css }}>{title}</Green>
      <Red css={{ ...css }}>{title}</Red>
      <Blue css={{ ...css }}>{title}</Blue>
    </Container>
  );
};
