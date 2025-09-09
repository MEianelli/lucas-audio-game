import { BlurText } from "@/components/text/BlurText";
import { IconsText } from "@/components/text/IconsText";
import { ButtonClean } from "@/components/buttons/buttons";
import { FlexC, FlexR } from "@/components/containers/flex";
import { World } from "@/components/icons/world";
import { useStore } from "@/lib/store";

export type Ttabs = "weekly" | "all";

export function Ranking() {
  const rankData = useStore((s) => s.rankData);
  const name = useStore((s) => s.name);
  const id = useStore((s) => s.id);
  const score = useStore((s) => s.score);
  const topScore = rankData?.top5score;
  const userPos = rankData?.userScorePos;
  const isOnTop = topScore?.find((it) => it?.id === id);
  const shortName = name.slice(0, 10);

  return (
    <FlexC cc css={{ gap: 6 }}>
      <FlexR
        css={{
          gap: 24,
          height: 205,
          width: "100%",
        }}
      >
        <FlexC css={{ gap: 6, flex: "1 0", justifyContent: "flex-start" }}>
          <BlurText title={"Leaderboard"} css={{ fontSize: "22px" }} />
          {topScore?.map((it, i) => (
            <BlurText title={`${i + 1}. ${it?.name.slice(0, 10)}`} key={it?.name} pulse={it?.name === name && !!id} />
          ))}
          {!id && <BlurText title={`?? . ${"No User"}`} pulse={true} />}
          {!isOnTop && !!id && <BlurText title={`${userPos}. ${shortName}`} pulse={true} />}
        </FlexC>
        <FlexC css={{ gap: 6 }}>
          <ButtonClean css={{ paddingBottom: 4 }}>
            <World size={26} variant={"pulsing"} />
          </ButtonClean>
          {topScore?.map((it) => (
            <IconsText
              title={it?.score?.toString()}
              variant="blue"
              key={it?.name + "sd7gn87"}
              css={{ fontSize: "18px" }}
            />
          ))}
          {!isOnTop && <IconsText title={score.toString()} variant="blue" css={{ fontSize: "18px" }} />}
        </FlexC>
      </FlexR>
    </FlexC>
  );
}
