import { keyframes, styled } from "@/styles/stitches.config";
import { CSS } from "@stitches/react";
import { useState } from "react";

export interface AnswersButtonPros
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  correct: string;
  onclick: () => void;
  css?: CSS;
}

export function AnswersButton({
  text,
  onclick,
  correct,
  css,
  ...rest
}: AnswersButtonPros) {
  const [animateRight, setAnimateRight] = useState(false);
  const [animateWrong, setAnimateWrong] = useState(false);

  const handleClick = () => {
    onclick();
    if (text === correct) {
      setAnimateRight(true);
      return;
    }

    setAnimateWrong(true);
    return;
  };

  return (
    <ButtonAns
      css={{ width: "85%", ...css }}
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
    textShadow: "2px 0 $red, -2px 0 $green2",
  },
  "50%": {
    borderColor: "#F6F2F0",
    color: "#F6F2F0",
    textShadow: "-2px 0 #F6F2F0, 2px 0 $purple",
  },
  "75%": {
    borderColor: "$green2",
    color: "$green2",
    textShadow: "2px 0 $green, -2px 0 $red",
  },
  "100%": {
    borderColor: "$green2",
    color: "$green2",
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
    borderColor: "$green2",
  },  
  "100%": {
    transform: "translate(0, 0)",
    borderColor: "$green2",
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
    textShadow: "2px 0 $red, -2px 0 $green",
  },
  "50%": {
    borderColor: "#F6F2F0",
    color: "#F6F2F0",
    textShadow: "-2px 0 #F6F2F0, 2px 0 $purple",
  },
  "75%": {
    borderColor: "$green",
    color: "$green",
    textShadow: "2px 0 $green, -2px 0 $red",
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
    borderColor: "$green",
  },
  "100%": {
    transform: "translate(0, 0)",
    borderColor: "$red",
  },
});

const ButtonAns = styled("button", {
  color: "$purple",
  fontWeight: "800",
  fontSize: "21px",
  lineHeight: "26px",
  fontFamily: "Parkinsans",
  backgroundColor: "#00000000",
  borderRadius: "22px",
  padding: "18px",
  border: "6px solid $purple",
  flex: 1,
  margin: 3,
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
          borderColor: "$green",
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
