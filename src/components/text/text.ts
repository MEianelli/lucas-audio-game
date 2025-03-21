import { styled } from "@/styles/stitches.config";

export const Text = styled("p", {
  margin: 0,
  fontFamily: "$Parkinsans",
  fontWeight: "600",
  whiteSpace: "nowrap",
  textAlign: "center",
  color: "$white",
  fontSize: "24px",

  variants: {
    s: {
      true: {
        fontSize: "18px",
      },
    },
    ms: {
      true: {
        fontSize: "20px",
      },
    },
    m: {
      true: {
        fontSize: "28px",
      },
    },
    g: {
      true: {
        fontSize: "36px",
      },
    },
    u: {
      true: {
        textDecoration: "underline",
        textUnderlineOffset: "8px",
      },
    },
    w: {
      true: {
        fontWeight: "700",
      },
    },
    cg: {
      true: {
        color: "$green",
      },
    },
    cp: {
      true: {
        color: "$purple",
      },
    },
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

export const TitleText = styled("p", {
  margin: 0,
  fontFamily: "Parkinsans",
  fontWeight: "500",
  whiteSpace: "nowrap",
  textAlign: "center",
  color: "$white",
  fontSize: "36px",
  // "@s": {
  //   fontSize: "22px",
  // },
});
