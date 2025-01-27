import { styled } from "@/styles/stitches.config";

export const DefaultButtonStyle = {
  backgroundColor: "$primary",
  color: "$white",
  borderRadius: "4px",
  padding: "$16 $24",
  border: "none",
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
});

export const ButtonClean = styled("button", {
  all: "unset",
  height: "fit-content",
  width: "fit-content",
  cursor: "pointer",
});
