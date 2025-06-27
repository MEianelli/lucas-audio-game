import { FlexC, FlexR } from "@/components/containers/flex";
import { Text } from "@/components/text/text";
import { useStore } from "@/lib/store";
import { useShallow } from "zustand/shallow";

export const LoginResult = () => {
  const [name, score, maxstreak, rankData] = useStore(useShallow((s) => [s.name, s.score, s.maxstreak, s.rankData]));

  return (
    <FlexC
      ac
      css={{
        gap: "10px",
        width: "90%",
        margin: "0 auto",
        marginBottom: "10px",
      }}
    >
      <Text u>{name}</Text>
      <ButtonLikeFlex
        data={{
          text1: score,
          text2: "Score",
          pos: rankData?.all.userScorePos ?? "",
        }}
      />
      <ButtonLikeFlex
        data={{
          text1: maxstreak,
          text2: "Streak",
          pos: rankData?.all.userStreakPos,
        }}
      />
    </FlexC>
  );
};

interface ButtonTexts {
  text1: number | string;
  text2: string;
  pos?: number | string;
}

function ButtonLikeFlex({ data }: { data: ButtonTexts }) {
  return (
    <FlexR
      ac
      c
      css={{
        gap: "8px",
        border: "4px solid $purple",
        borderRadius: "20px",
        padding: "6px 10px",
        width: "100%",
      }}
    >
      <Text m w>
        {data.text1}
      </Text>
      <Text m w>
        {data.text2}
      </Text>
      <Text m w cg>
        {data.pos ? "#" + data.pos : ""}
      </Text>
    </FlexR>
  );
}

export const RegisterResult = () => {
  return <Text css={{ color: "$purple", fontWeight: 700 }}>{"Register completed."}</Text>;
};
