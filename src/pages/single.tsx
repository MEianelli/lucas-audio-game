import { Container } from "@/components/containers/containers";
import { FlexC } from "@/components/containers/flex";
import { GuessCards } from "@/components/custom/GuessCard/GuessCards";
import { GameHeader } from "@/components/custom/Header/Header";
import { DialogModal } from "@/components/custom/Modal/modal";
export { getServerSideProps } from "@/lib/context/getServerSideProps";
import { PageProps } from "@/lib/context/getServerSideProps";
import { useServerData } from "@/lib/hooks/useServerData";
import { useFetchCard } from "@/lib/hooks/useFetchCard";
import { useSearchParams } from "next/navigation";

const Content = (props: PageProps) => {
  const { loading } = useServerData(props);
  const searchParams = useSearchParams()
  const id = searchParams?.get("id") || 18;
  const { cards } = useFetchCard(loading, Number(id));

  if (!cards.length || loading) return null;

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
