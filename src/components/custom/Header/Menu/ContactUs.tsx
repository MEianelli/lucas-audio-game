import { ButtonWhite } from "@/components/buttons/buttons";
import { Text } from "@/components/text/text";

export const ContactUs = () => {
  function handleClick() {
    console.log("Ola");
  }
  return (
    <ButtonWhite onClick={handleClick}>
      <Text>Contact Us</Text>
    </ButtonWhite>
  );
};
