import { Container } from "@/components/containers/containers";
import { FlexC } from "@/components/containers/flex";
import { GuessCards } from "@/components/custom/GuessCard/GuessCards";
import { GuessCardsSkeleton } from "@/components/custom/GuessCard/GuessCardsSkeleton";
import { GameHeader } from "@/components/custom/Header/Header";
import { DialogModal } from "@/components/custom/Modal/modal";
import { useFetchCards } from "@/lib/hooks/useFetchCards";
export { getServerSideProps } from "@/lib/context/getServerSideProps";
import { PageProps } from "@/lib/context/getServerSideProps";
import { useServerData } from "@/lib/hooks/useServerData";
import { SEO } from "@/components/custom/Misc/SEO";
import { Footer } from "@/components/custom/Misc/Footer";
import { styled } from "@/styles/stitches.config";

const HowToPlay = styled("section", {
  padding: "16px 26px",
  maxWidth: "760px",
  margin: "0 auto",
  color: "rgba(255, 255, 255, 0.8)",
  fontSize: "14px",
  lineHeight: 1.6,
  "& h2": {
    fontSize: "18px",
    color: "$white",
    marginBottom: "8px",
  },
  "& p": {
    margin: "8px 0",
  },
});

const Content = (props: PageProps) => {
  const { loading } = useServerData(props);
  const { cards } = useFetchCards(loading);
  const cardsReady = cards.length > 0 && !loading;

  return (
    <>
      <SEO
        title="Play Filmguess - Guess the Movie"
        description="Play now and test your movie knowledge! Listen to audio clips from movies and guess which movie is correct. Earn points and compete on the leaderboard."
        keywords="play filmguess, guess movie, movie quiz, online cinema game"
        canonicalUrl="/content"
      />
      <Container id="main-content">
        <FlexC css={{ gap: "6px", minHeight: "100vh" }}>
          <GameHeader />
          {cardsReady ? <GuessCards cards={cards} /> : <GuessCardsSkeleton />}
          {!cardsReady && (
            <HowToPlay>
              <h2>How to play Filmguess</h2>
              <p>
                Press play on a card to listen to a short audio clip from a famous movie, then pick the correct title
                from the four options. A right answer earns a point; a wrong answer costs a life. Run out of lives and
                the round ends — come back the next day or log in to keep your score on the leaderboard.
              </p>
              <p>
                New audio challenges are added every week, covering classics, modern blockbusters, and cult favorites.
                The clips are short on purpose: the game rewards sharp ears and real movie memory, not replaying whole
                scenes.
              </p>
            </HowToPlay>
          )}
          <DialogModal />
          <Footer />
        </FlexC>
      </Container>
    </>
  );
};

export default Content;
