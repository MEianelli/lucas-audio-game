import { styled } from "@/styles/stitches.config";
import { DefaultButtonStyle } from "../buttons/buttons";

export const Div = styled("div", {});

export const Label = styled("label", {});

export const Input = styled("input", {
  "&::file-selector-button": {
    ...DefaultButtonStyle,
  },
});
