import { Container } from "@/components/containers/containers";
import { FlexC } from "@/components/containers/flex";
import { Header } from "@/components/custom/Header";
import { DialogModal } from "@/components/containers/modal";
import { useRef } from "react";
import { Content } from "@/components/custom/Content";
import { LoginContainer } from "@/components/custom/Login/LoginContainer";
// import { GetServerSideProps } from "next";
// import { decryptData } from "@/utils/crypto";

// export const getServerSideProps: GetServerSideProps = async ({ req }) => {
//   const cook = req.cookies;
//   const decrypted = decryptData(cook?.["d187yd"]);

//   return {
//     props: {},
//   };
// };

export default function Home() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <Container css={{ padding: "8px", height: "100vh" }}>
      <FlexC css={{ gap: "22px" }}>
        <Header />
        <Content />
        <DialogModal ref={dialogRef} openAtStart={true}>
          <LoginContainer onLogin={() => dialogRef.current?.close()} />
        </DialogModal>
      </FlexC>
    </Container>
  );
}
