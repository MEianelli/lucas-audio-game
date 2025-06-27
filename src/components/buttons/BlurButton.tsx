import { css as clsGen, keyframes, styled } from "@/styles/stitches.config";
import { CSS } from "@stitches/react";
import { ReactNode, useState } from "react";

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

const pulseBrilhoForte = keyframes({
  "0%, 10%, 20%, 30%, 40%, 50%, 60%, 70%, 80%, 90%, 100%": {
    opacity: "0%",
  },
  "25%, 35%, 45%, 75%": {
    opacity: "45%",
  },
  "15%, 65%, 85%": {
    opacity: "50%",
  },
  "5%, 55%, 95%": {
    opacity: "60%",
  },
});

const surgindo = keyframes({
  "0%": { opacity: "0%" },
  "100%": { opacity: "100%" },
});

const clickedText = clsGen({
  textShadow: `#fff 0px 0px 3px`,
  animation: `${surgindo} 1s forwards`,
});

const clickedBlinkText = clsGen({
  filter: "blur(2px)",
  textShadow: `#000 -3px 0px 3px`,
  animation: `${surgindo} 1s forwards, ${pulseBrilhoForte} 0.6s infinite;`,
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

const commonSize = {
  width: "100%",
  height: "66px",
};

const Container = styled("button", {
  ...hiddenFont,
  ...commonSize,
  backgroundColor: "transparent",
  padding: "16px 18px",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
});

const StaticBox = styled("div", {
  ...hiddenFont,
  ...commonSize,
  backgroundColor: "#08b73e",
  filter: "blur(2px)",
  position: "absolute",
  padding: "16px 18px",
  border: "none",
  borderRadius: "10px",
  boxShadow: `0px 0px 40px 10px "#09520f" inset`,
});

const BlinkBox = styled("div", {
  ...hiddenFont,
  ...commonSize,
  backgroundColor: "#08b73e75",
  filter: "blur(2px)",
  position: "absolute",
  padding: "16px 18px",
  border: "none",
  borderRadius: "10px",
  opacity: "0.8",
  boxShadow: "none",
  animation: `${pulseBrilho} 0.1s infinite;`,
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

const IconDiv = styled("div", {
  position: "absolute",
  top: "13px",
  width: "24px",
  height: "24px",
});

export const BlurButton = ({
  title,
  onclick,
  css,
  disabled,
  size,
  children,
  color,
}: {
  title: string;
  onclick: () => void;
  css?: CSS;
  size?: string;
  children?: ReactNode;
  color?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const [animate, setAnimate] = useState(false);

  function handleClick() {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 1000);
    onclick();
  }

  const animateTxtCls = animate ? clickedText() : "";
  const animateTxtBlinkCls = animate ? clickedBlinkText() : "";

  const bgColor = color ? color : "#08b73e";
  const bgColorAlpha = color ? `${color}75` : "#08b73e75";

  return (
    <Container onClick={handleClick} css={{ ...css, ...(!!size && { height: size }) }} disabled={disabled}>
      {title}
      <StaticBox css={{ ...css, background: bgColor, ...(!!size && { height: size }) }}>{title}</StaticBox>
      <BlinkBox css={{ ...css, background: bgColorAlpha, ...(!!size && { height: size }) }}>{title}</BlinkBox>
      <MainText className={animateTxtCls} css={{ ...css }}>
        {title}
      </MainText>
      <BlinkText className={animateTxtBlinkCls} css={{ ...css }}>
        {title}
      </BlinkText>
      <IconDiv css={{ left: "12%" }}>{children}</IconDiv>
      <IconDiv css={{ right: "12%" }}>{children}</IconDiv>
    </Container>
  );
};
