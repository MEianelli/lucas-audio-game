import { calculateFontSize } from "@/lib/helpers/fontsize";
import { colorPicker } from "@/lib/helpers/colorPicker";
import { type CardState } from "@/types/types";
import { reduceAnsSize } from "@/utils/strings";
import { CSS } from "@stitches/react";
import { PowerGlitchBtn } from "@/components/buttons/powerGlitch";
import { useMemo, useState } from "react";
import { POWERGLITCH_ANIMATION_DURATION } from "@/lib/contants";
import { useStore } from "@/lib/store";
import { ButtonAns } from "@/components/buttons/buttonAns";
import { GlitchLoader } from "@/components/buttons/GlitchTexts/GlitchLoader";

export interface AnswersButtonPros extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  correct: string;
  onclick: (isRight: boolean, index: number) => void;
  state: CardState;
  clickedIndex?: number;
  index: number;
  css?: CSS;
}

export function AnswersButton({
  text,
  onclick,
  correct,
  css,
  state,
  clickedIndex,
  index,
  ...rest
}: AnswersButtonPros) {
  const isRight = text === correct;
  const [color, setColor] = useState(colorPicker(state, isRight, clickedIndex === index));

  useMemo(() => {
    setTimeout(() => setColor(colorPicker(state, isRight, clickedIndex === index)), POWERGLITCH_ANIMATION_DURATION);
    //eslint-disable-next-line
  }, [state]);
  const parsedText = reduceAnsSize(text);
  const fontSize = calculateFontSize(parsedText.length);

  return (
    <ButtonAns css={{ fontSize, color, ...css }} onClick={() => onclick(isRight, index)} {...rest}>
      {isRight ? (
        <GlitchLoader title={parsedText} css={{ color, fontSize }} variant="green" />
      ) : (
        <GlitchLoader title={parsedText} css={{ color, fontSize }} variant="red" />
      )}
    </ButtonAns>
  );
}
