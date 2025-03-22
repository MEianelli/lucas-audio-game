import { Text } from "@/components/text/text";
import { Ranking } from "./Ranking";
import { FlexC } from "@/components/containers/flex";
import { GoHome } from "../Header/Menu/GoHome";
import useTimeUntilTomorrow from "@/lib/hooks/tomorrow";

export const Finished = () => {
  const timer = useTimeUntilTomorrow();
  return (
    <FlexC css={{ gap: 12 }}>
      <Ranking />
      <Text s>{`Next 10 challenges in: ${timer}`}</Text>
      <GoHome />
    </FlexC>
  );
};
