import { InfoPageLayout } from "@/components/custom/Misc/InfoPageLayout";
import { SEO } from "@/components/custom/Misc/SEO";

export default function AboutPage() {
  return (
    <>
      <SEO title="About Filmguess" description="Learn more about Filmguess and the game experience." canonicalUrl="/about" />
      <InfoPageLayout
        title="About"
        paragraphs={[
          "Filmguess is an audio-based movie guessing game built for movie lovers who enjoy a quick challenge.",
          "Each round plays a short audio clip from a film. Your job is to pick the correct title from four options.",
          "Score points, track your progress, and come back daily to keep your streak going.",
        ]}
      />
    </>
  );
}
