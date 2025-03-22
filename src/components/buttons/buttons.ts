import { styled } from "@/styles/stitches.config";

export const DefaultButtonStyle = {
  color: "$white",
  fontWeight: "700",
  fontFamily: "$sans",
  fontSize: 24,
  backgroundColor: "$primary",
  borderRadius: "9px",
  padding: "$16 $24",
  border: "none",
  height: "fit-content",
  width: "100%",
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

export const ButtonWhite = styled("button", {
  fontFamily: "$Parkinsans",
  fontWeight: "600",
  whiteSpace: "nowrap",
  textAlign: "center",
  color: "$white",
  background: "transparent",
  borderRadius: "14px",
  fontSize: "24px",
  border: "3px solid $white",
  outline: "none",
  padding: "10px",

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
  },
});

export const ButtonG = styled("button", {
  color: "$purple",
  fontWeight: "700",
  fontSize: "14px",
  lineHeight: "16px",
  backgroundColor: "$darkgrey",
  borderRadius: "8px",
  padding: "8px",
  border: "3px solid $purple",
  flex: 1,
  whiteSpace: "nowrap",
  cursor: "pointer",

  "&:disabled": {
    borderColor: "$lightGrey",
    color: "$lightGrey",
    opacity: "0.5",
  },

  variants: {
    notSelected: {
      true: {
        color: "$grey",
        borderColor: "$grey",
      },
    },
  },
});
