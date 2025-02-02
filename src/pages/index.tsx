import { Container } from "@/components/containers/containers";
import { FlexC } from "@/components/containers/flex";
import { Header } from "@/components/custom/Header";
import { DialogModal } from "@/components/containers/modal";
import { useRef } from "react";
import { Login } from "@/components/custom/Login/Login";
import { Content } from "@/components/custom/Content";

export default function Home() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <Container css={{ padding: "8px", height: "4000px" }}>
      <FlexC css={{ gap: "22px" }}>
        <Header />
        <Content />
        <DialogModal
          ref={dialogRef}
          css={{
            maxWidth: "400px",
            backgroundColor: "$dirtWhite",
            border: "none",
            outline: "none",
            marginTop: 12,
          }}
          openAtStart={true}
        >
          <Login onLogin={() => dialogRef.current?.close()} />
        </DialogModal>
      </FlexC>
    </Container>
  );
}
