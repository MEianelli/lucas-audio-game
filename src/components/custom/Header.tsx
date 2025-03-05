import { FlexR } from "@/components/containers/flex";
import { Bars } from "@/components/custom/Bars";
import { Menu } from "@/components/custom/Menu/Menu";
import { Text } from "@/components/text/text";
import { Div } from "../containers/div";
import { Hearts } from "./Hearts";

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
            color: "$green",
            fontSize: "36px",
            "@s": {
              fontSize: "22px",
            },
          }}
          weight={"700"}
        >
          {`MovieGuess`}
        </Text>
        <Text
        size={"s"} weight={"normal"} css={{ textAlign: "center" }}></Text>
      </Div>
      <Hearts />
      <Bars />
    </FlexR>
  );
}
