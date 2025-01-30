import { ButtonClean } from "./buttons";

export const CloseButton = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) => {
  return (
    <ButtonClean
      css={{ position: "absolute", top: "5%", right: "5%" }}
      {...props}
    >
      X
    </ButtonClean>
  );
};
