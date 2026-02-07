import { InfoPageLayout } from "@/components/custom/Misc/InfoPageLayout";
import { SEO } from "@/components/custom/Misc/SEO";

export default function FaqPage() {
  return (
    <>
      <SEO title="Filmguess FAQ" description="Frequently asked questions about Filmguess." canonicalUrl="/faq" />
      <InfoPageLayout
        title="FAQ"
        paragraphs={[
          "How do I play? Tap Play, listen to the clip, and choose the movie title.",
          "How do lives work? You get a limited number of lives each day and they reset daily.",
          "Can I play on mobile? Yes, Filmguess works on mobile and desktop.",
        ]}
      />
    </>
  );
}
