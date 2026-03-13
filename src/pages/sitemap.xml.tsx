import type { GetServerSideProps } from "next";
import { getArticlesMeta } from "@/lib/articles";
import { getRankPosts } from "@/lib/ranks";

type SitemapEntry = {
  loc: string;
  lastmod?: string;
  changefreq?: "daily" | "weekly" | "monthly";
  priority: number;
};

function buildAbsoluteUrl(siteUrl: string, path: string) {
  return `${siteUrl}${path === "/" ? "" : path}`;
}

function toXml(entries: SitemapEntry[]) {
  const urls = entries
    .map((entry) => {
      return [
        "  <url>",
        `    <loc>${entry.loc}</loc>`,
        entry.lastmod ? `    <lastmod>${entry.lastmod}</lastmod>` : "",
        entry.changefreq ? `    <changefreq>${entry.changefreq}</changefreq>` : "",
        `    <priority>${entry.priority.toFixed(1)}</priority>`,
        "  </url>",
      ]
        .filter(Boolean)
        .join("\n");
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://filmguess.com";

  const staticEntries: SitemapEntry[] = [
    { loc: buildAbsoluteUrl(siteUrl, "/"), changefreq: "daily", priority: 1.0 },
    { loc: buildAbsoluteUrl(siteUrl, "/content"), changefreq: "daily", priority: 0.9 },
    { loc: buildAbsoluteUrl(siteUrl, "/blog"), changefreq: "weekly", priority: 0.8 },
    { loc: buildAbsoluteUrl(siteUrl, "/ranks"), changefreq: "weekly", priority: 0.8 },
    { loc: buildAbsoluteUrl(siteUrl, "/ranks/posts"), changefreq: "weekly", priority: 0.7 },
    { loc: buildAbsoluteUrl(siteUrl, "/about"), changefreq: "monthly", priority: 0.5 },
    { loc: buildAbsoluteUrl(siteUrl, "/faq"), changefreq: "monthly", priority: 0.5 },
    { loc: buildAbsoluteUrl(siteUrl, "/privacy-policy"), changefreq: "monthly", priority: 0.4 },
  ];

  const articleEntries: SitemapEntry[] = getArticlesMeta().map((article) => ({
    loc: buildAbsoluteUrl(siteUrl, `/blog/${article.slug}`),
    lastmod: article.updatedAt,
    changefreq: "monthly",
    priority: 0.7,
  }));

  let rankEntries: SitemapEntry[] = [];
  try {
    const ranks = await getRankPosts();
    rankEntries = ranks.map((rank) => ({
      loc: buildAbsoluteUrl(siteUrl, `/ranks/${rank.date}`),
      lastmod: `${rank.date}T00:00:00.000Z`,
      changefreq: "weekly",
      priority: 0.7,
    }));
  } catch {
    rankEntries = [];
  }

  const xml = toXml([...staticEntries, ...articleEntries, ...rankEntries]);

  res.setHeader("Content-Type", "text/xml; charset=utf-8");
  res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate=86400");
  res.write(xml);
  res.end();

  return {
    props: {},
  };
};

export default function SitemapXml() {
  return null;
}
