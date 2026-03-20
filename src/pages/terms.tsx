import { InfoPageLayout } from "@/components/custom/Misc/InfoPageLayout";
import { SEO } from "@/components/custom/Misc/SEO";
import TermsContent from "@/components/custom/Pages/terms";

export default function TermsPage() {
  return (
    <>
      <SEO
        title="Terms of Service - Filmguess"
        description="Read the Terms of Service for Filmguess."
        canonicalUrl="/terms"
      />
      <InfoPageLayout>
        <TermsContent />
      </InfoPageLayout>
    </>
  );
}
