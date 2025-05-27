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
      <RightWrongButton title="The Matrix" isRight={true} onclick={() => {}} />
      <RightWrongButton title="The Matrix 2" isRight={false} onclick={() => {}} />
      <BlurButton title="The Terminator" onclick={() => {}} />
      <BlurText title="The Terminator" />
      <IconsText title="The Terminator" variant="red" />
      <IconsText title="The Terminator" variant="yellow" />
      <IconsText title="The Terminator" variant="blue" />
      <StrongBlurText title="The Terminator" />
    </FlexC>
  );
};

export default Tests;
