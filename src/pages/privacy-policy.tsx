import { InfoPageLayout } from "@/components/custom/Misc/InfoPageLayout";
import { SEO } from "@/components/custom/Misc/SEO";

export default function PrivacyPolicyPage() {
  return (
    <>
      <SEO
        title="Filmguess Privacy Policy"
        description="Read about how Filmguess handles data and privacy."
        canonicalUrl="/privacy-policy"
      />
      <InfoPageLayout
        title="Privacy Policy"
        paragraphs={[
          "Filmguess collects minimal data needed to provide the game experience and display rankings.",
          "We do not sell personal information. Any analytics are used to improve gameplay and performance.",
          "By using Filmguess, you agree to this policy. Contact us if you have questions.",
        ]}
      />
    </>
  );
}
