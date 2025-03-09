import { useEffect, useMemo, useState } from "react";
import { FlexC, FlexR } from "../containers/flex";
import { Text } from "../text/text";
import { getAllUsers } from "@/lib/supabase";
import { Span } from "../containers/div";
import { useStore } from "@/lib/store";
import LoadingSkeleton from "./LoadingBars";
import { ButtonClean, ButtonG } from "../buttons/buttons";
import { User } from "@/types/types";

type RankUser = {
  position: number;
  name: string;
  score: number;
  width: number;
};

export const Ranking = () => {
  const name = useStore((store) => store.name);
  const [users, setUsers] = useState<User[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getUsers() {
      const data = await getAllUsers();
      setUsers(data);
      setLoading(false);
    }
    getUsers();
  }, []);

  const { ranks, user } = useMemo(() => {
    const sorted = users
      ?.map(({ name, hitids }) => ({ name, score: hitids?.length ?? 0 }))
      .sort((a, b) => b.score - a.score);
    const maxScore = sorted?.[0].score ?? 1;
    const ranks = sorted?.map((rank, index) => {
      return {
        ...rank,
        position: index + 1,
        width: rank.score / maxScore,
      };
    });
    const user = ranks?.find(
      ({ name: userName }) => userName === name
    ) as RankUser;
    return { ranks, user };
    //eslint-disable-next-line
  }, [users]);

  return (
    <FlexC css={{ gap: 8 }}>
      <Text
        size={"b"}
        css={{
          marginBottom: 20,
          fontFamily: "$mono",
          fontWeight: 700,
          color: "$green",
        }}
      >{`Rankings`}</Text>
      {loading && <LoadingSkeleton />}
      <FlexR css={{ gap: 4 }}>
        <ButtonG>Weekly</ButtonG>
        <ButtonG notSelected>Alltime</ButtonG>
        <ButtonG notSelected>Most Impossible</ButtonG>
      </FlexR>
      {!loading && (
        <FlexC css={{ gap: 8, width: "100%" }}>
          {ranks?.slice(0, 5).map((it) => {
            return <RankRow key={it.name} user={it} />;
          })}
          <RankRow key={user?.name} user={user} isSolo />
        </FlexC>
      )}
      <FlexR sb>
        <ButtonClean>
          <Text
            css={{
              fontSize: 12,
              color: "white",
              textDecoration: "underline",
              textDecorationColor: "$grey",
              textUnderlineOffset: "3px",
            }}
          >
            Show All Rank and Prizes
          </Text>
        </ButtonClean>
        <Text css={{ fontSize: 12, color: "white" }}>Resets in 78:51:33</Text>
      </FlexR>
    </FlexC>
  );
};

const RankRow = ({
  isSolo = false,
  user,
}: {
  isSolo?: boolean;
  user: RankUser;
}) => {
  return (
    <FlexR
      css={{
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "$darkgrey",
        border: `2px solid ${isSolo ? "$pink" : "$green"}`,
        color: "$white",
        fontWeight: 700,
        borderRadius: 6,
        padding: "8px 12px",
        width: "100%",
        marginTop: isSolo ? "20px" : "unset",
        gap: 8,
        background: `linear-gradient(to right, ${isSolo ? "$pink" : "$green"} ${
          user.width * 100
        }%, transparent ${user.width * 100 + 2}%)`,
      }}
    >
      <Text>{user?.position}</Text>
      <Span>{user?.name[0].toUpperCase() + user?.name.slice(1)}</Span>
      <Span>{isSolo ? "(You)" : ""}</Span>
      <Span
        css={{
          fontSize: 14,
          color: "$grey",
        }}
      >
        {user?.score + "Points"}
      </Span>
    </FlexR>
  );
};
