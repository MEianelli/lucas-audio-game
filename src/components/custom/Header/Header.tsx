import { FlexC, FlexR } from "@/components/containers/flex";
import { styled } from "@/styles/stitches.config";
import { Heart } from "@/components/icons/heart";
import { World } from "@/components/icons/world";
import { Bolt } from "@/components/icons/bolt";
import { BlurText } from "@/components/text/BlurText";
import { IconsText } from "@/components/text/IconsText";
import { StrongBlurText } from "@/components/text/StrongBlurText";
import { useStore } from "@/lib/store";
import { useEffect } from "react";
import { ButtonClean } from "@/components/buttons/buttons";
import { useRouter } from "next/router";

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
  const lifes = useStore((s) => s.lifes);

  return (
    <FlexR sb css={{ paddingX: "18px" }}>
      <StrongBlurText title="GuessGame" css={{ fontSize: "32px", flex: 0 }} />
      <FlexR cc css={{ gap: 6 }}>
        <IconsText title={lifes.toString()} variant="red" />
        <Heart size={"30px"} />
      </FlexR>
    </FlexR>
  );
}

export function GameHeader() {
  const lifes = useStore((s) => s.lifes);
  const currentstreak = useStore((s) => s.currentstreak);
  const score = useStore((s) => s.score);
  const name = useStore((s) => s.name);
  const setModalOption = useStore((s) => s.setModalOption);
  const router = useRouter();

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
          <ButtonClean onClick={() => router.push("/")}>
            <StrongBlurText title="GuessGame" css={{ fontSize: "28px" }} />
          </ButtonClean>
          <BlurText title={name || "No user"} onclick={() => {}} css={{ fontSize: "12px" }} />
        </FlexC>
        <ButtonClean css={{ paddingTop: 5, display: "flex", flexFlow: "row nowrap" }} onClick={handleIconsClick}>
          <IconWrapper css={{ marginRight: 4 }}>
            <World size={26} />
            <IconsText title={score.toString()} variant="blue" />
          </IconWrapper>
          <IconWrapper>
            <Bolt size={"30px"} />
            <IconsText title={currentstreak.toString()} variant="yellow" />
          </IconWrapper>
          <IconWrapper>
            <Heart size={"30px"} />
            <IconsText title={lifes.toString()} variant="red" />
          </IconWrapper>
        </ButtonClean>
      </FlexR>
    </Wrapper>
  );
}
