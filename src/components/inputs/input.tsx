import { styled } from "@/styles/stitches.config";
import { DefaultButtonStyle } from "../buttons/buttons";

export const TextInput = styled("input", {
  backgroundColor: "$grey",
  outline: "none",
  border: "none",
  minHeight: "30px",
  maxWidth: "120px",
  borderRadius: "4px",
  padding: "8px",
  color: "$white",
});

export const Input = styled("input", {
  outline: "none",
  border: "1px solid $lightGrey",
  padding: "12px",
  borderRadius: "4px",
  fontSize: "24px",

  "&::file-selector-button": {
    ...DefaultButtonStyle,
  },
});
