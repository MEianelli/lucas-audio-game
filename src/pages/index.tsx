import { Container } from "@/components/containers/containers";
import { DialogModal } from "@/components/custom/Modal/modal";
import { HomeHeader } from "@/components/custom/Header/Header";
import { PlayAndRank } from "@/components/custom/Home/PlayAndRank";
import { LoginButton } from "@/components/custom/Home/LoginButton";
import { useServerData } from "@/lib/hooks/useServerData";
import { PageProps } from "@/lib/context/getServerSideProps";
import { SEO } from "@/components/custom/Misc/SEO";
import { Footer } from "@/components/custom/Misc/Footer";
import { FlexC } from "@/components/containers/flex";
export { getServerSideProps } from "@/lib/context/getServerSideProps";

export default function Home(props: PageProps) {
  useServerData(props);

  return (
    <>
      <SEO
        canonicalUrl="/"
      />
      <Container>
        <FlexC css={{ minHeight: "100vh", flexDirection: "column" }}>
          <HomeHeader />
          <PlayAndRank />
          <LoginButton />
          <Footer />
          <DialogModal />
        </FlexC>
      </Container>
    </>
  );
}
