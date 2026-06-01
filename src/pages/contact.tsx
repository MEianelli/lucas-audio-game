import { InfoPageLayout } from "@/components/custom/Misc/InfoPageLayout";
import { SEO } from "@/components/custom/Misc/SEO";
import ContactContent from "@/components/custom/Pages/contact";

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact Us - Filmguess"
        description="Have a question or feedback? Get in touch with the Filmguess team — we'd love to hear from you."
        canonicalUrl="/contact"
      />
      <InfoPageLayout>
        <ContactContent />
      </InfoPageLayout>
    </>
  );
}
