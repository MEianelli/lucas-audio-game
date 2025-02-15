import { ButtonClean } from "@/components/buttons/buttons";
import { Div } from "@/components/containers/div";
import { FlexR } from "@/components/containers/flex";
import { useStore } from "@/lib/store";
import { styled } from "@/styles/stitches.config";

const Basebar = styled(Div, {
  width: "7px",
  borderRadius: "2px",
});

export function Bars() {
  const setModalOption = useStore((store) => store.setModalOption);

  return (
    <ButtonClean onClick={() => setModalOption("ranking")}>
      <FlexR
        css={{
          justifyContent: "center",
          alignItems: "end",
          gap: 4,
          height: "min-content",
        }}
      >
        <Basebar css={{ height: "20px", backgroundColor: "#ea3d3d" }} />
        <Basebar css={{ height: "25px", backgroundColor: "#ffce00" }} />
        <Basebar css={{ height: "30px", backgroundColor: "#00dd6e" }} />
      </FlexR>
    </ButtonClean>
  );
}
