import { InfoPageLayout } from "@/components/custom/Misc/InfoPageLayout";
import { SEO } from "@/components/custom/Misc/SEO";
import FaqContent from "@/components/custom/Pages/faq";
import Head from "next/head";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is FilmGuess?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "FilmGuess is an online movie audio guessing game where players listen to short audio clips from famous films and choose the correct movie from four options.",
      },
    },
    {
      "@type": "Question",
      name: "Are the movie clips full-length?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "No. FilmGuess uses extremely short, edited excerpts integrated into a quiz format. We do not provide full movies or downloadable content.",
      },
    },
    {
      "@type": "Question",
      name: "How often is FilmGuess updated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FilmGuess is updated weekly with new movie audio challenges, rankings, and themed quizzes.",
      },
    },
    {
      "@type": "Question",
      name: "Is FilmGuess free to play?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, FilmGuess offers free gameplay. Optional premium features may be introduced in the future.",
      },
    },
    {
      "@type": "Question",
      name: "Is FilmGuess affiliated with movie studios?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "No. FilmGuess is an independent entertainment platform and is not affiliated with or endorsed by film studios unless explicitly stated.",
      },
    },
  ],
};

export default function FaqPage() {
  return (
    <>
      <SEO title="Filmguess FAQ" description="Frequently asked questions about Filmguess." canonicalUrl="/faq" />
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </Head>
      <InfoPageLayout>
        <FaqContent />
      </InfoPageLayout>
    </>
  );
}
