import { useState } from "react";
import { FlexC, FlexR } from "@/components/containers/flex";
import { Text } from "@/components/text/text";
import { useStore } from "@/lib/store";
import { ButtonClean } from "@/components/buttons/buttons";
import { useShallow } from "zustand/shallow";

type RankUser = {
  name: string;
  winrate: number;
};

const rankTypes = ["This Week", "WinRate", "Streak"];

export const Ranking = () => {
  const [name, rankData, winrate] = useStore(
    useShallow((s) => [s.name, s.rankData, s.winrate])
  );
  const [rankTypeInd, setRankTypeInd] = useState(0);

  function handleClick(ind: number) {
    setRankTypeInd(ind);
  }

  return (
    <FlexC css={{ gap: 12, paddingX: 16, paddingTop: 16 }}>
      <FlexR sb css={{ borderBottom: "4px solid $purple", paddingBottom: 6 }}>
        {rankTypes.map((rank, i) => (
          <ButtonClean key={rank} onClick={() => handleClick(i)}>
            <Text ms cp={i !== rankTypeInd}>
              {rank}
            </Text>
          </ButtonClean>
        ))}
      </FlexR>

      <FlexC css={{ gap: 8, width: "100%" }}>
        {rankData?.top5winrate.map((user, index) => {
          return <RankRow key={user.name} user={user} index={index} />;
        })}
      </FlexC>

      <RankRow
        key={name + "solo"}
        user={{ name, winrate }}
        index={rankData?.userWinRatePos || 0}
        isUser
      />
    </FlexC>
  );
};

const RankRow = ({
  user,
  index,
  isUser,
}: {
  user: RankUser;
  index: number;
  isUser?: boolean;
}) => {
  return (
    <FlexR css={{ gap: 4 }}>
      <Text ms css={{ color: isUser ? "$green" : "$yellow" }}>
        {index + 1 + "."}
      </Text>
      <Text ms>{user?.name[0]?.toUpperCase() + user?.name?.slice(1)}</Text>
      <Text cp s>
        ●
      </Text>
      <Text cg ms>
        {((user?.winrate || 0) / 100).toFixed(2) + "%"}
      </Text>
    </FlexR>
  );
};
