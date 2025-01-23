import { styled } from "@/styles/stitches.config";

export const Text = styled("p", {
  margin: 0,
  fontFamily: "$sans",

  variants: {
    color: {
      white: {
        color: "$white",
      },
      green: {
        color: "$green",
      },
      red: {
        color: "$red",
      },
      grey: {
        color: "$grey",
      },
    },
    size: {
      s: {
        fontSize: "14px",
      },
      m: {
        fontSize: "20px",
      },
      b: {
        fontSize: "32px",
      },
    },
    weight: {
      normal: {
        fontWeight: "normal",
      },
      700: {
        fontWeight: 700,
      },
    },
  },

  defaultVariants: {
    color: "white",
    weight: "normal",
    size: "m",
  },
});
