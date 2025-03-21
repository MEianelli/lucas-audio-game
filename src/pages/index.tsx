import { Container } from "@/components/containers/containers";
import { DialogModal } from "@/components/custom/Modal/modal";
import { COOKIE_NAME } from "@/lib/contants";
import { useStore } from "@/lib/store";
import { supabase } from "@/lib/supabase";
import { RankData, User } from "@/types/types";
import { parseCookies } from "@/utils/cookie";
import { decryptData } from "@/utils/crypto";
import { GetServerSideProps } from "next";
import { useEffect } from "react";
import { LoginPage } from "@/components/custom/Login/LoginPage";
import { PostgrestSingleResponse } from "@supabase/supabase-js";
import api from "@/utils/api";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = context.req.headers.cookie;
  const parsed = parseCookies(cookies);
  const decrypted = decryptData(parsed[COOKIE_NAME]);

  if (!decrypted.name) return { props: {} };

  const { data, error }: PostgrestSingleResponse<User> = await supabase
    .from("users")
    .select()
    .eq("name", decrypted.name)
    .single();

  if (!data?.id || error) return { props: {} };

  const rankData: { data: RankData } = await api(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/rank`,
    {
      method: "POST",
      body: JSON.stringify({ id: data.id }),
    }
  );

  return {
    props: {
      user: data,
      rank: rankData?.data,
    },
  };
};

interface HomeProps {
  user: User;
  rank: RankData;
}

export default function Home(props: HomeProps) {
  const updateUserData = useStore((s) => s.updateUserData);
  const updateRankData = useStore((s) => s.updateRankData);
  const setLoginState = useStore((s) => s.setLoginState);

  useEffect(() => {
    if (!props.user?.id) return;
    updateUserData(props.user);
    updateRankData(props.rank);
    setLoginState("logged");
    //eslint-disable-next-line
  }, []);

  return (
    <Container>
      <LoginPage />
      <DialogModal />
    </Container>
  );
}
