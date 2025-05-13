import { useState } from "react";
import { FlexC, FlexR } from "@/components/containers/flex";
import { Text } from "@/components/text/text";
import { useStore } from "@/lib/store";
import { ButtonClean } from "@/components/buttons/buttons";
import { useShallow } from "zustand/shallow";
import { keyframes } from "@stitches/react";

type RankUser = {
  name: string;
  score?: number;
  maxstreak?: number;
};

const rankMenuOptions = ["Score", "Streak"];

type RankType = "score" | "streak";

export const Ranking = () => {
  const [rankTypeInd, setRankTypeInd] = useState(0);

  return (
    <FlexC css={{ gap: 12, flex: 1 }}>
      <FlexR se css={{ borderBottom: "4px solid $purple", paddingBottom: 6 }}>
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
  const [name, rankData, score, maxstreak, setModalOption] = useStore(
    useShallow((s) => [s.name, s.rankData, s.score, s.maxstreak, s.setModalOption])
  );

  function handleClick() {
    setModalOption("login");
  }

  const chosenMenu = menuOption !== 1;
  const rankPos = chosenMenu ? rankData?.userScorePos : rankData?.userStreakPos;
  const displayRank = chosenMenu ? "top5score" : "top5streak";
  const userRankIndex = chosenMenu ? "userScorePos" : "userStreakPos";
  const rankType = chosenMenu ? "score" : "streak";

  return (
    <>
      <TopPlayers topList={rankData?.[displayRank]} type={rankType} playerInTop5Index={rankPos} />
      {name && Number(rankPos) > 4 ? (
        <RankRow user={{ name, score, maxstreak }} index={rankData?.[userRankIndex]} isUser type={rankType} animate />
      ) : (
        <BlankRankRow />
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
  type = "score",
  playerInTop5Index,
}: {
  topList?: { name: string }[];
  type?: RankType;
  playerInTop5Index?: number;
}) => {
  return (
    <FlexC css={{ gap: 8, width: "100%" }}>
      {topList?.map((user, index) => {
        const playerInTop5 = playerInTop5Index === index + 1;
        return <RankRow key={user.name} user={user} index={index + 1} type={type} animate={playerInTop5} />;
      })}
    </FlexC>
  );
};

const bounceAnimation = keyframes({
  "0%": { transform: "scale(1)" },
  "100%": { transform: "scale(1.1)" },
});

const RankRow = ({
  user,
  index,
  isUser,
  type = "score",
  animate,
}: {
  user: RankUser;
  index?: number;
  isUser?: boolean;
  type?: RankType;
  animate?: boolean;
}) => {
  if (index === undefined) return null;

  const displayPoints = type === "score" ? user.score : user.maxstreak;
  const textLen = `${index}.${user?.name}${displayPoints}`.length;
  const fillerDifflen = 22 - textLen;
  const filler = "●".repeat(fillerDifflen);
  const animation = animate ? `${bounceAnimation} 0.5s infinite alternate linear` : "none";

  return (
    <FlexR cc css={{ gap: 4, animation }}>
      <Text ms css={{ color: isUser ? "$green" : "$yellow" }}>
        {index + "."}
      </Text>
      <Text ms>{user?.name}</Text>
      <Text cp s>
        {filler}
      </Text>
      <Text cg ms>
        {displayPoints}
      </Text>
    </FlexR>
  );
};

const BlankRankRow = () => {
  return (
    <FlexR cc>
      <Text cp ms css={{ color: "transparent" }}>
        ●
      </Text>
    </FlexR>
  );
};
