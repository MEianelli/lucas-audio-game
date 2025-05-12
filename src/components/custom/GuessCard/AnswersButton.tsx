import { calculateFontSize } from "@/lib/helpers/fontsize";
import { reduceAnsSize } from "@/utils/strings";
import { CSS } from "@stitches/react";
import { Button } from "@/components/buttons/BlurButton/Button";

export interface AnswersButtonPros extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  correct: string;
  onclick: (isRight: boolean) => void;
  css?: CSS;
}

export function AnswersButton({ text, onclick, correct, css, disabled }: AnswersButtonPros) {
  const isRight = text === correct;
  const parsedText = reduceAnsSize(text);
  const fontSize = calculateFontSize(parsedText.length);

  return (
    <Button
      css={{ fontSize, ...css }}
      title={parsedText}
      isRight={isRight}
      onclick={() => onclick(isRight)}
      disabled={disabled}
    />
  );
}
