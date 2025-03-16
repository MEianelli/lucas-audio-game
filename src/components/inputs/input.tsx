import { styled } from "@/styles/stitches.config";
import { DefaultButtonStyle } from "@/components/buttons/buttons";

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

export const LoginInput = styled(Input, {
  backgroundColor: "transparent",
  fontFamily: "Parkinsans",
  border: "4px solid $purple",
  color: "$white",
  fontSize: "24px",
  borderRadius: "20px",
  "&::placeholder": {
    color: "$white",
    opacity: "0.6",
  },
});

export const Textarea = styled("textarea", {});
