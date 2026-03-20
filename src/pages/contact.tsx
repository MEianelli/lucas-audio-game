import { InfoPageLayout } from "@/components/custom/Misc/InfoPageLayout";
import { SEO } from "@/components/custom/Misc/SEO";
import ContactContent from "@/components/custom/Pages/contact";

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact Us - Filmguess"
        description="Get in touch with the Filmguess team."
        canonicalUrl="/contact"
      />
      <InfoPageLayout>
        <ContactContent />
      </InfoPageLayout>
    </>
  );
}
