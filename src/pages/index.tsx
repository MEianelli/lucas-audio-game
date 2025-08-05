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
import { PostgrestSingleResponse } from "@supabase/supabase-js";
import { HomeHeader } from "@/components/custom/Header/Header";
import { PlayAndRank } from "@/components/custom/Home/PlayAndRank";
import { LoginButton } from "@/components/custom/Home/LoginButton";
import { fetchRankBff } from "@/lib/apis/rank/fetchRankBff";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = context.req.headers.cookie;
  const parsed = parseCookies(cookies);
  const decrypted = decryptData(parsed[COOKIE_NAME]);

  const { data }: PostgrestSingleResponse<User> = await supabase
    .from("users")
    .select()
    .eq("name", decrypted?.name)
    .single();

  const rankData = await fetchRankBff(data?.id)

  return {
    props: {
      user: data?.id ? data : null,
      rank: rankData,
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
  const resetStore = useStore((s) => s.resetStore);

  useEffect(() => {
    updateRankData(props.rank);
    if (!props.user?.id) {
      resetStore();
      return;
    }
    updateUserData(props.user);
    setLoginState("logged");
    //eslint-disable-next-line
  }, []);

  return (
    <Container>
      <HomeHeader />
      <PlayAndRank />
      <LoginButton />
      <DialogModal />
    </Container>
  );
}
