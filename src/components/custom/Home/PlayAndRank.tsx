import { Ranking } from "@/components/custom/Misc/Ranking";
import { FlexC, FlexR } from "@/components/containers/flex";
import { PlayNowButton } from "@/components/custom/Home/PlayNowButton";
import { styled } from "@/styles/stitches.config";

const RankContainer = styled("div", {
  border: "1px solid transparent",
  padding: 12,
  paddingBottom: 24,
  borderRadius: 8,
  boxShadow: "0px 0px 10px 1px yellow",
});

export function PlayAndRank() {
  return (
    <FlexR css={{ padding: "18px 42px", gap: 24, overflow: "scroll", scrollbarWidth: "none" }}>
      <FlexC css={{ gap: 16, alignItems: "center" }}>
        <PlayNowButton categorie="movies" />
        <RankContainer>
          <Ranking />
        </RankContainer>
      </FlexC>
      <FlexC css={{ gap: 16 }}>
        <PlayNowButton categorie="music" />
        <RankContainer>
          <Ranking />
        </RankContainer>
      </FlexC>
    </FlexR>
  );
}
