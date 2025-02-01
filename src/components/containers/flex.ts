import { styled } from "@/styles/stitches.config";

export const Flex = styled("div", {
  display: "flex",

  variants: {
    c: {
      true: {
        justifyContent: "center",
      },
    },
  },
});

export const FlexC = styled(Flex, {
  flexFlow: "column",
});

export const FlexR = styled(Flex, {
  flexFlow: "row",
});
