import { styled } from "@/styles/stitches.config";

export const ButtonAns = styled("button", {
  backgroundColor: "transparent",
  width: "100%",
  borderRadius: "20px",
  padding: "16px 18px",
  border: "1px solid white",
  flex: 1,
  cursor: "pointer",
  color: "#fff", // Bright white text
  textShadow: "0 0 2px $purple", // Subtle text glow

  // Initial glow (matches keyframe "0%")
  boxShadow: `
    0 0 2px #fff,
    0 0 4px #fff,
    0 0 6px #fff,
    0 0 10px $purple,
    0 0 20px $purple,
    inset 0 0 10px $purple
  `,
});

export const ButtonAns2 = styled("button", {
  backgroundColor: "transparent",
  borderRadius: "20px",
  padding: "16px 18px",
  border: "4px solid $purple",
  flex: 1,
  cursor: "pointer",
  fontFamily: "$Parkinsans",
  fontWeight: "600",
  whiteSpace: "nowrap",
  textAlign: "center",
  color: "$white",
});
