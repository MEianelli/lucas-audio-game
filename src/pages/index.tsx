import { Container } from "@/components/containers/containers";
import { FlexC, FlexR } from "@/components/containers/flex";
import { Bars } from "@/components/custom/Bars";
import { GuessCards } from "@/components/custom/GuessCards";
import { Hearts } from "@/components/custom/Hearts";

import { Text } from "@/components/text/text";

export default function Home() {
  return (
    <Container css={{ padding: "8px", height: "4000px" }}>
      <FlexC css={{ gap: "22px" }}>
        <FlexR css={{ justifyContent: "flex-start" }}>
          <Hearts />
          <Text css={{ textTransform: "uppercase" }} weight={"700"} size={"b"}>
            Nome do Jogo
          </Text>
          <Bars />
        </FlexR>
        <FlexC css={{ justifyContent: "center" }}>
          <Text css={{ textAlign: "center" }} weight={"700"}>
            Adivinhe de que filme são essas falas.
          </Text>
          <Text css={{ textAlign: "center" }}>
            Basta dar um etner depois da sua resposta.
          </Text>
          <Text css={{ textAlign: "center" }}>
            cadastre-se para entrar no ranking
          </Text>
        </FlexC>
        <GuessCards />
      </FlexC>
    </Container>
  );
}
