import { ButtonClean } from "@/components/buttons/buttons";
import { Div } from "@/components/containers/div";
import { FlexC } from "@/components/containers/flex";
import { useStore } from "@/lib/store";
import { styled } from "@/styles/stitches.config";

const BaseBar = styled(Div, {
  width: "38px",
  height: "7px",
  borderRadius: "2px",
});

export function Menu() {
  const setModalOption = useStore((store) => store.setModalOption);

  return (
    <ButtonClean
      css={{ marginLeft: "left", "&:active div": { background: "red" } }}
      onClick={() => setModalOption("menu")}
    >
      <FlexC
        css={{
          justifyContent: "center",
          alignItems: "end",
          gap: "7px",
          height: "min-content",
        }}
      >
        <BaseBar css={{ backgroundColor: "#901dff" }} />
        <BaseBar css={{ backgroundColor: "#6b0eda" }} />
        <BaseBar css={{ backgroundColor: "#4600b5" }} />
      </FlexC>
    </ButtonClean>
  );
}
