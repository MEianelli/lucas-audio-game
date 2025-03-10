import { FlexR } from "@/components/containers/flex";
import { Menu } from "@/components/custom/Header/Menu/Menu";
import { Text } from "@/components/text/text";
import { Div } from "@/components/containers/div";
import { Hearts } from "./Hearts";
import { Bars } from "./Bars";

export function Header() {
  return (
    <FlexR
      css={{
        justifyContent: "space-between",
        alignItems: "center",
        padding: "8px 0",
      }}
    >
      <Menu />

      <Div>
        <Text
          css={{
            fontFamily: "Parkinsans",
            fontWeight: "600",
            whiteSpace: "nowrap",
            textAlign: "center",
            color: "$purple",
            fontSize: "36px",
            "@s": {
              fontSize: "22px",
            },
          }}
          weight={"700"}
        >
          {`MovieGuess`}
        </Text>
        <Text size={"s"} weight={"normal"} css={{ textAlign: "center" }}></Text>
      </Div>
      <Hearts />
      <Bars />
    </FlexR>
  );
}
