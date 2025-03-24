import { FlexC } from "@/components/containers/flex";
import { Text } from "@/components/text/text";
import { styled } from "@/styles/stitches.config";

const Tests = () => {
  return (
    <FlexC css={{ background: "$black", width: "900px", height: "100vh", margin: "auto" }}>
      <FlexC ac css={{ width: "90%", gap: 16, border: "1px solid $purple" }}>
        <Text css={{ marginBottom: "64px" }}>TESTES</Text>
        <ButtonAns></ButtonAns>
        <ButtonAns></ButtonAns>
        <ButtonGreen>Verde</ButtonGreen>
      </FlexC>
    </FlexC>
  );
};

export default Tests;

const ButtonGreen = styled("button", {
  color: "$white",
  backgroundColor: "#00ff55",
  width: "85%",
  borderRadius: "20px",
  padding: "18px",
  border: "4px solid #00ff55",
  cursor: "pointer",
});

const ButtonAns = styled("button", {
  backgroundColor: "transparent",
  width: "85%",
  borderRadius: "20px",
  padding: "18px",
  border: "4px solid $purple",
  flex: 1,
  cursor: "pointer",
});
