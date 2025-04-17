import { FlexR } from "@/components/containers/flex";
import { Text } from "@/components/text/text";
import { useStore } from "@/lib/store";

export const Lifes = () => {
  const lifes = useStore((s) => s.lifes);

  return (
    <FlexR c>
      <Text s css={{ color: lifes > 1 ? "$green" : "$red" }}>
        {`Lifes: ${lifes}`}
      </Text>
    </FlexR>
  );
};
