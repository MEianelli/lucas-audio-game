import { useGlitch, GlitchHandle } from "react-powerglitch";
import { ButtonAns2 } from "./buttonAns";
import { Div } from "../containers/div";
import { CSS } from "@stitches/react";
import { POWERGLITCH_ANIMATION_DURATION } from "@/lib/contants";

interface PowerGlitchBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  handleClick: () => void;
  css?: CSS;
}

export const PowerGlitchBtn = (props: PowerGlitchBtnProps) => {
  const { title, css, handleClick, ...rest } = props;
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
      velocity: 15,
      amplitudeX: 0.2,
      amplitudeY: 0.2,
    },
    slice: {
      count: 15,
      velocity: 20,
      minHeight: 0.02,
      maxHeight: 0.15,
      hueRotate: true,
    },
    pulse: false,
  });

  return (
    <Div css={{ width: "100%", "& > div": { width: "100%" } }}>
      <ButtonAns2 ref={glitch.ref} css={{ ...css }} onClick={handleClick} {...rest}>
        {title}
      </ButtonAns2>
    </Div>
  );
};
