import { styled } from "@/styles/stitches.config";
import { FlexR } from "./flex";
import { Div } from "./div";

export const Container = styled("main", {
  maxWidth: "$cell",
  marginX: "auto",
  backgroundColor: "$darkPurple",
  minHeight: "100vh",
  height: "auto",
  overflowY: "auto",
  overflowX: "hidden",
  boxShadow: "0px 0px 40px 4px black",
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
