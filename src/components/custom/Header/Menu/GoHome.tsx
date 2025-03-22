import { ButtonWhite } from "@/components/buttons/buttons";
import { useStore } from "@/lib/store";
import { useRouter } from "next/navigation";

export const GoHome = () => {
  const router = useRouter();
  const setModalOption = useStore((s) => s.setModalOption);

  function handleClick() {
    setModalOption("none");
    router.push("/");
  }
  return <ButtonWhite onClick={handleClick}>Home</ButtonWhite>;
};
