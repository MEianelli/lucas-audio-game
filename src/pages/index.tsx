import { Container } from "@/components/containers/containers";
import { FlexC } from "@/components/containers/flex";
import { Header } from "@/components/custom/Header";
import { DialogModal } from "@/components/containers/modal";
import { Content } from "@/components/custom/Content";
import { LoadingModal } from "@/components/custom/LoadingModal";
import { useStore } from "@/lib/store";

export default function Home() {
  const loadingDB = useStore((store) => store.loadingDB);
  return (
    <Container css={{ padding: "8px", height: "auto" }}>
      <FlexC css={{ gap: "6px" }}>
        <Header />
        {!loadingDB && <Content />}
        <DialogModal />
        {loadingDB && <LoadingModal />}
      </FlexC>
    </Container>
  );
}
