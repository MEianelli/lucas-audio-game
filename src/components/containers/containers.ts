import { styled } from "@/styles/stitches.config";
import { FlexR } from "./flex";

export const Container = styled("div", {
  maxWidth: "$cell",
  marginX: "auto",
  backgroundColor: "$darkPurple",
  height: "100vh",
});

export const Center = styled(FlexR, {
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
});
