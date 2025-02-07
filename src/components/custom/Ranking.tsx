import { useEffect, useMemo, useState } from "react";
import { FlexC, FlexR } from "../containers/flex";
import { Text } from "../text/text";
import { getAllUsers, User } from "@/lib/supabase";
import { Span } from "../containers/div";

const RANK_BAR_WIDTH = 200;
const RANK_BAR_WIDTH_OFFSET = 100;

export const Ranking = () => {
  const [users, setUsers] = useState<User[] | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function getUsers() {
      const data = await getAllUsers();
      setUsers(data);
    }
    getUsers();
    setLoading(false);
  }, []);

  const rankingPoints = useMemo(() => {
    const sorted = users
      ?.map(({ name, hitids }) => ({ name, score: hitids?.length ?? 0 }))
      .sort((a, b) => b.score - a.score);
    const maxScore = sorted?.[0].score ?? 1;
    const ranks = sorted?.map((rank) => {
      return {
        ...rank,
        width: (RANK_BAR_WIDTH * rank.score) / maxScore + RANK_BAR_WIDTH_OFFSET,
      };
    });
    return ranks;
  }, [users]);

  if (loading) return <Text color={"text"}>Loading...</Text>;

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
      <FlexC css={{ gap: 8, width: "100%" }}>
        {rankingPoints?.map((it) => {
          return (
            <FlexR
              key={it.name}
              css={{
                justifyContent: "space-between",
                backgroundColor: "$brightGreen",
                color: "$white",
                borderRadius: 4,
                padding: "8px 12px",
                width: `${it.width}px`,
              }}
            >
              <Span>{it.name}</Span>
              <Span>{it.score}</Span>
            </FlexR>
          );
        })}
      </FlexC>
    </FlexC>
  );
};
