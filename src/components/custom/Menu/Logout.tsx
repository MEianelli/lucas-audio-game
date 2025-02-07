import { Button } from "@/components/buttons/buttons";
import { deleteCookie } from "@/utils/cookie";

export const Logout = () => {
  function handleClick() {
    deleteCookie();
    window.location.reload();
  }
  return <Button onClick={handleClick}>Logout</Button>;
};
