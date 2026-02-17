import { InfoPageLayout } from "@/components/custom/Misc/InfoPageLayout";
import { SEO } from "@/components/custom/Misc/SEO";
import PrivacyPolicyContent from "@/components/custom/Pages/privacy-policy";

export default function PrivacyPolicyPage() {
  return (
    <>
      <SEO
        title="Filmguess Privacy Policy"
        description="Read about how Filmguess handles data and privacy."
        canonicalUrl="/privacy-policy"
      />
      <InfoPageLayout>
        <PrivacyPolicyContent />
      </InfoPageLayout>
    </>
  );
}
