import { InfoPageLayout } from "@/components/custom/Misc/InfoPageLayout";
import { SEO } from "@/components/custom/Misc/SEO";
import AboutContent from "@/components/custom/Pages/about";

export default function AboutPage() {
  return (
    <>
      <SEO title="About Filmguess" description="Filmguess is an online movie audio guessing game. Learn how the game works, the team behind it, and what makes it unique." canonicalUrl="/about" />
      <InfoPageLayout>
        <AboutContent />
      </InfoPageLayout>
    </>
  );
}
