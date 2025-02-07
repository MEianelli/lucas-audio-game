import { styled } from "@/styles/stitches.config";

export const Div = styled("div");

export const Label = styled("label", {});

export const Carrousel = styled(Div, {
  scrollbarWidth: "none",
  overflow: "scroll",

  "&::-webkit-scrollbar": {
    display: "none",
  },
});

export const Span = styled("span");
