import { Ranking } from "@/components/custom/Misc/Ranking";
import { FlexC } from "@/components/containers/flex";
import { PlayNowButton } from "@/components/custom/Home/PlayNowButton";
import { styled } from "@/styles/stitches.config";

const RankContainer = styled("div", {
  border: "1px solid transparent",
  padding: "12px 19px 24px",
  borderRadius: 8,
  position: "relative",
  width: "97%",
});

const BlurBg = styled("div", {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  borderRadius: 16,
  filter: "blur(3px)",
});

export function PlayAndRank() {
  return (
    <FlexC css={{ padding: "18px 15px", gap: 16, alignItems: "center" }}>
      <PlayNowButton categorie="movies" />
      <RankContainer>
        <BlurBg
          css={{
            background: "#1b005c",
          }}
        />
        <Ranking />
      </RankContainer>
    </FlexC>
    // <FlexR css={{ padding: "18px 15px", gap: 14, overflow: "scroll", scrollbarWidth: "none" }}>
    //   <FlexC css={{ gap: 16 }}>
    //     <PlayNowButton categorie="music" />
    //     <RankContainer>
    //       <BlurBg
    //         css={{
    //           background: "rgb(1 0 79)",
    //         }}
    //       />
    //       <Ranking />
    //     </RankContainer>
    //   </FlexC>
    // </FlexR>
  );
}
