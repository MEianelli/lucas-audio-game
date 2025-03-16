import { useEffect, useMemo, useState } from "react";
import { FlexC, FlexR } from "@/components/containers/flex";
import { Text } from "@/components/text/text";
import { Span } from "@/components/containers/div";
import { useStore } from "@/lib/store";
import { ButtonClean, ButtonG } from "@/components/buttons/buttons";
import { User } from "@/types/types";
import LoadingSkeleton from "../Misc/LoadingBars";
import api from "@/utils/api";
import { calculateWinRates, sortByWinRate } from "@/lib/helpers/ranking";

type RankUser = {
  name: string;
  winRate: string;
};

export const Ranking = () => {
  const name = useStore((s) => s.name);
  console.log("name :", name);
  const [users, setUsers] = useState<User[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getUsers() {
      const data = await api(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/data/users`,
        {
          method: "GET",
        }
      );
      setUsers(data as User[]);

      setLoading(false);
    }
    getUsers();
  }, []);

  const ranks = useMemo(
    () => calculateWinRates(users).sort(sortByWinRate),
    [users]
  );

  return (
    <FlexC css={{ gap: 8 }}>
      <Text
        css={{
          marginBottom: 20,
          fontFamily: "$mono",
          fontWeight: 700,
          color: "$purple",
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
          {ranks?.slice(0, 5).map((it, index) => {
            return <RankRow key={it.name} user={it} index={index} />;
          })}
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

const RankRow = ({ user, index }: { user: RankUser; index: number }) => {
  return (
    <FlexR css={{ color: "white", fontSize: "36px" }}>
      <Text>{index + 1 + "."}</Text>
      <Span>{user?.name[0].toUpperCase() + user?.name.slice(1)}</Span>
      <Span css={{ translate: "0px -10px" }}>●</Span>
      <Span>{user.winRate + "%"}</Span>
    </FlexR>
  );
};
