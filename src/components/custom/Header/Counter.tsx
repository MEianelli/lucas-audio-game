import { FlexR } from "@/components/containers/flex";
import { Text } from "@/components/text/text";
import { useDailyRights } from "@/lib/hooks/useDailyRights";
import { useStore } from "@/lib/store";
import { useEffect } from "react";

export const Counter = ({ dailyIds }: { dailyIds: number[] }) => {
  const { hits, played } = useDailyRights(dailyIds);
  const setModalOption = useStore((s) => s.setModalOption);

  useEffect(() => {
    if (played === 10) setTimeout(() => setModalOption("finished"), 1500);
    //eslint-disable-next-line
  }, [played]);

  return (
    <FlexR
      c
      css={{
        border: "3px solid $white",
        paddingX: "10px",
        borderRadius: 10,
        gap: 5,
      }}
    >
      <Text s css={{ color: hits > 0 ? "$green" : "$white" }}>
        {hits}
      </Text>
      <Text s>|</Text>
      <Text s>{played}</Text>
    </FlexR>
  );
};
