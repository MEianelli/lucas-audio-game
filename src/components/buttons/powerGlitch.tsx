import { useGlitch, GlitchHandle } from "react-powerglitch";
import { ButtonAns2 } from "./buttonAns";
import { Div } from "../containers/div";
import { CSS } from "@stitches/react";
import { POWERGLITCH_ANIMATION_DURATION } from "@/lib/contants";
import { useRandomSeed } from "@/lib/hooks/useRandomSeed";

interface PowerGlitchBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  handleClick: () => void;
  css?: CSS;
}

export const PowerGlitchBtn = (props: PowerGlitchBtnProps) => {
  const { title, css, handleClick, ...rest } = props;
  const { seed } = useRandomSeed();
  const glitch: GlitchHandle = useGlitch({
    playMode: "click",
    optimizeSeo: true,
    createContainers: true,
    hideOverflow: false,
    timing: {
      duration: POWERGLITCH_ANIMATION_DURATION,
      iterations: 1,
    },
    glitchTimeSpan: {
      start: 0,
      end: 1,
    },
    shake: {
      velocity: 15 + seed * 30,
      amplitudeX: 0.2 + seed,
      amplitudeY: 0.2 + seed,
    },
    slice: {
      count: 15 + seed * 30,
      velocity: 20 + seed * 30,
      minHeight: 0.02 + seed / 10,
      maxHeight: 0.15 + seed / 10,
      hueRotate: true,
    },
    pulse: false,
  });

  if (seed < 0.5) {
    return (
      <ButtonAns2 css={{ width: "100%", "& > div": { width: "100%" }, ...css }} onClick={handleClick} {...rest}>
        <span ref={glitch.ref}>{title}</span>
      </ButtonAns2>
    );
  }

  return (
    <Div css={{ width: "100%", "& > div": { width: "100%" } }}>
      <ButtonAns2 ref={glitch.ref} css={{ ...css }} onClick={handleClick} {...rest}>
        {title}
      </ButtonAns2>
    </Div>
  );
};
