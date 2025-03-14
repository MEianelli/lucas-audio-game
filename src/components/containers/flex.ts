import { styled } from "@/styles/stitches.config";

export const Flex = styled("div", {
  display: "flex",

  variants: {
    c: {
      true: {
        justifyContent: "center",
      },
    },
    cc: {
      true: {
        justifyContent: "center",
        alignItems: "center",
      },
    },
    sb: {
      true: {
        justifyContent: "space-between",
      },
    },
    s: {
      true: {
        justifyContent: "flex-start",
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

export const Grid = styled("div", {
  display: "grid",
});
