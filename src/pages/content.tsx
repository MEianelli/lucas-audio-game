import { Container } from "@/components/containers/containers";
import { FlexC } from "@/components/containers/flex";
import { GuessCards } from "@/components/custom/GuessCard/GuessCards";
import { Header } from "@/components/custom/Header/Header";
import { DialogModal } from "@/components/custom/Modal/modal";
import { supabase } from "@/lib/supabase";
import { type Card } from "@/types/types";
import { getDailyCards } from "@/utils/admin";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  const dailyCards = getDailyCards();

  const { data, error } = await supabase
    .from("cards")
    .select(`*, media (title)`)
    .in("id", dailyCards);
  if (error) {
    console.error(error.message);
    return { props: {} };
  }

  return {
    props: { cards: data },
  };
};

const Content = (props: { cards: Card[] }) => {
  return (
    <Container>
      <FlexC css={{ gap: "6px" }}>
        <Header dailyIds={props.cards.map((it) => it.id)} />
        <GuessCards cards={props.cards} />
        <DialogModal />
      </FlexC>
    </Container>
  );
};

export default Content;
