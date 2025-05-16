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
  fontSize: "14px",
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
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
});

const MainText = styled("p", {
  ...fontCss,
  margin: 0,
  position: "absolute",
  filter: "blur(0.7px)",
  color: "rgb(178, 242, 253)",
  textShadow: "0 0 3px rgba(2, 196, 255, 0.716), 0 0 5px rgb(0, 89, 255)",

  variants: {
    color: {
      blue: {
        color: "rgb(178, 242, 253)",
        textShadow: "0 0 3px rgba(2, 196, 255, 0.716), 0 0 5px rgb(0, 89, 255)",
      },
      red: {
        color: "rgb(238, 248, 221)",
        textShadow: "0 0 3px rgb(255, 0, 98), 0 0 5px rgb(255, 0, 98)",
      },
      yellow: {
        color: "rgb(255, 255, 185)",
        textShadow: "0 0 3px rgba(255, 255, 0, 1), 0 0 5px rgb(255, 157, 0)",
      },
    },
  },
});

const BlinkText = styled("p", {
  ...fontCss,
  margin: 0,
  position: "absolute",
  filter: "blur(10px)",
  color: "rgb(178, 242, 253)",
  animation: `${pulseBrilho} 0.6s infinite;`,

  variants: {
    color: {
      blue: {
        color: "rgb(178, 242, 253)",
      },
      red: {
        color: "rgb(238, 248, 221)",
      },
      yellow: {
        color: "rgb(255, 255, 185)",
      },
    },
  },
});

export const BlurText2 = ({
  title,
  css,
  variant,
}: {
  title: string;
  css?: CSS;
  variant: "blue" | "red" | "yellow";
}) => {
  return (
    <Container css={{ ...css }}>
      {title}
      <MainText css={{ ...css }} color={variant}>
        {title}
      </MainText>
      <BlinkText css={{ ...css }} color={variant}>
        {title}
      </BlinkText>
    </Container>
  );
};
