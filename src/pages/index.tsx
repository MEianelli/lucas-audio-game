import { Container } from "@/components/containers/containers";
import { DialogModal } from "@/components/custom/Modal/modal";
import { HomeHeader } from "@/components/custom/Header/Header";
import { PlayAndRank } from "@/components/custom/Home/PlayAndRank";
import { LoginButton } from "@/components/custom/Home/LoginButton";
import { AboutIntro } from "@/components/custom/Home/AboutIntro";
import { useServerData } from "@/lib/hooks/useServerData";
import { PageProps } from "@/lib/context/getServerSideProps";
import { SEO } from "@/components/custom/Misc/SEO";
import { Footer } from "@/components/custom/Misc/Footer";
import { FlexC } from "@/components/containers/flex";
import Head from "next/head";
export { getServerSideProps } from "@/lib/context/getServerSideProps";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://filmguess.com";

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Filmguess",
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Filmguess",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/og-image.jpg`,
      },
    },
    {
      "@type": "WebPage",
      "@id": siteUrl,
      url: siteUrl,
      name: "Filmguess - Guess the Movie by Audio",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#organization` },
    },
  ],
};

export default function Home(props: PageProps) {
  useServerData(props);

  return (
    <>
      <SEO canonicalUrl="/" />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
        />
      </Head>
      <Container id="main-content">
        <FlexC css={{ minHeight: "100vh", flexDirection: "column" }}>
          <HomeHeader />
          <PlayAndRank />
          <LoginButton />
          <AboutIntro />
          <Footer />
          <DialogModal />
        </FlexC>
      </Container>
    </>
  );
}
