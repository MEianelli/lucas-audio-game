import { ButtonClean } from "@/components/buttons/buttons";
import { FlexC, FlexR } from "@/components/containers/flex";
import { useStore } from "@/lib/store";
import { useRouter } from "next/router";
import { Text } from "@/components/text/text";

export const CategoriesPlay = () => {
  const loginState = useStore((s) => s.loginState);

  const enableBtn = loginState === "logged" || loginState === "registered";
  const router = useRouter();
  return (
    <FlexR
      css={{
        gap: 10,
        overflow: "scroll",

        paddingX: "15%",
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
  );
};
