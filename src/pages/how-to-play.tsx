import { InfoPageLayout } from "@/components/custom/Misc/InfoPageLayout";
import { SEO } from "@/components/custom/Misc/SEO";

export default function HowToPlayPage() {
  return (
    <>
      <SEO
        title="How to Play Filmguess"
        description="Learn how to play Filmguess and earn points with each correct guess."
        canonicalUrl="/how-to-play"
      />
      <InfoPageLayout
        title="How to Play"
        paragraphs={[
          "Tap Play to start a round and listen to the short movie audio clip.",
          "Choose the correct movie title from four options before time runs out.",
          "Earn points for correct answers and keep your streak going to climb the leaderboard.",
        ]}
      />
    </>
  );
}
