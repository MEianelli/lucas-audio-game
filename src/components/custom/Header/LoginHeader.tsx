import { FlexR } from "@/components/containers/flex";
import { Menu } from "@/components/custom/Header/Menu/Menu";
import { TitleText } from "@/components/text/text";
import { Bars } from "./Bars";

export function LoginHeader() {
  return (
    <FlexR sbc css={{ padding: "8px" }}>
      <Menu />
      <TitleText>{`MediaGuess`}</TitleText>
      <Bars />
    </FlexR>
  );
}
