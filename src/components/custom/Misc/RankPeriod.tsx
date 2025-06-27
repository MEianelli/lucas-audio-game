import { BlurButton } from "@/components/buttons/BlurButton";
import { FlexR } from "@/components/containers/flex";
import { Dispatch, SetStateAction } from "react";
import { Ttabs } from "./Ranking";

export function RankPeriod({ active, setActive }: { active: Ttabs; setActive: Dispatch<SetStateAction<Ttabs>> }) {
  return (
    <FlexR css={{ gap: 10, marginBottom: 12 }}>
      <BlurButton
        title="Weekly"
        onclick={() => {
          setActive("weekly");
        }}
        css={{ fontSize: 14 }}
        size="16px"
        color={active === "weekly" ? "" : "#8a8a8a"}
      />
      <BlurButton
        title="All"
        onclick={() => {
          setActive("all");
        }}
        css={{ fontSize: 14 }}
        size="16px"
        color={active === "all" ? "" : "#8a8a8a"}
      />
    </FlexR>
  );
}
