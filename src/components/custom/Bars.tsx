import { ButtonClean } from "@/components/buttons/buttons";
import { Div } from "@/components/containers/div";
import { FlexR } from "@/components/containers/flex";
import { useStore } from "@/lib/store";

export function Bars() {
  const setModalOption = useStore((store) => store.setModalOption);

  return (
    <ButtonClean onClick={() => setModalOption("ranking")}>
      <FlexR
        css={{
          justifyContent: "center",
          alignItems: "end",
          gap: "$4",
          height: "min-content",
        }}
      >
        <Div
          css={{ width: "8px", height: "15px", backgroundColor: "DarkViolet" }}
        />
        <Div
          css={{ width: "8px", height: "20px", backgroundColor: "Yellow" }}
        />
        <Div css={{ width: "8px", height: "25px", backgroundColor: "Green" }} />
      </FlexR>
    </ButtonClean>
  );
}
