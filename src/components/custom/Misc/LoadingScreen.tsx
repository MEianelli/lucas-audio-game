import { BlurTextStrong } from "@/components/buttons/BlurText/BlurTextStrong";
import { Container } from "@/components/containers/containers";

export function LoadingScreen() {
  return (
    <Container css={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <BlurTextStrong title="GuessGame" css={{ fontSize: "38px" }} />
    </Container>
  );
}
