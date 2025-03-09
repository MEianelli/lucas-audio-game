import { ButtonClean } from "@/components/buttons/buttons";
import { Div } from "@/components/containers/div";
import { FlexR } from "@/components/containers/flex";
import { useStore } from "@/lib/store";
import { styled } from "@/styles/stitches.config";
import { Text } from "@/components/text/text";

const Basebar = styled(Div, {
  width: "4px",
  borderRadius: "2px",
  backgroundColor: "$green",
});

export function Bars() {
  const setModalOption = useStore((store) => store.setModalOption);
  const hitids = useStore((store) => store.hitids);

  return (
    <ButtonClean onClick={() => setModalOption("ranking")}>
      <FlexR
        css={{
          justifyContent: "center",
          alignItems: "center",
          gap: 6,
        }}
      >
        <FlexR
          css={{
            justifyContent: "center",
            alignItems: "end",
            gap: 6,
            height: "min-content",
          }}
        >
          <Basebar css={{ height: "20px" }} />
          <Basebar css={{ height: "25px" }} />
          <Basebar css={{ height: "30px" }} />
        </FlexR>
        <Text
          css={{
            color: "$green",
            fontSize: "42px",
            fontWeight: "700",
          }}
        >
          {hitids.length}
        </Text>
      </FlexR>
    </ButtonClean>
  );
}
