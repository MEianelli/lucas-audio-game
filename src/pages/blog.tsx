import { InfoPageLayout } from "@/components/custom/Misc/InfoPageLayout";
import { SEO } from "@/components/custom/Misc/SEO";
import BlogContent from "@/components/custom/Pages/blog";

export default function BlogPage() {
  return (
    <>
      <SEO
        title="FilmGuess Blog"
        description="Weekly updates, rankings, and new audio guessing challenges."
        canonicalUrl="/blog"
      />
      <InfoPageLayout>
        <BlogContent />
      </InfoPageLayout>
    </>
  );
}
