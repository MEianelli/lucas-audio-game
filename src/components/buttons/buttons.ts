import { styled } from "@/styles/stitches.config";

export const Button = styled("button", {
  backgroundColor: "$primary",
  color: "$white",
  borderRadius: "$md",
  padding: "$16 $24",
  border: "none",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "$secondary",
  },
});

export const ButtonClean = styled("button", {
  all: "unset",
  height: "fit-content",
  width: "fit-content",
  cursor: "pointer",
});
