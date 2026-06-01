import { InfoPageLayout } from "@/components/custom/Misc/InfoPageLayout";
import { SEO } from "@/components/custom/Misc/SEO";
import TermsContent from "@/components/custom/Pages/terms";

export default function TermsPage() {
  return (
    <>
      <SEO
        title="Terms of Service - Filmguess"
        description="Read the Filmguess Terms of Service — the rules and guidelines that govern your use of our platform."
        canonicalUrl="/terms"
      />
      <InfoPageLayout>
        <TermsContent />
      </InfoPageLayout>
    </>
  );
}
