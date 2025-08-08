import { Container } from "@/components/containers/containers";
import { DialogModal } from "@/components/custom/Modal/modal";
import { HomeHeader } from "@/components/custom/Header/Header";
import { PlayAndRank } from "@/components/custom/Home/PlayAndRank";
import { LoginButton } from "@/components/custom/Home/LoginButton";
import { useServerData } from "@/lib/hooks/useServerData";
import { PageProps } from "@/lib/context/getServerSideProps";
export { getServerSideProps } from "@/lib/context/getServerSideProps"

export default function Home(props: PageProps) {
  useServerData(props)

  return (
    <Container>
      <HomeHeader />
      <PlayAndRank />
      <LoginButton />
      <DialogModal />
    </Container>
  );
}
