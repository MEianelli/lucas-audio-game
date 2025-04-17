import { Container } from "@/components/containers/containers";
import { FlexC } from "@/components/containers/flex";
import { GuessCards } from "@/components/custom/GuessCard/GuessCards";
import { GameHeader } from "@/components/custom/Header/Header";
import { DialogModal } from "@/components/custom/Modal/modal";
import { fetchFilteredCards } from "@/lib/apis/fetchCards/fetchFilteredCards";
import { useStore } from "@/lib/store";
import type { Card } from "@/types/types";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {

  const cards = await fetchFilteredCards('movie', 2, []);

  if (!cards.length) {
    console.error("No cards returned");
    return { props: { cards: [] } };
  }

  return {
    props: { cards },
  };
};

const Content = (props: { cards: Card[] }) => {
  const name = useStore(s => s.name);
  console.log('name :', name);

  return (
    <Container>
      <FlexC css={{ gap: "6px" }}>
        <GameHeader />
        <GuessCards cards={props.cards} />
        <DialogModal />
      </FlexC>
    </Container>
  );
};

export default Content;
