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
        color: "$purple",
      },
      red: {
        color: "$red",
      },
      grey: {
        color: "$grey",
      },
      text: {
        color: "$text",
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
        fontSize: "27px",
        "@sm": {
          fontSize: "24px",
        },
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

export const TextWarning = styled("p", {
  margin: 0,
  color: "$red",
  fontFamily: "sans-serif",
  fontWeight: "bolder",
  textTransform: "uppercase",
  fontSize: 12,
});
