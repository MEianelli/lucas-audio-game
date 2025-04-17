import { FlexR } from "@/components/containers/flex";
import { Text } from "@/components/text/text";
import { useStore } from "@/lib/store";

export const Score = () => {
  const hitids = useStore((s) => s.hitids);

  return (
    <FlexR c>
      <Text s>{`Score: ${hitids.length}`}</Text>
    </FlexR>
  );
};
