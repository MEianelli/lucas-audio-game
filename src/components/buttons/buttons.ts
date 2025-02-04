import { styled } from "@/styles/stitches.config";

export const DefaultButtonStyle = {
  color: "$white",
  fontWeight: "700",
  fontFamily: "$sans",
  fontSize: 24,
  backgroundColor: "$primary",
  borderRadius: "4px",
  padding: "$16 $24",
  border: "none",
  height: "fit-content",
  width: "fit-content",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "$secondary",
  },
  "&:disabled": {
    border: "1px solid #999999",
    backgroundColor: "#cccccc",
    color: "#666666",
  },
};

export const Button = styled("button", {
  ...DefaultButtonStyle,
  variants: {
    variant: {
      delete: {
        backgroundColor: "$red",
        "&:hover": {
          backgroundColor: "$darkRed",
        },
      },
      cadastrar: {
        backgroundColor: "$brightGreen",
        "&:hover": {
          backgroundColor: "$darkGreen",
        },
      },
      login: {
        backgroundColor: "$lightBlue",
        "&:hover": {
          backgroundColor: "$darkBlue",
        },
      },
      link: {
        padding: "0",
        color: "$text",
        textDecoration: "underline",
        backgroundColor: "transparent",
        "&:hover": {
          color: "$darkBlue",
          backgroundColor: "transparent",
        },
      },
    },
    size: {
      full: {
        width: "100%",
      },
    },
  },
});

export const ButtonClean = styled("button", {
  all: "unset",
  height: "fit-content",
  width: "fit-content",
  cursor: "pointer",
});
