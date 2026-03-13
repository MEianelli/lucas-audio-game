import { Div } from "@/components/containers/div";
import { InfoPageLayout } from "@/components/custom/Misc/InfoPageLayout";
import { SEO } from "@/components/custom/Misc/SEO";
import { getRankPosts, type RankPost } from "@/lib/ranks";
import { styled } from "@/styles/stitches.config";
import type { GetServerSideProps } from "next";

type RankPostsPageProps = {
  ranks: RankPost[];
};

const ContentWrapper = styled("div", {
  textAlign: "left",
});

const RankList = styled("ul", {
  "&&": {
    listStyle: "none",
    paddingLeft: 0,
    margin: "8px 0",
  },
});

const RankListItem = styled("li", {
  margin: "0",
});

const RankLink = styled("a", {
  color: "#c084fc",
  fontWeight: "700",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
});

export default function RankPostsPage({ ranks }: RankPostsPageProps) {
  return (
    <>
      <SEO title="All Rank Posts" description="All weekly ranking screenshots ordered by date." canonicalUrl="/ranks/posts" />
      <InfoPageLayout>
        <ContentWrapper>
          <h1>All rank posts:</h1>
          {ranks.length === 0 ? (
            <p>No rank posts yet.</p>
          ) : (
            <RankList>
              {ranks.map((rank) => (
                <RankListItem key={rank.date}>
                  <RankLink href={`/ranks/${rank.date}`}>{rank.title}</RankLink>
                </RankListItem>
              ))}
            </RankList>
          )}
        </ContentWrapper>
      </InfoPageLayout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<RankPostsPageProps> = async () => {
  const ranks = await getRankPosts();

  return {
    props: {
      ranks,
    },
  };
};
