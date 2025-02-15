import { ButtonClean } from "@/components/buttons/buttons";
import { Div } from "@/components/containers/div";
import { FlexR } from "@/components/containers/flex";
import { useStore } from "@/lib/store";

export function Bars() {
  const setModalOption = useStore((store) => store.setModalOption);

  return (
    <ButtonClean onClick={() => setModalOption("ranking")}>
      {/* <svg 
      viewBox="0 0 40 40" 
      width="40" 
      height="40" 
      xmlns="http://www.w3.org/2000/svg"
      >
      <rect x="5" y="15" width="7" height="20" rx="2" ry="2" fill="#ea3d3d">
      </rect>

      <rect x="16.5" y="10" width="7" height="25" rx="2" ry="2" fill="#ffce00">
      </rect>

      <rect x="28" y="5" width="7" height="30" rx="2" ry="2" fill="#00dd6e">
      </rect>
      </svg> */}
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
