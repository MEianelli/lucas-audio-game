import { useEffect, useMemo, useState } from "react";
import { FlexC, FlexR } from "../containers/flex";
import { Text } from "../text/text";
import { getAllUsers, User } from "@/lib/supabase";
import { Span } from "../containers/div";
import { useStore } from "@/lib/store";
import LoadingSkeleton from "./LoadingBars";

const RANK_BAR_WIDTH = 200;
const RANK_BAR_WIDTH_OFFSET = 100;

type RankUser = {
  position: number;
  width: number;
  name: string;
  score: number;
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
        width: (RANK_BAR_WIDTH * rank.score) / maxScore + RANK_BAR_WIDTH_OFFSET,
      };
    });
    const user = ranks?.find(
      ({ name: userName }) => userName === name
    ) as RankUser;
    return { ranks, user };
  }, [users]);

  return (
    <FlexC css={{ gap: 8 }}>
      <Text
        color={"text"}
        size={"b"}
        css={{
          marginBottom: 8,
          fontFamily: "$mono",
          fontWeight: 700,
        }}
      >{`Rankings`}</Text>
      {loading && <LoadingSkeleton />}
      {!loading && (
        <FlexC css={{ gap: 8, width: "100%" }}>
          {ranks?.slice(0, 5).map((it) => {
            return <RankRow key={it.name} user={it} />;
          })}
          <RankRow key={user?.name} user={user} isSolo />
        </FlexC>
      )}
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
        alignItems: "center",
        gap: 8,
        marginTop: isSolo ? "20px" : "unset",
      }}
    >
      <Text css={{ color: "$text", width: "30px" }}>#{user?.position}</Text>
      <FlexR
        css={{
          justifyContent: "space-between",
          backgroundColor: isSolo ? "$pink" : "$brightGreen",
          color: "$white",
          borderRadius: 4,
          padding: "8px 12px",
          width: `${user?.width}px`,
        }}
      >
        <Span>{user?.name}</Span>
        <Span>{user?.score}</Span>
      </FlexR>
    </FlexR>
  );
};
