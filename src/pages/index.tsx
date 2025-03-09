import { Container } from "@/components/containers/containers";
import { FlexC } from "@/components/containers/flex";
import { DialogModal } from "@/components/custom/Modal/modal";
import { Content } from "@/components/custom/Content/Content";
import { COOKIE_NAME } from "@/lib/contants";
import { useStore } from "@/lib/store";
import { getOneUser } from "@/lib/supabase";
import { User } from "@/types/types";
import { parseCookies } from "@/utils/cookie";
import { decryptData } from "@/utils/crypto";
import { GetServerSideProps } from "next";
import { useEffect } from "react";
import { LoginPage } from "@/components/custom/Login/LoginPage";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = context.req.headers.cookie;
  const parsed = parseCookies(cookies);
  const decrypted = decryptData(parsed[COOKIE_NAME]);

  if (!decrypted.name) return { props: {} };

  const user = await getOneUser({
    name: decrypted.name,
  });

  if (!user?.id) return { props: {} };

  return {
    props: {
      user,
    },
  };
};

interface HomeProps {
  user: User;
}

export default function Home(props: HomeProps) {
  const updateUserData = useStore((store) => store.updateUserData);
  const setLoginState = useStore((store) => store.setLoginState);
  const screen = useStore((store) => store.screen);

  useEffect(() => {
    if (!props.user?.id) return;
    updateUserData(props.user);
    setLoginState("logged");
    //eslint-disable-next-line
  }, []);

  return (
    <Container css={{ padding: "8px", height: "100vh" }}>
      <FlexC css={{ gap: "6px" }}>
        {screen === "login" && <LoginPage />}
        {screen === "content" && <Content />}
        <DialogModal />
      </FlexC>
    </Container>
  );
}
