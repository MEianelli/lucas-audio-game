import { styled } from "@/styles/stitches.config";
import { CSS } from "@stitches/react";
import classNames from "classnames";
import { ComponentType, JSX, useState } from "react";
import "./glitches.css";
import "./keyframes.css";

export const glitchOptions = ["red", "green", "crank", "glow"] as const;

export type GlitchOptions = (typeof glitchOptions)[number];
interface GlitchLoaderProps {
  variant: GlitchOptions;
  title: string;
  css?: CSS;
}

export function GlitchLoader({ variant, title, css }: GlitchLoaderProps) {
  const loaderMapper: Record<GlitchOptions, JSX.Element> = {
    red: (
      <GlitchBuilder
        title={title}
        css={{ ...css }}
        TextComponent={T}
        classes={["glitch-cima-v2", "glitch-meio-v2", "glitch-baixo-v2", "brilho-v2"]}
      />
    ),
    green: (
      <GlitchBuilder
        title={title}
        css={{ ...css }}
        TextComponent={T}
        classes={["glitch-cima", "glitch-meio", "glitch-baixo", "brilho"]}
      />
    ),
    crank: (
      <GlitchBuilder
        title={title}
        css={{ ...css }}
        TextComponent={T}
        classes={["glitch-cima-version-1-0", "glitch-baixo-version-1-0"]}
      />
    ),
    glow: (
      <GlitchBuilder
        title={title}
        css={{ ...css }}
        TextComponent={TBlur}
        classes={["glow", "text-shadow-glow", "text-shadow-glow2"]}
      />
    ),
  };

  return loaderMapper[variant];
}

interface GlitchBuilderProps {
  classes: string[];
  title: string;
  TextComponent: ComponentType<{
    children?: React.ReactNode;
    className?: string;
    css?: CSS;
  }>;
  css?: CSS;
}

export function GlitchBuilder({ classes, title, css, TextComponent }: GlitchBuilderProps) {
  const [animate, setAnimate] = useState(false);

  function handleClick() {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 1010);
  }

  const parsedClasses = classes.map((cls) => ({ [cls]: animate }));

  return (
    <Container onClick={handleClick}>
      {!animate && <TextComponent css={{ ...css }}>{title}</TextComponent>}
      {animate &&
        parsedClasses.map((it, i) => (
          <TextComponent key={i} className={classNames(it)} css={{ fontSize: css?.fontSize }}>
            {title}
          </TextComponent>
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
  lineHeight: "30px",
  height: "30px",
  width: "100%",
});

const T = styled("p", {
  margin: 0,
  width: "100%",
  height: "30px",
  textAlign: "center",
  position: "absolute",
  color: "rgb(255, 255, 255)",
  fontFamily: "Parkinsans",
  fontWeight: 700,
  fontSize: "1em",
});

const TBlur = styled("p", {
  textAlign: "center",
  width: "100%",
  height: "30px",
  position: "absolute",
  color: "#ffffff",
  fontFamily: "Parkinsans",
  fontWeight: 800,
  fontSize: "clamp(1.8rem, 10vw, 4rem)",
  filter: "blur(1.3px)",
  zIndex: 5,
  textShadow: "0 0 8px #ff8000d6, 0 0 10px #ffe4169e",
  animation: "sumindo 1s forwards",
});

/* 
["glitch-cima", "glitch-meio", "glitch-baixo", "brilho"]
["glitch-cima-v2", "glitch-meio-v2", "glitch-baixo-v2", "brilho-v2"]
*/
