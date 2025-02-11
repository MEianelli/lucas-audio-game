import { ButtonClean } from "@/components/buttons/buttons";
import { Div } from "@/components/containers/div";
import { FlexC } from "@/components/containers/flex";
import { useStore } from "@/lib/store";

export function Menu() {
  const setModalOption = useStore((store) => store.setModalOption);

  return (
    <ButtonClean
      css={{ marginLeft: "left" }}
      onClick={() => setModalOption("menu")}
    >
      <FlexC
        css={{
          justifyContent: "center",
          alignItems: "end",
          gap: "7px",
          margin: "8px",
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
        <Div css={{ width: "38px", height: "8px", backgroundColor: "White" }} />
        <Div css={{ width: "38px", height: "8px", backgroundColor: "White" }} />
      </FlexC>
    </ButtonClean>
  );
}
