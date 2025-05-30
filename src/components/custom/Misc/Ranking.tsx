import { BlurText } from "@/components/text/BlurText";
import { IconsText } from "@/components/text/IconsText";
import { ButtonClean } from "@/components/buttons/buttons";
import { FlexC, FlexR } from "@/components/containers/flex";
import { Bolt } from "@/components/icons/bolt";
import { World } from "@/components/icons/world";
import { useStore } from "@/lib/store";
import { useState } from "react";

export function Ranking() {
  const rankData = useStore((s) => s.rankData);
  const name = useStore((s) => s.name);
  const id = useStore((s) => s.id);
  const score = useStore((s) => s.score);
  const maxstreak = useStore((s) => s.maxstreak);
  const [isScore, setIsScore] = useState(true);

  const selectedRank = isScore ? rankData?.top5score : rankData?.top5streak;
  const userPos = isScore ? rankData?.userScorePos : rankData?.userStreakPos;
  const isOnTop = selectedRank?.find((it) => it.name === name);

  return (
    <FlexC cc css={{ gap: 6 }}>
      <BlurText title="Daily | Weekly | All" />
      <FlexR
        css={{
          gap: 24,
          height: 205,
          width: "100%",
        }}
      >
        <FlexC css={{ gap: 6, flex: "1 0", justifyContent: "flex-start" }}>
          <BlurText title={"Leaderboard"} css={{ fontSize: "22px" }} />
          {selectedRank?.map((it, i) => (
            <BlurText title={`${i + 1}. ${it.name}`} key={it.name} pulse={it.name === name} />
          ))}
          {!id && <BlurText title={`?? . ${"No User"}`} pulse={true} />}
          {!isOnTop && !!id && <BlurText title={`${userPos}. ${name}`} pulse={true} />}
        </FlexC>
        <FlexC css={{ gap: 6 }}>
          <ButtonClean css={{ paddingBottom: 4 }} onClick={() => setIsScore(true)}>
            <World size={26} variant={isScore ? "pulsing" : undefined} />
          </ButtonClean>
          {selectedRank?.map((it) => (
            <IconsText
              title={it.score.toString()}
              variant="blue"
              key={it.name + "sd7gn87"}
              css={{ fontSize: "18px" }}
            />
          ))}
          {!isOnTop && <IconsText title={score.toString()} variant="blue" css={{ fontSize: "18px" }} />}
        </FlexC>
        <FlexC css={{ gap: 6 }}>
          <ButtonClean onClick={() => setIsScore(false)}>
            <Bolt size={"30px"} variant={!isScore ? "pulsing" : undefined} />
          </ButtonClean>
          {selectedRank?.map((it) => (
            <IconsText
              title={it.maxstreak.toString()}
              variant="yellow"
              css={{ fontSize: "18px" }}
              key={it.name + "3q45b"}
            />
          ))}
          {!isOnTop && <IconsText title={maxstreak.toString()} variant="yellow" css={{ fontSize: "18px" }} />}
        </FlexC>
      </FlexR>
    </FlexC>
  );
}
