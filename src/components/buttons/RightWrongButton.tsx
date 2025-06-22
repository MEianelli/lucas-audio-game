import { css as clsGen, keyframes, styled } from "@/styles/stitches.config";
import { CSS } from "@stitches/react";
import { useState } from "react";

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
  backgroundColor: "rgb(15 0 41)",
  filter: "blur(2px)",
  position: "absolute",
  padding: "16px 18px",
  border: "none",
  borderRadius: "10px",
  boxShadow: "rgb(49 9 150 / 80%) 0px 0px 40px 10px inset",
});

const BlinkBox = styled("div", {
  ...hiddenFont,
  ...commonSize,
  backgroundColor: "rgb(15 0 41)",
  filter: "blur(2px)",
  position: "absolute",
  padding: "16px 18px",
  border: "none",
  borderRadius: "10px",
  opacity: "0.8",
  boxShadow: "0px 0px 40px 20px rgb(49 9 150) inset, 0px 0px 5px 5px rgb(15 0 41)",
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

export const RightWrongButton = ({
  title,
  onclick,
  tc,
  css,
  disabled,
}: {
  title: string;
  onclick: () => void;
  tc: boolean;
  css?: CSS;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const [animate, setAnimate] = useState(false);

  function handleClick() {
    onclick();
    if (!disabled) {
      setAnimate(true);
    }
  }

  const clickedBlinkBox = clsGen({
    backgroundColor: tc ? "#08b73e75" : "rgba(183 8 56 75)",
    boxShadow: "none",
    filter: "blur(2px)",
    animation: `${surgindo} 1s forwards, ${pulseBrilho} 0.6s infinite;`,
  });

  const clickedBox = clsGen({
    backgroundColor: tc ? "#08b73e" : "rgb(183 8 56)",
    boxShadow: `0px 0px 40px 10px ${tc ? "#09520f" : "rgb(82 9 23)"} inset`,
    filter: "blur(2px)",
    animation: `${surgindo} 1s forwards`,
  });

  const animateBoxBlinkCls = animate ? clickedBlinkBox() : "";
  const animateBoxCls = animate ? clickedBox() : "";
  const animateTxtCls = animate ? clickedText() : "";
  const animateTxtBlinkCls = animate ? clickedBlinkText() : "";

  return (
    <Container onClick={handleClick} css={{ ...css }}>
      {title}
      <StaticBox className={animateBoxCls} css={{ ...css }}>
        {title}
      </StaticBox>
      <BlinkBox className={animateBoxBlinkCls} css={{ ...css }}>
        {title}
      </BlinkBox>
      <MainText className={animateTxtCls} css={{ ...css }}>
        {title}
      </MainText>
      <BlinkText className={animateTxtBlinkCls} css={{ ...css }}>
        {title}
      </BlinkText>
    </Container>
  );
};
