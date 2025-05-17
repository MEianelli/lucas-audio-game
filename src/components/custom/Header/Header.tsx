import { FlexC, FlexR } from "@/components/containers/flex";
import { Menu } from "@/components/custom/Header/Menu/MenuIcon";
import { Text } from "@/components/text/text";
import { styled } from "@/styles/stitches.config";
import { Heart } from "@/components/icons/heart";
import { World } from "@/components/icons/world";
import { Bolt } from "@/components/icons/bolt";
import { BlurText } from "@/components/buttons/BlurText/BlurText";
import { BlurText2 } from "@/components/buttons/BlurText/BlurText2";
import { BlurTextStrong } from "@/components/buttons/BlurText/BlurTextStrong";
import { useStore } from "@/lib/store";
import { useEffect } from "react";
import { ButtonClean } from "@/components/buttons/buttons";

const Wrapper = styled(FlexC, {
  padding: "15px 16px 0px 26px",
});

const IconWrapper = styled(FlexC, {
  gap: 6,
  justifyContent: "space-between",
  alignItems: "center",
  width: "42px",
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
  const lifes = useStore((s) => s.lifes);
  const currentstreak = useStore((s) => s.currentstreak);
  const score = useStore((s) => s.score);
  const name = useStore((s) => s.name);
  const setModalOption = useStore((s) => s.setModalOption);

  useEffect(() => {
    if (lifes <= 0) {
      setTimeout(() => setModalOption("finished"), 1000);
    }
    //eslint-disable-next-line
  }, [lifes]);

  function handleIconsClick() {
    if (lifes <= 0) {
      setModalOption("finished");
    }
  }

  return (
    <Wrapper>
      <FlexR css={{ justifyContent: "space-between" }}>
        <FlexC css={{ justifyContent: "flex-start" }}>
          <BlurTextStrong title="GuessGame" css={{ fontSize: "28px" }} />
          <BlurText title={name || "No user"} onclick={() => {}} css={{ fontSize: "12px" }} />
        </FlexC>
        <ButtonClean css={{ paddingTop: 5, display: "flex", flexFlow: "row nowrap" }} onClick={handleIconsClick}>
          <IconWrapper css={{ marginRight: 4 }}>
            <World size={26} />
            <BlurText2 title={score.toString()} variant="blue" />
          </IconWrapper>
          <IconWrapper>
            <Heart size={"30px"} />
            <BlurText2 title={lifes.toString()} variant="red" />
          </IconWrapper>
          <IconWrapper>
            <Bolt size={"30px"} />
            <BlurText2 title={currentstreak.toString()} variant="yellow" />
          </IconWrapper>
        </ButtonClean>
      </FlexR>
    </Wrapper>
  );
}
