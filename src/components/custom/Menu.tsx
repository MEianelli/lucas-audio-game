import { ButtonClean } from "@/components/buttons/buttons";
import { Div } from "@/components/containers/div";
import { FlexC, FlexR } from "@/components/containers/flex";

export function Menu() {
  return (
    <ButtonClean css={{ marginLeft: "left" }}>
      <FlexC
        css={{
          justifyContent: "center",
          alignItems: "end",
          gap: "$4",
          margin: "4px",
          height: "min-content",
        }}
      >
        <Div
          css={{
            width: "25px",
            height: "6px",
            backgroundColor: "White",
          }}
        />
        <Div
          css={{ width: "25px", height: "6px", backgroundColor: "White" }}
        />
        <Div css={{ width: "25px", height: "6px", backgroundColor: "White" }} />

        
      </FlexC>
    </ButtonClean>
  );
}
