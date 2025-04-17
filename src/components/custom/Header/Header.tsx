import { FlexR } from "@/components/containers/flex";
import { Menu } from "@/components/custom/Header/Menu/MenuIcon";
import { Text } from "@/components/text/text";
import { RankingIcon } from "./RankingIcon";
import { Counter } from "./Counter";
import { Lifes } from "./Lifes";
import { Score } from "./Score";
import { styled } from "@/styles/stitches.config";

const Wrapper = styled(FlexR, {
  padding: "8px",
  height: "60px",
})

export function Header({ dailyIds }: { dailyIds: number[] }) {
  return (
    <Wrapper sbc>
      <Menu />
      <Text g>{`MovieGuess`}</Text>
      <Counter dailyIds={dailyIds} />
    </Wrapper>
  );
}

export function HomeHeader() {
  return (
    <Wrapper sbc>
      <Menu />
      <Text g>{`MediaGuess`}</Text>
      <RankingIcon />
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