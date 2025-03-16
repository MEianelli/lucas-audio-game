import { ButtonClean } from "@/components/buttons/buttons";
import { FlexC, FlexR } from "@/components/containers/flex";
import { Text } from "@/components/text/text";
import { calculateWinRate } from "@/lib/helpers/ranking";
import { useStore } from "@/lib/store";
import { useShallow } from "zustand/shallow";

export const LoginResult = () => {
  const [name, hitids, missids, maxstreak, setModalOption] = useStore(
    useShallow((s) => [
      s.name,
      s.hitids,
      s.missids,
      s.maxstreak,
      s.setModalOption,
    ])
  );

  const winRate = calculateWinRate({ hitids, missids }).toFixed(2);

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
        data={{ text1: `${winRate}%`, text2: "Winrate", pos: "1923" }}
      />
      <FlexR ac css={{ gap: "10px", width: "100%" }}>
        <ButtonLikeFlexSmall
          data={{ text1: maxstreak, text2: "Streak", pos: "54" }}
        />
        <ButtonLikeFlexSmall
          data={{ text1: maxstreak, text2: "This Week", pos: "54" }}
        />
      </FlexR>
      <ButtonClean onClick={() => setModalOption("ranking")}>
        <Text s u>
          {"See Everyone’s Ranks"}
        </Text>
      </ButtonClean>
    </FlexC>
  );
};

interface ButtonTexts {
  text1: number | string;
  text2: string;
  pos: number | string;
}

function ButtonLikeFlex({ data }: { data: ButtonTexts }) {
  return (
    <FlexR
      ac
      sb
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
        {"#" + data.pos}
      </Text>
    </FlexR>
  );
}

function ButtonLikeFlexSmall({ data }: { data: ButtonTexts }) {
  return (
    <FlexR
      ac
      sb
      css={{
        gap: "8px",
        border: "4px solid $purple",
        borderRadius: "16px",
        padding: "6px 10px",
        flex: 1,
      }}
    >
      <Text s w>
        {data.text1}
      </Text>
      <Text s w>
        {data.text2}
      </Text>
      <Text s w cg>
        {"#" + data.pos}
      </Text>
    </FlexR>
  );
}

export const RegisterResult = () => {
  return (
    <Text css={{ color: "$purple", fontWeight: 700 }}>
      {"Register completed."}
    </Text>
  );
};
