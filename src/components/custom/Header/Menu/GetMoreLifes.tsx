import { ButtonWhite } from "@/components/buttons/buttons";
import { useStore } from "@/lib/store";

export const GetMoreLifes = () => {
  const setLifes = useStore((s) => s.setLifes);

  function handleClick() {
    setLifes(3);
  }
  return <ButtonWhite onClick={handleClick}>Get More Lifes</ButtonWhite>;
};
