import { useState } from "react";
import { FlexC, FlexR } from "@/components/containers/flex";
import { Text } from "@/components/text/text";
import { useStore } from "@/lib/store";
import { ButtonClean } from "@/components/buttons/buttons";
import { useShallow } from "zustand/shallow";

type RankUser = {
  name: string;
  winrate?: number;
  maxstreak?: number;
};

const rankMenuOptions = ["This Week", "WinRate", "Streak"];

type RankType = "winrate" | "streak";

export const Ranking = () => {
  const [rankTypeInd, setRankTypeInd] = useState(0);

  return (
    <FlexC css={{ gap: 12, flex: 1 }}>
      <FlexR sb css={{ borderBottom: "4px solid $purple", paddingBottom: 6 }}>
        {rankMenuOptions.map((rank, i) => (
          <ButtonClean key={rank} onClick={() => setRankTypeInd(i)}>
            <Text ms cp={i !== rankTypeInd}>
              {rank}
            </Text>
          </ButtonClean>
        ))}
      </FlexR>

      <RankingList menuOption={rankTypeInd} />
    </FlexC>
  );
};

const RankingList = ({ menuOption }: { menuOption: number }) => {
  const [name, rankData, winrate, maxstreak, setModalOption] = useStore(
    useShallow((s) => [
      s.name,
      s.rankData,
      s.winrate,
      s.maxstreak,
      s.setModalOption,
    ])
  );

  function handleClick() {
    setModalOption("login");
  }

  return (
    <>
      <TopPlayers
        topList={rankData?.[menuOption !== 2 ? "top5winrate" : "top5streak"]}
        type={menuOption !== 2 ? "winrate" : "streak"}
      />
      {name && (
        <RankRow
          user={{ name, winrate, maxstreak }}
          index={
            rankData?.[menuOption !== 2 ? "userWinRatePos" : "userStreakPos"]
          }
          isUser
          type={menuOption !== 2 ? "winrate" : "streak"}
        />
      )}
      {!name && (
        <ButtonClean css={{ alignSelf: "center" }} onClick={handleClick}>
          <Text s>Wanna show on Rank?</Text>
          <Text u s>
            Register/Login
          </Text>
        </ButtonClean>
      )}
    </>
  );
};

const TopPlayers = ({
  topList,
  type = "winrate",
}: {
  topList?: { name: string }[];
  type?: RankType;
}) => {
  return (
    <FlexC css={{ gap: 8, width: "100%" }}>
      {topList?.map((user, index) => {
        return (
          <RankRow key={user.name} user={user} index={index + 1} type={type} />
        );
      })}
    </FlexC>
  );
};

const RankRow = ({
  user,
  index,
  isUser,
  type = "winrate",
}: {
  user: RankUser;
  index?: number;
  isUser?: boolean;
  type?: RankType;
}) => {
  if (index === undefined) return null;
  return (
    <FlexR css={{ gap: 4 }}>
      <Text ms css={{ color: isUser ? "$green" : "$yellow" }}>
        {index + "."}
      </Text>
      <Text ms>{user?.name[0]?.toUpperCase() + user?.name?.slice(1)}</Text>
      <Text cp s>
        ●
      </Text>
      {type === "winrate" ? (
        <Text cg ms>
          {((user?.winrate || 0) / 100).toFixed(2) + "%"}
        </Text>
      ) : (
        <Text cg ms>
          {user?.maxstreak}
        </Text>
      )}
    </FlexR>
  );
};
