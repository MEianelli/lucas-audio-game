import { FlexC, FlexR } from "@/components/containers/flex";
import { Bars } from "@/components/custom/Bars";
import { Hearts } from "@/components/custom/Hearts";
import { Text } from "@/components/text/text";

export function Header() {
  return (
    <>
      <FlexR css={{ justifyContent: "flex-start" }}>
        <Hearts />
        <Text css={{ textTransform: "uppercase" }} weight={"700"} size={"b"}>
          {`Guess the Movie`}
        </Text>
        <Bars />
      </FlexR>
      <FlexC css={{ justifyContent: "center" }}>
        <Text css={{ textAlign: "center" }} weight={"700"}>
          Adivinhe de que filme são essas falas.
        </Text>
        <Text css={{ textAlign: "center" }}>
          Basta dar um enter depois da sua resposta.
        </Text>
        <Text css={{ textAlign: "center" }}>
          cadastre-se para entrar no ranking
        </Text>
      </FlexC>
    </>
  );
}
