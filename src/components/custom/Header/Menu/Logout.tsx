import { ButtonG } from "@/components/buttons/buttons";
import { deleteCookie } from "@/utils/cookie";

export const Logout = () => {
  function handleClick() {
    deleteCookie();
    window.location.reload();
  }
  return <ButtonG onClick={handleClick}>Logout</ButtonG>;
};
