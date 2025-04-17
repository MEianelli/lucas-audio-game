import { FlexR } from "@/components/containers/flex";
import { Text } from "@/components/text/text";
import { useStore } from "@/lib/store";
import { useEffect } from "react";

export const Lifes = () => {
  const lifes = useStore((s) => s.lifes);
  const setModalOption = useStore((s) => s.setModalOption);

  useEffect(() => {
    if (lifes <= 0) {
      setModalOption("finished")
    }
  }, [lifes])

  return (
    <FlexR c>
      <Text s css={{ color: lifes > 1 ? "$green" : "$red" }}>
        {`Lifes: ${lifes}`}
      </Text>
    </FlexR>
  );
};
