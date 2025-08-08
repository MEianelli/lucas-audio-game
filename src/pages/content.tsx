import { Container } from "@/components/containers/containers";
import { FlexC } from "@/components/containers/flex";
import { GuessCards } from "@/components/custom/GuessCard/GuessCards";
import { GameHeader } from "@/components/custom/Header/Header";
import { DialogModal } from "@/components/custom/Modal/modal";
import { useFetchCards } from "@/lib/hooks/useFetchCards";
import { useFetchRank } from "@/lib/hooks/useFetchRank";
export { getServerSideProps } from "@/lib/context/getServerSideProps"
import { PageProps } from "@/lib/context/getServerSideProps"
import { useServerData } from "@/lib/hooks/useServerData";

const Content = (props: PageProps) => {
  useServerData(props)
  const { cards } = useFetchCards();
  useFetchRank();

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
