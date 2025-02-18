import { CloseIcon } from "../icons/close";
import { ButtonClean } from "./buttons";

export const CloseButton = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) => {
  return (
    <ButtonClean
      css={{
        position: "absolute",
        top: "11px",
        right: "11px",
        "& svg path": { fill: "$green" },
      }}
      {...props}
    >
      <CloseIcon size={"30px"} />
    </ButtonClean>
  );
};
