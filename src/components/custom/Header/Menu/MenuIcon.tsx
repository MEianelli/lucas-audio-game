import { ButtonClean } from "@/components/buttons/buttons";
import { Div } from "@/components/containers/div";
import { FlexC } from "@/components/containers/flex";
import { useStore } from "@/lib/store";
import { styled } from "@/styles/stitches.config";
import { CSS } from "@stitches/react";

const BaseBar = styled(Div, {
  width: "24px",
  height: "2px",
  borderRadius: "2px",
  backgroundColor: "$white",

});

export function Menu({ css }: { css?: CSS }) {
  const setModalOption = useStore((s) => s.setModalOption);

  return (
    <ButtonClean
      css={{ ...css }}
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
