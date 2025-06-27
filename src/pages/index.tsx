import { Container } from "@/components/containers/containers";
import { DialogModal } from "@/components/custom/Modal/modal";
import { COOKIE_NAME } from "@/lib/contants";
import { useStore } from "@/lib/store";
import { supabase } from "@/lib/supabase";
import { RankDataWrapper, User } from "@/types/types";
import { parseCookies } from "@/utils/cookie";
import { decryptData } from "@/utils/crypto";
import { GetServerSideProps } from "next";
import { useEffect } from "react";
import { PostgrestSingleResponse } from "@supabase/supabase-js";
import api from "@/utils/api";
import { HomeHeader } from "@/components/custom/Header/Header";
import { PlayAndRank } from "@/components/custom/Home/PlayAndRank";
import { LoginButton } from "@/components/custom/Home/LoginButton";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = context.req.headers.cookie;
  const parsed = parseCookies(cookies);
  const decrypted = decryptData(parsed[COOKIE_NAME]);

  if (!decrypted?.name) {
    const rankData: { data: RankDataWrapper } = await api(`${process.env.NEXT_PUBLIC_APP_URL}/api/rank`, {
      method: "POST",
    });
    return {
      props: {
        user: null,
        rank: rankData?.data,
      },
    };
  }

  const { data, error }: PostgrestSingleResponse<User> = await supabase
    .from("users")
    .select()
    .eq("name", decrypted.name)
    .single();

  if (!data?.id || error) {
    const rankData: { data: RankDataWrapper } = await api(`${process.env.NEXT_PUBLIC_APP_URL}/api/rank`, {
      method: "POST",
    });
    return {
      props: {
        user: null,
        rank: rankData?.data,
      },
    };
  }

  const rankData: { data: RankDataWrapper } = await api(`${process.env.NEXT_PUBLIC_APP_URL}/api/rank`, {
    method: "POST",
    body: JSON.stringify({ id: data.id }),
  });

  return {
    props: {
      user: data,
      rank: rankData?.data,
    },
  };
};

interface HomeProps {
  user: User;
  rank: RankDataWrapper;
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
