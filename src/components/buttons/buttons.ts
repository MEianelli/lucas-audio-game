import { styled } from "@/styles/stitches.config";

export const DefaultButtonStyle = {
  color: "$white",
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
        color: "$white",
        backgroundColor: "$red",
        "&:hover": {
          backgroundColor: "$darkRed",
        },
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
