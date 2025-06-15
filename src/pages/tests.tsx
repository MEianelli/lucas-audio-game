import { RightWrongButton } from "@/components/buttons/RightWrongButton";
import { BlurButton } from "@/components/buttons/BlurButton";
import { FlexC } from "@/components/containers/flex";
import { BlurText } from "@/components/text/BlurText";
import { IconsText } from "@/components/text/IconsText";
import { StrongBlurText } from "@/components/text/StrongBlurText";

const Tests = () => {
  return (
    <FlexC
      css={{
        background: "$darkPurple",
        width: "900px",
        height: "100vh",
        margin: "auto",
        padding: "60px",
      }}
    >
      <RightWrongButton title="Right Wrong Button" tc={true} onclick={() => {}} />
      <RightWrongButton title="Right Wrong Button" tc={false} onclick={() => {}} />
      <BlurButton title="Blur Button" onclick={() => {}} />
      <BlurText title="TBlurText" />
      <IconsText title="IconsText" variant="red" />
      <IconsText title="IconsText" variant="yellow" />
      <IconsText title="IconsText" variant="blue" />
      <StrongBlurText title="StrongBlurText" />
    </FlexC>
  );
};

export default Tests;
