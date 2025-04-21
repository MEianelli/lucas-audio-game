import { FlexR } from "@/components/containers/flex";
import { Text } from "@/components/text/text";
import { useStore } from "@/lib/store";

export const Score = () => {
  const score = useStore((s) => s.score);
  const name = useStore((s) => s.name);

  return (
    <FlexR c css={{ gap: "20px" }}>
      <Text s>{`Score: ${score}`}</Text>
      <Text s>{name ? `User: ${name}` : "No user"}</Text>
    </FlexR>
  );
};
