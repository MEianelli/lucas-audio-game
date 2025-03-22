import { ButtonWhite } from "@/components/buttons/buttons";
import { useStore } from "@/lib/store";
import { deleteCookie } from "@/utils/cookie";
import { useRouter } from "next/navigation";

export const DeleteAccount = () => {
  const router = useRouter();
  const resetStore = useStore((s) => s.resetStore);

  function handleClick() {
    deleteCookie();
    resetStore();
    router.push("/");
  }
  return (
    <ButtonWhite
      css={{ color: "$red", borderColor: "$red", marginTop: "14px" }}
      onClick={handleClick}
    >
      Delete Account
    </ButtonWhite>
  );
};
