import { BlurText } from "@/components/buttons/BlurText/BlurText";
import { BlurText2 } from "@/components/buttons/BlurText/BlurText2";
import { ButtonClean } from "@/components/buttons/buttons";
import { FlexC, FlexR } from "@/components/containers/flex";
import { Bolt } from "@/components/icons/bolt";
import { World } from "@/components/icons/world";
import { useStore } from "@/lib/store";

export function Ranking() {
  const randData = useStore((s) => s.rankData);

  return (
    <FlexR css={{ gap: 30 }}>
      <FlexC css={{ gap: 4, flex: 1 }}>
        <BlurText title={"Leaderboard"} css={{ fontSize: "22px", width: "min-content" }} />
        {randData?.top5score.map((it, i) => (
          <BlurText title={`${i + 1}. ${it.name}`} css={{ fontSize: "18px", width: "min-content" }} key={it.name} />
        ))}
      </FlexC>
      <FlexC css={{ gap: 4 }}>
        <ButtonClean css={{ paddingBottom: 4 }}>
          <World size={26} variant="pulsing" />
        </ButtonClean>
        {randData?.top5score.map((it) => (
          <BlurText2 title={it.score.toString()} variant="blue" css={{ fontSize: "18px" }} key={it.name + "sd7gn87"} />
        ))}
      </FlexC>
      <FlexC css={{ gap: 4 }}>
        <ButtonClean>
          <Bolt size={"30px"} />
        </ButtonClean>
        {randData?.top5streak.map((it) => (
          <BlurText2
            title={it.maxstreak.toString()}
            variant="yellow"
            css={{ fontSize: "18px" }}
            key={it.name + "3q45b"}
          />
        ))}
      </FlexC>
    </FlexR>
  );
}
