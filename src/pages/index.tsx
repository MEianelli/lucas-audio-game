import { Container } from "@/components/containers/containers";
import { FlexC } from "@/components/containers/flex";
import { GuessCards } from "@/components/custom/GuessCards";
import { Header } from "@/components/custom/Header";
import { DialogModal } from "@/components/containers/modal";
import { useRef } from "react";
import { Login } from "@/components/custom/Login";

export default function Home() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <Container css={{ padding: "8px", height: "4000px" }}>
      <FlexC css={{ gap: "22px" }}>
        <Header />
        <GuessCards />
        <DialogModal
          ref={dialogRef}
          css={{ maxWidth: "500px" }}
          openAtStart={true}
        >
          <Login onLogin={() => dialogRef.current?.close()} />
        </DialogModal>
      </FlexC>
    </Container>
  );
}
