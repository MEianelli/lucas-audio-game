import { FlexR } from "@/components/containers/flex";
import { Menu } from "@/components/custom/Header/Menu/MenuIcon";
import { Text } from "@/components/text/text";
import { RankingIcon } from "./RankingIcon";
import { Counter } from "./Counter";

export function Header({ dailyIds }: { dailyIds: number[] }) {
  return (
    <FlexR sbc css={{ padding: "8px" }}>
      <Menu />
      <Text g>{`MovieGuess`}</Text>
      <Counter dailyIds={dailyIds} />
    </FlexR>
  );
}

export function HomeHeader() {
  return (
    <FlexR sbc css={{ padding: "8px" }}>
      <Menu />
      <Text g>{`MediaGuess`}</Text>
      <RankingIcon />
    </FlexR>
  );
}
