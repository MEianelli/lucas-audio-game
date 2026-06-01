import { InfoPageLayout } from "@/components/custom/Misc/InfoPageLayout";
import { SEO } from "@/components/custom/Misc/SEO";
import PrivacyPolicyContent from "@/components/custom/Pages/privacy-policy";

export default function PrivacyPolicyPage() {
  return (
    <>
      <SEO
        title="Filmguess Privacy Policy"
        description="Learn how Filmguess collects, uses, and protects your personal data. Read our full privacy policy here."
        canonicalUrl="/privacy-policy"
      />
      <InfoPageLayout>
        <PrivacyPolicyContent />
      </InfoPageLayout>
    </>
  );
}
