import { calculateFontSize } from "@/lib/helpers/fontsize";
import { colorPicker } from "@/lib/helpers/colorPicker";
import { styled } from "@/styles/stitches.config";
import { type CardState } from "@/types/types";
import { reduceAnsSize } from "@/utils/strings";
import { CSS } from "@stitches/react";
import { GlitchLoader } from "@/components/buttons/GlitchTexts/GlitchLoader";

export interface AnswersButtonPros extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  correct: string;
  onRight: () => void;
  onWrong: () => void;
  onclick: () => void;
  state: CardState;
  clickedIndex?: number;
  index: number;
  css?: CSS;
}

export function AnswersButton({ text, onRight, onWrong, onclick, correct, css, state, clickedIndex, index, ...rest }: AnswersButtonPros) {
  const isRight = text === correct;

  const color = colorPicker(state, isRight, clickedIndex === index);
  const parsedText = reduceAnsSize(text);
  const fontSize = calculateFontSize(parsedText.length);

  const handleClick = () => {
    onclick();
    if (isRight) {
      onRight();
      return;
    }
    onWrong();
    return;
  };

  return (
    <ButtonAns css={{ fontSize, color, ...css }} onClick={handleClick} {...rest}>
      {isRight ? (
        <GlitchLoader title={parsedText} css={{ color, fontSize }} variant="green" />
      ) : (
        <GlitchLoader title={parsedText} css={{ color, fontSize }} variant="red" />
      )}
    </ButtonAns>
  );
}

const ButtonAns = styled("button", {
  backgroundColor: "transparent",
  width: "85%",
  borderRadius: "20px",
  padding: "18px",
  border: "4px solid $purple",
  flex: 1,
  cursor: "pointer",
});
