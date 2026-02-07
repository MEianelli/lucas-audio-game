import { Container } from "@/components/containers/containers";
import { FlexC } from "@/components/containers/flex";
import { GuessCards } from "@/components/custom/GuessCard/GuessCards";
import { GameHeader } from "@/components/custom/Header/Header";
import { DialogModal } from "@/components/custom/Modal/modal";
import { useFetchCards } from "@/lib/hooks/useFetchCards";
export { getServerSideProps } from "@/lib/context/getServerSideProps";
import { PageProps } from "@/lib/context/getServerSideProps";
import { useServerData } from "@/lib/hooks/useServerData";
import { AdsMobile, AdsDesk } from "@/components/custom/Misc/AdsContainer";
import { SEO } from "@/components/custom/Misc/SEO";
import { Footer } from "@/components/custom/Misc/Footer";

const Content = (props: PageProps) => {
  const { loading } = useServerData(props);
  const { cards } = useFetchCards(loading);

  if (!cards.length || loading) return null;

  return (
    <>
      <SEO
        title="Play Filmguess - Guess the Movie"
        description="Play now and test your movie knowledge! Listen to audio clips from movies and guess which movie is correct. Earn points and compete on the leaderboard."
        keywords="play filmguess, guess movie, movie quiz, online cinema game"
        canonicalUrl="/content"
      />
      <Container>
        <FlexC css={{ gap: "6px", minHeight: "100vh" }}>
          <GameHeader />
          <GuessCards cards={cards} />
          <DialogModal />
          <AdsMobile />
          <Footer />
        </FlexC>
        <AdsDesk />
      </Container>
    </>
  );
};

export default Content;
