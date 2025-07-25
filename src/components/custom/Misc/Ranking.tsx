import { BlurText } from "@/components/text/BlurText";
import { IconsText } from "@/components/text/IconsText";
import { ButtonClean } from "@/components/buttons/buttons";
import { FlexC, FlexR } from "@/components/containers/flex";
import { Bolt } from "@/components/icons/bolt";
import { World } from "@/components/icons/world";
import { useStore } from "@/lib/store";
import { useState } from "react";
import { RankPeriod } from "./RankPeriod";

export type Ttabs = "weekly" | "all";

export function Ranking() {
  const rankDataWrapper = useStore((s) => s.rankData);
  const name = useStore((s) => s.name);
  const id = useStore((s) => s.id);
  const score = useStore((s) => s.score);
  const scoreweek = useStore((s) => s.scoreweek);
  const maxstreak = useStore((s) => s.maxstreak);
  const maxstreakweek = useStore((s) => s.maxstreakweek);
  const [isScore, setIsScore] = useState(true);
  const [active, setActive] = useState<Ttabs>("weekly");

  const rankData = active === "all" ? rankDataWrapper?.all : rankDataWrapper?.week;
  const userData = active === "all" ? { score, maxstreak } : { score: scoreweek, maxstreak: maxstreakweek };

  const selectedRank = isScore ? rankData?.top5score : rankData?.top5streak;
  const userPos = isScore ? rankData?.userScorePos : rankData?.userStreakPos;
  const isOnTop = selectedRank?.find((it) => it?.name === name);
  const shortName = name.slice(0, 10);

  return (
    <FlexC cc css={{ gap: 6 }}>
      <RankPeriod active={active} setActive={setActive} />
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
            <BlurText title={`${i + 1}. ${it?.name.slice(0, 10)}`} key={it?.name} pulse={it?.name === name} />
          ))}
          {!id && <BlurText title={`?? . ${"No User"}`} pulse={true} />}
          {!isOnTop && !!id && <BlurText title={`${userPos}. ${shortName}`} pulse={true} />}
        </FlexC>
        <FlexC css={{ gap: 6 }}>
          <ButtonClean css={{ paddingBottom: 4 }} onClick={() => setIsScore(true)}>
            <World size={26} variant={isScore ? "pulsing" : undefined} />
          </ButtonClean>
          {selectedRank?.map((it) => (
            <IconsText
              title={it?.score?.toString()}
              variant="blue"
              key={it?.name + "sd7gn87"}
              css={{ fontSize: "18px" }}
            />
          ))}
          {!isOnTop && <IconsText title={userData.score.toString()} variant="blue" css={{ fontSize: "18px" }} />}
        </FlexC>
        <FlexC css={{ gap: 6 }}>
          <ButtonClean onClick={() => setIsScore(false)}>
            <Bolt size={"30px"} variant={!isScore ? "pulsing" : undefined} />
          </ButtonClean>
          {selectedRank?.map((it) => (
            <IconsText
              title={it?.maxstreak.toString()}
              variant="yellow"
              css={{ fontSize: "18px" }}
              key={it?.name + "3q45b"}
            />
          ))}
          {!isOnTop && <IconsText title={userData.maxstreak.toString()} variant="yellow" css={{ fontSize: "18px" }} />}
        </FlexC>
      </FlexR>
    </FlexC>
  );
}
