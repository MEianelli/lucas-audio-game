import { ButtonClean } from "@/components/buttons/buttons";
import { Div } from "@/components/containers/div";
import { FlexC } from "@/components/containers/flex";
import { useStore } from "@/lib/store";

export function Menu() {
  const setModalOption = useStore((store) => store.setModalOption);

  return (
    <ButtonClean
      css={{ marginLeft: "left", "&:active div":{background:"red"} }}
      onClick={() => setModalOption("menu")}
    >
      <svg 
      viewBox="0 0 40 40" 
      width="40" 
      height="40" 
      xmlns="http://www.w3.org/2000/svg"
      >
      <rect x="5" y="5" width="30" height="7" rx="2" ry="2" fill="#901dff">
      </rect>

      <rect x="5" y="16.5" width="30" height="7" rx="2" ry="2" fill="#6b0eda">
      </rect>

      <rect x="5" y="28" width="30" height="7" rx="2" ry="2" fill="#4600b5">
      </rect>
      </svg>

      
    </ButtonClean>
  );
}
