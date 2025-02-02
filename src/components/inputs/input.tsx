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
<<<<<<< Updated upstream
  borderRadius: "4px",
  fontSize: "24px",
=======
  fontSize: "14px",
  opacity: "0.9",
>>>>>>> Stashed changes

  "&::file-selector-button": {
    ...DefaultButtonStyle,
  },
});
<<<<<<< Updated upstream
=======

export const DarkTextInput = styled(Input, {
  backgroundColor: "$grey",
  maxWidth: "$cardWidthPadding",
  color: "$white",
  fontSize: "14px",
});

export const LoginInput = styled(Input, {
  backgroundColor: "$mediumGrey",
  color: "$lightblack",  
  fontSize: "24px",
  "&::placeholder": {
    color: "$white",
  },
});
>>>>>>> Stashed changes
