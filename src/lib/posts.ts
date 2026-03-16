import { sanitizeSimpleHtml } from "@/utils/sanitizeSimpleHtml";

export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  html: string;
  createdAt: string;
};

type BlogPostWithoutSlug = Omit<BlogPost, "slug">;

function slugifyTitle(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function toUtcDate(date: string) {
  return new Date(date);
}

export function formatPostDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(toUtcDate(date));
}

export function estimateReadingTime(html: string) {
  const plainText = html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  const words = plainText ? plainText.split(" ").length : 0;
  return Math.max(1, Math.ceil(words / 200));
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  if (typeof window !== "undefined") {
    throw new Error("getBlogPosts() must run on the server.");
  }

  const { supabase } = await import("@/lib/supabase");
  let queryResult = await supabase.from("posts").select("*").order("created_at", { ascending: false });

  if (queryResult.error) {
    queryResult = await supabase.from("posts").select("*").order("createdDate", { ascending: false });
  }

  const { data, error } = queryResult;

  if (error || !data) {
    return [];
  }

  const mappedPosts = data
    .map((post) => {
      const id = Number(post.id);
      const title = typeof post.title === "string" ? post.title : "";
      const html = typeof post.html === "string" ? post.html : "";
      const createdAt =
        typeof post.created_at === "string"
          ? post.created_at
          : typeof post.createdDate === "string"
            ? post.createdDate
            : "";

      if (!id || !title || !createdAt) {
        return null;
      }

      return {
        id,
        title: title.trim(),
        html: sanitizeSimpleHtml(html),
        createdAt,
      };
    })
    .filter((post): post is BlogPostWithoutSlug => Boolean(post))
    .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));

  const seenSlugs = new Set<string>();

  return mappedPosts.map((post) => {
    const baseSlug = slugifyTitle(post.title) || `post-${post.id}`;
    let slug = baseSlug;
    let suffix = 2;
    while (seenSlugs.has(slug)) {
      slug = `${baseSlug}-${suffix}`;
      suffix += 1;
    }
    seenSlugs.add(slug);

    return {
      ...post,
      slug,
    };
  });
}
