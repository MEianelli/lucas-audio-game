import { StrongBlurText } from "@/components/text/StrongBlurText";
import { Container } from "@/components/containers/containers";

export function LoadingScreen() {
  return (
    <Container css={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <StrongBlurText title="Filmguess" css={{ fontSize: "38px" }} />
    </Container>
  );
}
