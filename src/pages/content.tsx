import { Container } from "@/components/containers/containers";
import { FlexC } from "@/components/containers/flex";
import { GuessCards } from "@/components/custom/GuessCard/GuessCards";
import { Header } from "@/components/custom/Header/Header";
import { DialogModal } from "@/components/custom/Modal/modal";
import { supabase } from "@/lib/supabase";
import { type Card } from "@/types/types";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  const { data, error } = await supabase.rpc("get_random_cards", {
    num_cards: 10,
    category_filter: "movie",
  });
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
        <Header />
        <GuessCards cards={props.cards} />
        <DialogModal />
      </FlexC>
    </Container>
  );
};

export default Content;
