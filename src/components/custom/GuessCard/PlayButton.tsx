import { Play } from "@/components/icons/audiowave/Play";
import { PlayFundo } from "@/components/icons/audiowave/PlayFundo";
import { styled } from "@/styles/stitches.config";

const Container = styled("div", {
  position: "relative",
  display: "flex",
  width: "60px",
  height: "60px",
});

export function PlayButton() {
  return (
    <Container>
      <PlayFundo css={{ filter: "blur(1px)" }} />
      <Play css={{ filter: "blur(2px)" }} />
      <Play
        css={{
          position: "absolute",
          scale: 0.75,
          filter: "blur(2px)",
          translate: "-1px",
          "& path": { fill: "white" },
        }}
      />
    </Container>
  );
}
