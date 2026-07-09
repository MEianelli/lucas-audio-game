import { COOKIE_NAME } from "@/lib/contants";
import { supabase } from "@/lib/supabase";
import { createSupabaseServerClient } from "@/lib/supabaseServer";
import { parseCookies } from "@/utils/cookie";
import { decryptData } from "@/utils/crypto";
import { GetServerSideProps } from "next";
import { PostgrestSingleResponse } from "@supabase/supabase-js";
import { fetchRankBff } from "@/lib/apis/rank/fetchRankBff";
import { RankData, User } from "@/types/types";

export interface PageProps {
  user: User | null;
  rank: RankData | undefined;
}

export const getServerSideProps: GetServerSideProps<PageProps> = async (context) => {
  let user: User | null = null;

  // 1. Supabase Auth session (social login)
  const supabaseAuth = createSupabaseServerClient(context.req, context.res);
  const {
    data: { user: authUser },
  } = await supabaseAuth.auth.getUser();

  if (authUser) {
    const { data }: PostgrestSingleResponse<User> = await supabase
      .from("users")
      .select()
      .eq("auth_id", authUser.id)
      .single();
    if (data?.id) user = data;
  }

  // 2. Legacy encrypted cookie (username/password login)
  if (!user) {
    const cookies = context.req.headers.cookie;
    const parsed = parseCookies(cookies);
    const decrypted = decryptData(parsed[COOKIE_NAME]);

    if (decrypted?.name) {
      const { data }: PostgrestSingleResponse<User> = await supabase
        .from("users")
        .select()
        .eq("name", decrypted.name)
        .single();
      if (data?.id) user = data;
    }
  }

  const rankData = await fetchRankBff(user?.id);

  return {
    props: {
      user,
      rank: rankData,
    },
  };
};
