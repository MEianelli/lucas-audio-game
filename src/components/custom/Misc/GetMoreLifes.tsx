import { BlurButton } from "@/components/buttons/BlurButton";
import { FlexR } from "@/components/containers/flex";
import { useStore } from "@/lib/store";

export function GetMoreLifes() {
  const setLifes = useStore((s) => s.setLifes);
  const setModalOption = useStore((s) => s.setModalOption);
  const updateUserDB = useStore((s) => s.updateUserDB);

  function handleClick() {
    setLifes(3);
    updateUserDB({ lifes: 3})
    setTimeout(() => {
      setModalOption("none");
    }, 1000);
  }

  return (
    <FlexR css={{ gap: "10px" }}>
      <BlurButton title="Watch Ad to Refill Lifes" onclick={handleClick} css={{ fontSize: "20px" }} size={"50px"} />
    </FlexR>
  );
}
