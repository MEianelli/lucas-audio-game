import { FlexR } from "@/components/containers/flex";
import { Text } from "@/components/text/text";
import { useStore } from "@/lib/store";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const Lifes = () => {
  const lifes = useStore((s) => s.lifes);
  const router = useRouter()

  useEffect(() => {
    if (lifes <= 0) {
      setTimeout(() => {
        router.push("/");
      }, 1500)
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
