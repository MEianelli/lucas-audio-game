import { ButtonClean } from "@/components/buttons/buttons";
import { FlexC, FlexR } from "@/components/containers/flex";
import { useRouter } from "next/router";
import { Text } from "@/components/text/text";

export const CategoriesPlay = () => {
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
