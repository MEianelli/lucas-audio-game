import { Button } from "../buttons/buttons";
import { FlexC } from "../containers/flex";
import { Text } from "../text/text";

export const NoLifes = () => {
  return (
    <FlexC css={{ gap: 8 }}>
      <Text
        color={"text"}
        size={"b"}
        css={{
          marginBottom: 8,
          fontFamily: "$mono",
          fontWeight: 700,
        }}
      >{`Suas vidas acabaram. Espere 30min para carregar cada coração OU`}</Text>
      <Button>Comprar Vidas</Button>
    </FlexC>
  );
};
