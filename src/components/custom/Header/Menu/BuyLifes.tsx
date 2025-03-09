import { ButtonG } from "@/components/buttons/buttons";
import { useStore } from "@/lib/store";

export const BuyLifes = () => {
  const setLifes = useStore((store) => store.setAddLife);

  return <ButtonG onClick={() => setLifes(1)}>Get more lifes</ButtonG>;
};
