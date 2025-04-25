import { calculateFontSize } from "@/lib/helpers/fontsize";
import { colorPicker } from "@/lib/helpers/colorPicker";
import { type CardState } from "@/types/types";
import { reduceAnsSize } from "@/utils/strings";
import { CSS } from "@stitches/react";
import { useMemo, useState } from "react";
import { POWERGLITCH_ANIMATION_DURATION } from "@/lib/contants";
import { Button } from "@/components/buttons/BlurButton/Button";

export interface AnswersButtonPros
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  correct: string;
  onclick: (isRight: boolean, index: number) => void;
  state: CardState;
  index: number;
  css?: CSS;
}

export function AnswersButton({
  text,
  onclick,
  correct,
  css,
  state,
  index,
  ...rest
}: AnswersButtonPros) {
  const isRight = text === correct;
  const [color, setColor] = useState(colorPicker(state, isRight));

  useMemo(() => {
    setTimeout(
      () => setColor(colorPicker(state, isRight)),
      POWERGLITCH_ANIMATION_DURATION
    );
    //eslint-disable-next-line
  }, [state]);
  const parsedText = reduceAnsSize(text);
  const fontSize = calculateFontSize(parsedText.length);

  return <Button />;

  // return (
  //   <ButtonAns css={{ fontSize, color, ...css }} onClick={() => onclick(isRight, index)} {...rest}>
  //     {isRight ? (
  //       <GlitchLoader title={parsedText} css={{ color, fontSize }} variant="green" />
  //     ) : (
  //       <GlitchLoader title={parsedText} css={{ color, fontSize }} variant="red" />
  //     )}
  //   </ButtonAns>
  // );
}
