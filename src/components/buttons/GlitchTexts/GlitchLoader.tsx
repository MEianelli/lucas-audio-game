import { styled } from "@/styles/stitches.config";
import { CSS } from "@stitches/react";
import classNames from "classnames";
import { useState } from "react";
import "./glitches.css";
import "./keyframes.css";

interface GlitchLoaderProps {
  variant: "red" | "green";
  title: string;
  css?: CSS;
}

export function GlitchLoader({ variant, title, css }: GlitchLoaderProps) {
  const loaderMapper = {
    red: <GlitchBuilder title={title} css={{ ...css }} classes={["glitch-cima-v2", "glitch-meio-v2", "glitch-baixo-v2", "brilho-v2"]} />,
    green: <GlitchBuilder title={title} css={{ ...css }} classes={["glitch-cima", "glitch-meio", "glitch-baixo", "brilho"]} />,
  };

  return loaderMapper[variant];
}

interface GlitchBuilderProps {
  classes: string[];
  title: string;
  css?: CSS;
}

export function GlitchBuilder({ classes, title, css }: GlitchBuilderProps) {
  const [animate, setAnimate] = useState(false);

  function handleClick() {
    setAnimate((old) => !old);
  }

  const parsedClasses = classes.map((cls) => ({ [cls]: animate }));

  return (
    <Container onClick={handleClick}>
      <T css={{ ...css }}>{!animate ? title : ""}</T>
      {parsedClasses.map((it, i) => (
        <T key={i + "_glitch"} className={classNames(it)} css={{ ...css }}>
          {animate ? title : ""}
        </T>
      ))}
    </Container>
  );
}

const Container = styled("div", {
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "24px",
  fontWeight: 700,
  lineHeight: "28px",
  height: "28px",
  width: "100%",
});

const T = styled("p", {
  margin: 0,
  width: "100%",
  height: "28px",
  textAlign: "center",
  position: "absolute",
  color: "rgb(255, 255, 255)",
  fontFamily: "Parkinsans",
  fontWeight: 700,
  fontSize: "1em",
});

/* 
["glitch-cima", "glitch-meio", "glitch-baixo", "brilho"]
["glitch-cima-v2", "glitch-meio-v2", "glitch-baixo-v2", "brilho-v2"]
*/
