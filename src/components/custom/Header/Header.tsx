import { Div } from "@/components/containers/div";
import { FlexR } from "@/components/containers/flex";
import { Menu } from "@/components/custom/Header/Menu/Menu";
import { Text } from "@/components/text/text";

export function Header() {
  return (
    <FlexR sbc css={{ padding: "8px" }}>
      <Menu />
      <Text g>{`MovieGuess`}</Text>
      <Div />
    </FlexR>
  );
}

export function HomeHeader() {
  return (
    <FlexR sbc css={{ padding: "8px" }}>
      <Menu />
      <Text g>{`MediaGuess`}</Text>
      <Div />
    </FlexR>
  );
}
