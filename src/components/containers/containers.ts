import { styled } from "@/styles/stitches.config";
import { FlexR } from "./flex";

export const Container = styled("div", {
  maxWidth: "$cell",
  marginX: "auto",
  backgroundColor: "$black",
});

export const Center = styled(FlexR, {
  justifyContent: "center",
  gap: "20px",
});
