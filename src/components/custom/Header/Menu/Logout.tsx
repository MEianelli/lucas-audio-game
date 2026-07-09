import { ButtonWhite } from "@/components/buttons/buttons";
import { useStore } from "@/lib/store";
import { logoutClient } from "@/utils/logout";
import { useRouter } from "next/navigation";

export const Logout = () => {
  const router = useRouter();
  const resetStore = useStore((s) => s.resetStore);

  async function handleClick() {
    await logoutClient();
    resetStore();
    router.push("/");
  }
  return <ButtonWhite onClick={handleClick}>Logout</ButtonWhite>;
};
