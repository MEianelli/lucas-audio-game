import { styled } from "@/styles/stitches.config";
import { FlexR } from "./flex";
import { Div } from "./div";

export const Container = styled("div", {
  maxWidth: "$cell",
  marginX: "auto",
  backgroundColor: "$darkPurple",
  height: "100vh",
  overflow: "hidden",
});

export const Center = styled(FlexR, {
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
});

export const IconsContainer = styled(Div, {
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "40px",
  height: "40px",
});
