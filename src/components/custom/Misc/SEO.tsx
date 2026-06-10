import Head from "next/head";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
}

export function SEO({
  title = "Filmguess - Guess the Movie by Audio",
  description = "Play Filmguess — test your movie knowledge! Listen to audio clips from famous films and guess the title. Compete on the leaderboard.",
  keywords = "movie game, guess movie, movie quiz, movie audio, cinema game, filmguess, online game, quiz game",
  ogImage = "/og-image.jpg",
  ogType = "website",
  canonicalUrl,
  noIndex = false,
}: SEOProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://filmguess.com";
  const fullTitle = title.includes("Filmguess") ? title : `${title} | Filmguess`;
  const canonical = canonicalUrl
    ? canonicalUrl === "/"
      ? siteUrl
      : `${siteUrl}${canonicalUrl}`
    : siteUrl;

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Filmguess" />
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />

      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:site_name" content="Filmguess" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />

      {/* Mobile */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#1b005c" />
    </Head>
  );
}

