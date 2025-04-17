import { FlexR } from "@/components/containers/flex";
import { Text } from "@/components/text/text";
import { useStore } from "@/lib/store";

export const Score = () => {
  const hitids = useStore((s) => s.hitids);
  const name = useStore((s) => s.name);

  return (
    <FlexR c css={{ gap: "20px" }}>
      <Text s>{`Score: ${hitids.length}`}</Text>
      <Text s>{`User: ${name || "Not logged In"}`}</Text>
    </FlexR>
  );
};
