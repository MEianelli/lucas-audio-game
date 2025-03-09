import { ButtonG } from "../../buttons/buttons";
import { FlexC } from "../../containers/flex";
import { Text } from "../../text/text";

export const NoLifes = () => {
  return (
    <FlexC css={{ gap: 8 }}>
      <Text
        css={{
          marginBottom: 8,
          color: "$green",
          fontSize: "28px",
          fontWeight: 700,
          whiteSpace: "nowrap",
        }}
      >{`You ran out of lives`}</Text>
      <ButtonG css={{ color: "white" }}>
        Watch Ad to fill you to full life.
      </ButtonG>
    </FlexC>
  );
};
