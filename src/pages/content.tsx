import { Container } from "@/components/containers/containers";
import { FlexC } from "@/components/containers/flex";
import { GuessCards } from "@/components/custom/GuessCard/GuessCards";
import { GameHeader } from "@/components/custom/Header/Header";
import { DialogModal } from "@/components/custom/Modal/modal";
import { useFetchCards } from "@/lib/hooks/useFetchCards";

const Content = () => {
  const { cards } = useFetchCards();

  if (!cards.length) return null;

  return (
    <Container>
      <FlexC css={{ gap: "6px" }}>
        <GameHeader />
        <GuessCards cards={cards} />
        <DialogModal />
      </FlexC>
    </Container>
  );
};

export default Content;
