import { Container } from "@/components/containers/containers";
import { FlexC } from "@/components/containers/flex";
import { Header } from "@/components/custom/Header";
import { DialogModal } from "@/components/containers/modal";
import { useRef } from "react";
import { Content } from "@/components/custom/Content";
import { LoginContainer } from "@/components/custom/Login/LoginContainer";
import { LoadingModal } from "@/components/custom/LoadingModal";
import { useStore } from "@/lib/store";

export default function Home() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const loadingDB = useStore((store) => store.loadingDB);

  return (
    <Container css={{ padding: "8px", height: "100vh" }}>
      <FlexC css={{ gap: "22px" }}>
        <Header />
        <Content />
        <DialogModal ref={dialogRef} openAtStart={true}>
          <LoginContainer onLogin={() => dialogRef.current?.close()} />
        </DialogModal>
        {loadingDB && <LoadingModal />}
      </FlexC>
    </Container>
  );
}
