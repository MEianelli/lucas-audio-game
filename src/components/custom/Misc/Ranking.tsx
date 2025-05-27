import { BlurText } from "@/components/buttons/BlurText/BlurText";
import { BlurText2 } from "@/components/buttons/BlurText/BlurText2";
import { ButtonClean } from "@/components/buttons/buttons";
import { FlexC, FlexR } from "@/components/containers/flex";
import { Bolt } from "@/components/icons/bolt";
import { World } from "@/components/icons/world";
import { useStore } from "@/lib/store";
import { useState } from "react";

export function Ranking() {
  const rankData = useStore((s) => s.rankData);
  const name = useStore((s) => s.name);
  const score = useStore((s) => s.score);
  const maxstreak = useStore((s) => s.maxstreak);
  const [isScore, setIsScore] = useState(true);

  const selectedRank = isScore ? rankData?.top5score : rankData?.top5streak;
  const userPos = isScore ? rankData?.userScorePos : rankData?.userStreakPos;
  const isOnTop = selectedRank?.find((it) => it.name === name);

  return (
    <FlexR
      css={{
        gap: 30,
        height: 205,
        scrollbarWidth: "none",
        "-ms-overflow-style": "none",
        "&::-webkit-scrollbar": { display: "none", width: "0 !important", height: "0 !important" },
      }}
    >
      <FlexC css={{ gap: 6, flex: "1 0", justifyContent: "flex-start" }}>
        <BlurText title={"Leaderboard"} css={{ fontSize: "22px" }} />
        {selectedRank?.map((it, i) => (
          <BlurText title={`${i + 1}. ${it.name}`} key={it.name} pulse={it.name === name} />
        ))}
        {!isOnTop && name && <BlurText title={`${userPos}. ${name}`} pulse={true} />}
        {!name && <BlurText title={`?? . ${"No User"}`} pulse={true} />}
      </FlexC>
      <FlexC css={{ gap: 6 }}>
        <ButtonClean css={{ paddingBottom: 4 }} onClick={() => setIsScore(true)}>
          <World size={26} variant={isScore ? "pulsing" : undefined} />
        </ButtonClean>
        {selectedRank?.map((it) => (
          <BlurText2 title={it.score.toString()} variant="blue" key={it.name + "sd7gn87"} css={{ fontSize: "18px" }} />
        ))}
        {!isOnTop && <BlurText2 title={score.toString()} variant="blue" css={{ fontSize: "18px" }} />}
      </FlexC>
      <FlexC css={{ gap: 6 }}>
        <ButtonClean onClick={() => setIsScore(false)}>
          <Bolt size={"30px"} variant={!isScore ? "pulsing" : undefined} />
        </ButtonClean>
        {selectedRank?.map((it) => (
          <BlurText2
            title={it.maxstreak.toString()}
            variant="yellow"
            css={{ fontSize: "18px" }}
            key={it.name + "3q45b"}
          />
        ))}
        {!isOnTop && <BlurText2 title={maxstreak.toString()} variant="yellow" css={{ fontSize: "18px" }} />}
      </FlexC>
    </FlexR>
  );
}
