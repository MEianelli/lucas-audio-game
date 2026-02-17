import { InfoPageLayout } from "@/components/custom/Misc/InfoPageLayout";
import { SEO } from "@/components/custom/Misc/SEO";
import AboutContent from "@/components/custom/Pages/about";

export default function AboutPage() {
  return (
    <>
      <SEO title="About Filmguess" description="Learn more about Filmguess and the game experience." canonicalUrl="/about" />
      <InfoPageLayout>
        <AboutContent />
      </InfoPageLayout>
    </>
  );
}
