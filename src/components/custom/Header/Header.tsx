import { FlexR } from "@/components/containers/flex";
import { Menu } from "@/components/custom/Header/Menu/Menu";
import { Text } from "@/components/text/text";
import { Bars } from "./Bars";

export function Header() {
  return (
    <FlexR sbc css={{ padding: "8px" }}>
      <Menu />
      <Text g>{`MovieGuess`}</Text>
      <Bars />
    </FlexR>
  );
}

export function LoginHeader() {
  return (
    <FlexR sbc css={{ padding: "8px" }}>
      <Menu />
      <Text g>{`MediaGuess`}</Text>
      <Bars />
    </FlexR>
  );
}
