import { storageBaseUrl } from "@/lib/contants";

export type RankPost = {
  date: string;
  title: string;
  imageName: string;
  imageUrl: string;
};

const RANK_IMAGE_PATTERN = /^(\d{4}-\d{2}-\d{2})-rank\.(jpg|jpeg|png|webp)$/i;

function toUtcDate(date: string) {
  return new Date(`${date}T00:00:00.000Z`);
}

export function formatRankDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(toUtcDate(date));
}

export async function getRankPosts(): Promise<RankPost[]> {
  if (typeof window !== "undefined") {
    throw new Error("getRankPosts() must run on the server.");
  }

  const { supabase } = await import("@/lib/supabase");
  const { data, error } = await supabase.storage.from("ranks").list("", {
    limit: 1000,
    offset: 0,
    sortBy: {
      column: "name",
      order: "desc",
    },
  });

  if (error || !data) {
    return [];
  }

  return data
    .map((file) => {
      const match = file.name.match(RANK_IMAGE_PATTERN);
      if (!match) {
        return null;
      }

      const date = match[1];
      return {
        date,
        title: formatRankDate(date),
        imageName: file.name,
        imageUrl: `${storageBaseUrl}/ranks/${file.name}`,
      };
    })
    .filter((rank): rank is RankPost => Boolean(rank))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
