import { styled } from "@/styles/stitches.config";

export const Flex = styled("div", {
  display: "flex",
});

export const FlexC = styled(Flex, {
  flexFlow: "column",
});

export const FlexR = styled(Flex, {
  flexFlow: "row",
});
