import { ButtonWhite } from "@/components/buttons/buttons";

export const ContactUs = () => {
  function handleClick() {
    console.log("Ola");
  }
  return <ButtonWhite onClick={handleClick}>Contact Us</ButtonWhite>;
};
