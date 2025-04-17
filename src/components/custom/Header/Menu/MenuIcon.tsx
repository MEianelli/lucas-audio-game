import { ButtonClean } from "@/components/buttons/buttons";
import { Div } from "@/components/containers/div";
import { FlexC } from "@/components/containers/flex";
import { useStore } from "@/lib/store";
import { styled } from "@/styles/stitches.config";

const BaseBar = styled(Div, {
  width: "24px",
  height: "2px",
  borderRadius: "2px",
  backgroundColor: "$white",
});

export function Menu() {
  const setModalOption = useStore((s) => s.setModalOption);

  return (
    <ButtonClean
      css={{ marginLeft: "left", "&:active div": { background: "red" } }}
      onClick={() => setModalOption("menu")}
    >
      <FlexC
        css={{
          justifyContent: "center",
          alignItems: "end",
          gap: "5px",
          height: "min-content",
        }}
      >
        <BaseBar />
        <BaseBar />
        <BaseBar />
      </FlexC>
    </ButtonClean>
  );
}
