import { InfoPageLayout } from "@/components/custom/Misc/InfoPageLayout";
import { SEO } from "@/components/custom/Misc/SEO";
import BlogContent from "@/components/custom/Pages/blog";
import { getArticlesMeta } from "@/lib/articles";

type BlogPageProps = {
  articles: ReturnType<typeof getArticlesMeta>;
};

export default function BlogPage({ articles }: BlogPageProps) {
  return (
    <>
      <SEO
        title="FilmGuess Blog"
        description="Weekly updates, rankings, and new audio guessing challenges."
        canonicalUrl="/blog"
      />
      <InfoPageLayout>
        <BlogContent articles={articles} />
      </InfoPageLayout>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      articles: getArticlesMeta(),
    },
  };
}
