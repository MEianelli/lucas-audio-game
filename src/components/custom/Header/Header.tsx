import { FlexR } from "@/components/containers/flex";
import { Menu } from "@/components/custom/Header/Menu/MenuIcon";
import { Text } from "@/components/text/text";
import { RankingIcon } from "./RankingIcon";
import { Lifes } from "./Lifes";
import { Score } from "./Score";
import { styled } from "@/styles/stitches.config";

const Wrapper = styled(FlexR, {
  padding: "8px",
  height: "60px",
})

export function HomeHeader() {
  return (
    <Wrapper cc>
      <Menu css={{ marginRight: "auto" }} />
      <Text g css={{ marginRight: "auto" }}>{`MediaGuess`}</Text>
    </Wrapper>
  );
}

export function GameHeader() {
  return (
    <Wrapper sbc>
      <Menu />
      <Score />
      <Lifes />
    </Wrapper>
  );
}