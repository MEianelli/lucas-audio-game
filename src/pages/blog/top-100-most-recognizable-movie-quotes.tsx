import { InfoPageLayout } from "@/components/custom/Misc/InfoPageLayout";
import { SEO } from "@/components/custom/Misc/SEO";
import TopMovieQuotesArticle from "@/components/custom/Pages/articles/top-100-most-recognizable-movie-quotes";

export default function TopMovieQuotesPage() {
  return (
    <>
      <SEO
        title="Top 100 Most Recognizable Movie Quotes of All Time | FilmGuess"
        description="Discover the top 100 most recognizable movie quotes of all time. Test your knowledge with our movie quote quiz and see how many iconic lines you can identify."
        canonicalUrl="/blog/top-100-most-recognizable-movie-quotes"
      />
      <InfoPageLayout>
        <TopMovieQuotesArticle />
      </InfoPageLayout>
    </>
  );
}
