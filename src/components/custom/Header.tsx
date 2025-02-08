import { FlexR } from "@/components/containers/flex";
import { Bars } from "@/components/custom/Bars";
import { Menu } from "@/components/custom/Menu";
import { Text } from "@/components/text/text";
import { Div } from "../containers/div";

export function Header() {
  return (
    <FlexR css={{ justifyContent: "space-between", alignItems: "center" }}>
      <Menu />
      <Div>
        <Text
          css={{
            textTransform: "uppercase",
            whiteSpace: "nowrap",
            textAlign: "center",
          }}
          weight={"700"}
          size={"b"}
        >
          {`Guess the Movie`}
        </Text>
        <Text size={"s"} weight={"normal"} css={{ textAlign: "center" }}>
          Guess from what movie is each audio quote
        </Text>
      </Div>
      <Bars />
    </FlexR>
  );
}
