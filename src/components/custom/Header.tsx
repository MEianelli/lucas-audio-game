import { FlexR } from "@/components/containers/flex";
import { Bars } from "@/components/custom/Bars";
import { Menu } from "@/components/custom/Menu";
import { Text } from "@/components/text/text";
import { Div } from "../containers/div";
import { Hearts } from "./Hearts";

export function Header() {
  return (
    <FlexR css={{ justifyContent: "space-between", alignItems: "center" }}>
      
      <Menu />
      
      <Div>
        <Text
          css={{
            whiteSpace: "nowrap",
            textAlign: "center",
          }}
          weight={"700"}
          size={"b"}
        >
          {`Audio Guesser`}
        </Text>
        <Text size={"s"} weight={"normal"} css={{ textAlign: "center" }}>
        </Text>
      </Div>
      <Hearts />
      <Bars />
    </FlexR>
  );
}
