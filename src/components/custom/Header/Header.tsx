import { FlexC, FlexR } from "@/components/containers/flex";
import { Menu } from "@/components/custom/Header/Menu/MenuIcon";
import { Text } from "@/components/text/text";
import { Lifes } from "./Lifes";
import { Score } from "./Score";
import { styled } from "@/styles/stitches.config";
import { Heart } from "@/components/icons/heart";
import { World } from "@/components/icons/world";
import { Bolt } from "@/components/icons/bolt";
import { BlurText } from "@/components/buttons/BlurText/BlurText";
import { Div } from "@/components/containers/div";
import { BlurText2 } from "@/components/buttons/BlurText/BlurText2";
import { BlurTextStrong } from "@/components/buttons/BlurText/BlurTextStrong";

const Wrapper = styled(FlexC, {
  padding: "15px 20px 0px",
});

export function HomeHeader() {
  return (
    <Wrapper cc>
      <Menu css={{ marginRight: "auto" }} />
      <Text g css={{ marginRight: "auto" }}>{`MediaGuess`}</Text>
    </Wrapper>
  );
}

export function GameHeader() {
  return (
    <Wrapper sbc>
      <FlexR css={{ gap: "20px", width: "100%" }}>
        <BlurTextStrong title="GuessGame" css={{ fontSize: "28px" }} />
        <World size={26} />
        <Heart size={"30px"} />
        <Bolt size={"30px"} />
      </FlexR>
      <FlexR css={{ gap: "20px", width: "100%" }}>
        <BlurText title="Guilherme932" onclick={() => {}} css={{ fontSize: "12px" }} />
        <BlurText2 title="234" variant="blue" />
        <BlurText2 title="3" variant="red" />
        <BlurText2 title="0" variant="yellow" />
      </FlexR>
    </Wrapper>
  );
}
