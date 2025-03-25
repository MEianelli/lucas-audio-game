import { GlitchLoader, glitchOptions } from "@/components/buttons/GlitchTexts/GlitchLoader";
import { FlexC } from "@/components/containers/flex";
import { Text } from "@/components/text/text";
import { styled } from "@/styles/stitches.config";

const Tests = () => {
  return (
    <FlexC css={{ background: "$darkPurple", width: "900px", height: "100vh", margin: "auto" }}>
      <FlexC ac css={{ width: "90%", gap: 16, border: "1px solid $purple" }}>
        <Text css={{ marginBottom: "64px" }}>TESTES</Text>
        {glitchOptions.map((it) => (
          <ButtonAns key={it}>
            <GlitchLoader variant={it} title={"The Matrix"} css={{ fontSize: "24px" }} />
          </ButtonAns>
        ))}
      </FlexC>
    </FlexC>
  );
};

export default Tests;

const ButtonAns = styled("button", {
  backgroundColor: "transparent",
  width: "85%",
  borderRadius: "20px",
  padding: "16px 18px",
  border: "4px solid $purple",
  flex: 1,
  cursor: "pointer",
});
