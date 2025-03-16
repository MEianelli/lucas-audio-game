import { colorPicker } from "@/lib/hooks";
import { keyframes, styled } from "@/styles/stitches.config";
import { CSS } from "@stitches/react";
import { useState } from "react";

export interface AnswersButtonPros
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  correct: string;
  onRight: () => void;
  onWrong: () => void;
  onclick: () => void;
  state: "ok" | "nok" | "neutral";
  clickedIndex?: number;
  index: number;
  css?: CSS;
}

export function AnswersButton({
  text,
  onRight,
  onWrong,
  onclick,
  correct,
  css,
  state,
  clickedIndex,
  index,
  ...rest
}: AnswersButtonPros) {
  const [animateRight, setAnimateRight] = useState(false);
  const [animateWrong, setAnimateWrong] = useState(false);

  const isRight = text === correct;

  const color = colorPicker(state, isRight, clickedIndex === index);

  const handleClick = () => {
    onclick();
    if (isRight) {
      onRight();
      setAnimateRight(true);
      return;
    }
    onWrong();
    setAnimateWrong(true);
    return;
  };

  return (
    <ButtonAns
      css={{ width: "85%", color, borderColor: color, ...css }}
      onClick={handleClick}
      animate={animateRight}
      animateWrong={animateWrong}
      {...rest}
    >
      {text}
    </ButtonAns>
  );
}

const glitch = keyframes({
  "0%": {
    borderColor: "$purple",
    color: "$purple",
    textShadow: "none",
  },
  "25%": {
    borderColor: "$red",
    color: "$red",
    textShadow: "2px 0 $red, -2px 0 $purple",
  },
  "50%": {
    borderColor: "#F6F2F0",
    color: "#F6F2F0",
    textShadow: "-2px 0 #F6F2F0, 2px 0 $purple",
  },
  "75%": {
    borderColor: "$purple",
    color: "$purple",
    textShadow: "2px 0 $purple, -2px 0 $red",
  },
  "100%": {
    borderColor: "$green",
    color: "$green",
    textShadow: "none",
  },
});

const glitchGhost = keyframes({
  "0%": {
    transform: "translate(0, 0)",
    borderColor: "$purple",
  },
  "25%": {
    transform: "translate(-4px, 4px)",
    borderColor: "$red",
  },
  "50%": {
    transform: "translate(4px, -4px)",
    borderColor: "#F6F2F0",
  },
  "75%": {
    transform: "translate(-4px, -4px)",
    borderColor: "$purple",
  },
  "100%": {
    transform: "translate(0, 0)",
    borderColor: "$green",
  },
});

const glitchWrong = keyframes({
  "0%": {
    borderColor: "$purple",
    color: "$purple",
    textShadow: "none",
  },
  "25%": {
    borderColor: "$red",
    color: "$red",
    textShadow: "2px 0 $red, -2px 0 $purple",
  },
  "50%": {
    borderColor: "#F6F2F0",
    color: "#F6F2F0",
    textShadow: "-2px 0 #F6F2F0, 2px 0 $purple",
  },
  "75%": {
    borderColor: "$purple",
    color: "$purple",
    textShadow: "2px 0 $purple, -2px 0 $red",
  },
  "100%": {
    borderColor: "$red",
    color: "$red",
    textShadow: "none",
  },
});

const glitchGhostWrong = keyframes({
  "0%": {
    transform: "translate(0, 0)",
    borderColor: "$purple",
  },
  "25%": {
    transform: "translate(-4px, 4px)",
    borderColor: "$red",
  },
  "50%": {
    transform: "translate(4px, -4px)",
    borderColor: "#F6F2F0",
  },
  "75%": {
    transform: "translate(-4px, -4px)",
    borderColor: "$purple",
  },
  "100%": {
    transform: "translate(0, 0)",
    borderColor: "$red",
  },
});

const ButtonAns = styled("button", {
  color: "$purple",
  fontWeight: "800",
  fontSize: "18px",
  lineHeight: "18px",
  fontFamily: "Parkinsans",
  backgroundColor: "#00000000",
  borderRadius: "22px",
  padding: "18px",
  border: "6px solid $purple",
  flex: 1,
  whiteSpace: "nowrap",
  cursor: "pointer",
  transition: "all 0.3s ease",
  position: "relative",

  variants: {
    animate: {
      true: {
        animation: `${glitch} 0.5s steps(2, end) forwards`,
        "&::before, &::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          border: "2px solid transparent",
          borderRadius: "5px",
          pointerEvents: "none",
          animation: `${glitchGhost} 0.5s steps(2, end) forwards`,
        },
        "&::before": {
          borderColor: "$red",
          zIndex: -1,
        },
        "&::after": {
          borderColor: "$green",
          zIndex: -2,
        },
      },
    },
    animateWrong: {
      true: {
        animation: `${glitchWrong} 0.5s steps(2, end) forwards`,
        "&::before, &::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          border: "2px solid transparent",
          borderRadius: "5px",
          pointerEvents: "none",
          animation: `${glitchGhostWrong} 0.5s steps(2, end) forwards`,
        },
        "&::before": {
          borderColor: "$purple",
          zIndex: -1,
        },
        "&::after": {
          borderColor: "$red",
          zIndex: -2,
        },
      },
    },
  },
});
