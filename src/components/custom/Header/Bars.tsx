import { ButtonClean } from "@/components/buttons/buttons";
import { Div } from "@/components/containers/div";
import { FlexR } from "@/components/containers/flex";
import { useStore } from "@/lib/store";
import { styled } from "@/styles/stitches.config";

const Basebar = styled(Div, {
  width: "2px",
  borderRadius: "2px",
  backgroundColor: "$white",
});

export function Bars() {
  const setModalOption = useStore((s) => s.setModalOption);

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
          <Basebar css={{ height: "24px" }} />
          <Basebar css={{ height: "29px" }} />
          <Basebar css={{ height: "34px" }} />
        </FlexR>
      </FlexR>
    </ButtonClean>
  );
}
