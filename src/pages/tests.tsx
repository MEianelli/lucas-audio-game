import { GlitchLoader, glitchOptions } from "@/components/buttons/GlitchTexts/GlitchLoader";
import { FlexC } from "@/components/containers/flex";

import { Text } from "@/components/text/text";
import { styled } from "@/styles/stitches.config";

const Tests = () => {
  return (
    <FlexC css={{ background: "$darkPurple", width: "900px", height: "100vh", margin: "auto" }}>
      <FlexC ac css={{ width: "100%", gap: 16 }}>
        <Text>TESTES</Text>
        {glitchOptions.map((it) => (
          <ButtonAns key={it}>
            <GlitchLoader variant={it} title={"The Matrix"} css={{ fontSize: "32px" }} />
          </ButtonAns>
        ))}
        <ButtonAnsT>The Matrix</ButtonAnsT>

      </FlexC>
    </FlexC>
  );
};

export default Tests;

export const ButtonAnsT = styled("button", {
  backgroundColor: "transparent",
  width: "50%",
  borderRadius: "20px",
  padding: "16px 18px",
  border: "1px solid $white",
  flex: 1,
  cursor: "pointer",
  color: "#fff", // Bright white text
  textShadow: "0 0 2px $purple", // Subtle text glow

  // Initial glow (matches keyframe "0%")
  boxShadow: `
    0 0 2px #fff,
    0 0 3px #fff,
    0 0 4px #fff,
    0 0 6px #fff,
    0 0 10px $purple,
    0 0 20px $purple,
    inset 0 0 10px 2px $white
  `,
});

const ButtonAns = styled("button", {
  backgroundColor: "transparent",
  width: "100%",
  borderRadius: "20px",
  padding: "16px 18px",
  border: "4px solid $purple",
  flex: 1,
  cursor: "pointer",
  fontFamily: "$Parkinsans",
  fontWeight: "600",
  whiteSpace: "nowrap",
  textAlign: "center",
  color: "$green",
  fontSize: "32px",
});
