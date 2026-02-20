import fs from "fs";
import path from "path";

export type ArticleMeta = {
  slug: string;
  title: string;
  updatedAt: string;
  description: string | null;
};

const articlesDir = path.join(process.cwd(), "src", "components", "custom", "Pages", "articles");

const articleMetaOverrides: Record<string, Pick<ArticleMeta, "title" | "description">> = {
  "top-100-most-recognizable-movie-quotes": {
    title: "Top 100 Most Recognizable Movie Quotes of All Time",
    description:
      "Discover the top 100 most recognizable movie quotes of all time. Test your knowledge with our movie quote quiz and see how many iconic lines you can identify.",
  },
};

export function getArticleSlugs() {
  if (!fs.existsSync(articlesDir)) {
    return [];
  }

  return fs
    .readdirSync(articlesDir)
    .filter((file) => file.endsWith(".jsx") || file.endsWith(".tsx"))
    .map((file) => file.replace(/\.(jsx|tsx)$/, ""));
}

export function getArticlesMeta() {
  return getArticleSlugs()
    .map((slug) => {
      const filePathJsx = path.join(articlesDir, `${slug}.jsx`);
      const filePathTsx = path.join(articlesDir, `${slug}.tsx`);
      const filePath = fs.existsSync(filePathJsx) ? filePathJsx : filePathTsx;
      const stats = fs.statSync(filePath);
      const overrides = articleMetaOverrides[slug];

      return {
        slug,
        title: overrides?.title || slugToTitle(slug),
        description: overrides?.description ?? null,
        updatedAt: stats.mtime.toISOString(),
      };
    })
    .sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : -1));
}

export function slugToTitle(slug: string) {
  return slug
    .split("-")
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(" ");
}
