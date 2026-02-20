import { InfoPageLayout } from "@/components/custom/Misc/InfoPageLayout";
import { SEO } from "@/components/custom/Misc/SEO";
import { getArticlesMeta, getArticleSlugs } from "@/lib/articles";
import dynamic from "next/dynamic";

type BlogArticlePageProps = {
  slug: string;
  title: string;
  description?: string;
};

export default function BlogArticlePage({ slug, title, description }: BlogArticlePageProps) {
  const Article = dynamic(() => import(`@/components/custom/Pages/articles/${slug}`), { ssr: true });

  return (
    <>
      <SEO title={`${title} | FilmGuess`} description={description} canonicalUrl={`/blog/${slug}`} />
      <InfoPageLayout>
        <Article />
      </InfoPageLayout>
    </>
  );
}

export async function getStaticPaths() {
  const slugs = getArticleSlugs();

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const meta = getArticlesMeta().find((article) => article.slug === slug);

  return {
    props: {
      slug,
      title: meta?.title || slug,
      description: meta?.description ?? null,
    },
  };
}
