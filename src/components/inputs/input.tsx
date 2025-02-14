import { styled } from "@/styles/stitches.config";
import { DefaultButtonStyle } from "../buttons/buttons";

export const Input = styled("input", {
  outline: "none",
  border: "none",
  borderRadius: "8px",
  padding: "12px",
  fontSize: "24px",

  "&::file-selector-button": {
    ...DefaultButtonStyle,
  },
});

export const DarkTextInput = styled(Input, {
  backgroundColor: "$grey",
  color: "$white",
  fontSize: "24px",
});

export const LoginInput = styled(Input, {
  backgroundColor: "$mediumGrey",
  color: "$lightblack",
  fontSize: "24px",
  "&::placeholder": {
    color: "$white",
  },
});
