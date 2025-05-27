import { Check } from "@/components/icons/audiowave/Check";
import { CheckFundo } from "@/components/icons/audiowave/CheckFundo";
import { styled } from "@/styles/stitches.config";

const Container = styled("div", {
  position: "relative",
  display: "flex",
  width: "60px",
  height: "60px",
});

export function Correct() {
  return (
    <Container>
      <CheckFundo css={{ filter: "blur(1px)" }} />
      <Check css={{ filter: "blur(2px)" }} />
    </Container>
  );
}
