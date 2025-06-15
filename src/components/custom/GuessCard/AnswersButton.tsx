import { RightWrongButton } from "@/components/buttons/RightWrongButton";
import { calculateFontSize } from "@/utils/fontsize";
import { reduceAnsSize } from "@/utils/strings";
import { CSS } from "@stitches/react";
export interface AnswersButtonPros extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  date: boolean;
  onclick: (tc: boolean) => void;
  css?: CSS;
}

export function AnswersButton({ text, onclick, date, css, disabled }: AnswersButtonPros) {
  const parsedText = reduceAnsSize(text);
  const fontSize = calculateFontSize(parsedText.length);

  return (
    <RightWrongButton
      css={{ fontSize, ...css }}
      title={parsedText}
      tc={date}
      onclick={() => onclick(date)}
      disabled={disabled}
    />
  );
}
