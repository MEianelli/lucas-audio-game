import { styled } from "@/styles/stitches.config";

export const Div = styled("div", {
  boxSizing: "border-box",
});

export const Label = styled("label", {});

export const Carrousel = styled(Div, {
  scrollbarWidth: "none",
  overflow: "scroll",

  "&::-webkit-scrollbar": {
    display: "none",
  },
});
