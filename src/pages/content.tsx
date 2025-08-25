import { Container } from "@/components/containers/containers";
import { FlexC } from "@/components/containers/flex";
import { GuessCards } from "@/components/custom/GuessCard/GuessCards";
import { GameHeader } from "@/components/custom/Header/Header";
import { DialogModal } from "@/components/custom/Modal/modal";
import { useFetchCards } from "@/lib/hooks/useFetchCards";
export { getServerSideProps } from "@/lib/context/getServerSideProps";
import { PageProps } from "@/lib/context/getServerSideProps";
import { useServerData } from "@/lib/hooks/useServerData";

const Content = (props: PageProps) => {
  const { loading } = useServerData(props);
  const { cards } = useFetchCards(loading);

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
