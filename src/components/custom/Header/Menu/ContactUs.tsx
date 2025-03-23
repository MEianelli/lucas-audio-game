import { ButtonWhite } from "@/components/buttons/buttons";
import { Glitch } from "@/components/buttons/GlitchTexts/Version1/glitch";

export const ContactUs = () => {
  function handleClick() {
    console.log("Ola");
  }
  return (
    <ButtonWhite onClick={handleClick}>
      <Glitch title="Contact Us" />
    </ButtonWhite>
  );
};
