import { COOKIE_NAME } from "@/lib/contants";
import { supabase } from "@/lib/supabase";
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
  const cookies = context.req.headers.cookie;
  const parsed = parseCookies(cookies);
  const decrypted = decryptData(parsed[COOKIE_NAME]);

  const { data }: PostgrestSingleResponse<User> = await supabase
    .from("users")
    .select()
    .eq("name", decrypted?.name)
    .single();

  const rankData = await fetchRankBff(data?.id);

  return {
    props: {
      user: data?.id ? data : null,
      rank: rankData,
    },
  };
};
