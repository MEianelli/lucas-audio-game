import { FlexC, FlexR } from "@/components/containers/flex";

import { ButtonClean } from "@/components/buttons/buttons";
import { useStore } from "@/lib/store";
import { useRouter } from "next/router";
import { LoginHeader } from "@/components/custom/Header/Header";
import { LoginContent } from "./LoginContent";
import { Text } from "@/components/text/text";

export const LoginPage = () => {
  const loginState = useStore((s) => s.loginState);
  const router = useRouter();
  const enableBtn = loginState === "logged" || loginState === "registered";
  return (
    <FlexC css={{ gap: 18 }}>
      <LoginHeader />
      <LoginContent />
      <FlexR
        css={{
          gap: 10,
          overflow: "scroll",
          marginLeft: "15%",
          scrollbarWidth: "none",
        }}
      >
        <ButtonClean
          onClick={() => router.push("/content?cat=movies")}
          disabled={!enableBtn}
          css={{
            border: "4px solid $white",
            padding: "40px",
            borderRadius: "20px",
          }}
        >
          <FlexC cc>
            <Text g>{"MovieGuess"}</Text>
            <Text s>Play Now</Text>
          </FlexC>
        </ButtonClean>
        <ButtonClean
          onClick={() => router.push("/content?cat=music")}
          disabled={!enableBtn}
          css={{
            border: "4px solid $white",
            padding: "40px",
            borderRadius: "20px",
          }}
        >
          <FlexC cc>
            <Text g>{"MusicGuess"}</Text>
            <Text s>Play Now</Text>
          </FlexC>
        </ButtonClean>
      </FlexR>
    </FlexC>
  );
};
