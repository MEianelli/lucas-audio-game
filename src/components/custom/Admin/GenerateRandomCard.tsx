import { FlexC } from "@/components/containers/flex";
import { Button } from "@/components/buttons/buttons";
import { Text } from "@/components/text/text";

export const GenerateRandomCard = () => {
  return (
    <FlexC
      css={{
        gap: "32px",
        width: "100%",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <Button variant={"delete"}>Generate</Button>
      <Text size={"b"}>Gerar card para vizualizacao:</Text>
    </FlexC>
  );
};
