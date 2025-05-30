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

export const LoginInputCrt = styled("input", {
  outline: "none",
  border: "none",
  borderRadius: "10px",
  backgroundColor: "rgb(15 0 41)",
  filter: "blur(1px)",
  padding: "16px 18px",
  boxShadow: "rgb(49 9 150 / 80%) 0px 0px 40px 10px inset",
  fontSize: "24px",
  color: "$white",
  textShadow: "0 0 3px #ff8000d6, 0 0 5px #ffe4169e",
  "&::placeholder": {
    textShadow: "none",
  },
});
