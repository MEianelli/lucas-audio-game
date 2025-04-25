import { css, keyframes, styled } from "@/styles/stitches.config";
import { useState } from "react";

const pulseBrilho = keyframes({
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

const surgindo = keyframes({
  "0%": { opacity: "0%" },
  "100%": { opacity: "100%" },
});

const clickedRight = css({
  color: "$white",
  filter: "blur(0.7px)",
  textShadow: "0 0 3px rgb(65, 255, 55), 0 0 5px rgb(55, 225, 255)",
  animation: `${surgindo} 3s forwards`,
});

const clickedRightBox = css({
  border: "3px solid $white",
  boxShadow:
    "0px 0px 12px 0px rgb(65, 255, 55) inset, 0px 0px 7px 0px rgb(65, 255, 55)",
  filter: "blur(1px)",
  animation: `${surgindo} 1s forwards`,
});

const Container = styled("button", {
  backgroundColor: "transparent",
  width: "100%",
  padding: "16px 18px",
  border: "none",
  borderRadius: "10px",
  flex: 1,
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  color: "transparent",
  fontFamily: "Parkinsans",
  fontWeight: 800,
  fontSize: "26px",
});

const StaticBox = styled("div", {
  backgroundColor: "rgb(15 0 41)",
  filter: "blur(2px)",
  position: "absolute",
  width: "100%",
  color: "transparent",
  fontFamily: "Parkinsans",
  fontWeight: 800,
  fontSize: "26px",
  padding: "16px 18px",
  border: "none",
  borderRadius: "10px",
  boxShadow: "rgb(49 9 150 / 80%) 0px 0px 40px 10px inset",
});

const BlinkBox = styled("div", {
  backgroundColor: "rgb(15 0 41)",
  filter: "blur(2px)",
  position: "absolute",
  width: "100%",
  color: "transparent",
  fontFamily: "Parkinsans",
  fontWeight: 800,
  fontSize: "26px",
  padding: "16px 18px",
  border: "none",
  borderRadius: "10px",
  opacity: "0.8",
  boxShadow:
    "0px 0px 40px 20px rgb(49 9 150) inset, 0px 0px 5px 5px rgb(15 0 41)",
  animation: `${pulseBrilho} 0.1s infinite;`,
});

const MainText = styled("p", {
  margin: 0,
  position: "absolute",
  color: "$white",
  filter: "blur(0.7px)",
  fontFamily: "Parkinsans",
  fontWeight: 800,
  fontSize: "26px",
  textShadow: "0 0 3px #ff8000d6, 0 0 5px #ffe4169e",
});

const BlinkText = styled("p", {
  margin: 0,
  position: "absolute",
  color: "$white",
  filter: "blur(0.7px)",
  fontFamily: "Parkinsans",
  fontWeight: 800,
  fontSize: "26px",
  textShadow:
    "0 0 3px #ff8000d6, 0 0 5px #ffe4169e, 0 0 40px rgba(255, 241, 86, 0.76)",
  animation: `${pulseBrilho} 0.6s infinite;`,
});

export const Button = () => {
  const [animate, setAnimate] = useState(false);

  function handleClick() {
    setAnimate(true);
  }

  return (
    <Container onClick={handleClick}>
      The Matrix
      <StaticBox className={animate ? clickedRightBox() : ""}>
        The Matrix
      </StaticBox>
      <BlinkBox className={animate ? clickedRightBox() : ""}>
        The Matrix
      </BlinkBox>
      <MainText className={animate ? clickedRight() : ""}>The Matrix</MainText>
      <BlinkText className={animate ? clickedRight() : ""}>
        The Matrix
      </BlinkText>
    </Container>
  );
};
