import { ButtonWhite } from "@/components/buttons/buttons";
import { useStore } from "@/lib/store";
import { deleteCookie } from "@/utils/cookie";
import { useRouter } from "next/navigation";

export const Logout = () => {
  const router = useRouter();
  const resetStore = useStore((s) => s.resetStore);

  function handleClick() {
    deleteCookie();
    resetStore();
    router.push("/");
  }
  return <ButtonWhite onClick={handleClick}>Logout</ButtonWhite>;
};
