import { Container } from "@/components/containers/containers";
import { FlexC } from "@/components/containers/flex";
import { GuessCards } from "@/components/custom/GuessCard/GuessCards";
import { GameHeader } from "@/components/custom/Header/Header";
import { DialogModal } from "@/components/custom/Modal/modal";
import { useFetchCards } from "@/lib/hooks/useFetchCards";

// export const getServerSideProps: GetServerSideProps = async () => {

//   const cards = await fetchFilteredCards('movie', 2, []);

//   if (!cards.length) {
//     console.error("No cards returned");
//     return { props: { cards: [] } };
//   }

//   return {
//     props: { cards },
//   };
// };

const Content = () => {
  const { cards } = useFetchCards()

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
