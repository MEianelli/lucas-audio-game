import { InfoPageLayout } from "@/components/custom/Misc/InfoPageLayout";
import { SEO } from "@/components/custom/Misc/SEO";
import { formatRankDate, getRankPosts, type RankPost } from "@/lib/ranks";
import { styled } from "@/styles/stitches.config";
import type { GetServerSideProps } from "next";

const NavLink = styled("a", {
  display: "inline-block",
  color: "#c084fc",
  textDecoration: "none",
  marginTop: "8px",
  "&:hover": {
    textDecoration: "underline",
  },
});

const NavChevron = styled("span", {
  color: "$white",
});

const NavDate = styled("span", {
  color: "$white",
});

const PostsLink = styled("a", {
  display: "inline-block",
  marginTop: "14px",
  color: "$white",
  textDecoration: "underline",
  "&:visited": {
    color: "$white",
  },
  "&:hover": {
    color: "$white",
  },
});

const RankImage = styled("img", {
  width: "100%",
  maxWidth: "760px",
  height: "auto",
  borderRadius: "10px",
  marginTop: "8px",
});

type RankByDatePageProps = {
  currentRank: RankPost | null;
  previousRankDate: string | null;
  nextRankDate: string | null;
};

export default function RankByDatePage({ currentRank, previousRankDate, nextRankDate }: RankByDatePageProps) {
  if (!currentRank) {
    return (
      <>
        <SEO title="Rank Not Found" description="Rank post not found." canonicalUrl="/ranks" />
        <InfoPageLayout>
          <h1>Rank not found</h1>
          <p>We could not find this rank post.</p>
          <PostsLink href="/ranks/posts">See all post</PostsLink>
        </InfoPageLayout>
      </>
    );
  }

  return (
    <>
      <SEO
        title={`Rank - ${currentRank.title}`}
        description="This is the result of last week ranking. Congratulations to the winner."
        canonicalUrl={`/ranks/${currentRank.date}`}
      />
      <InfoPageLayout>
        <h1>{currentRank.title}</h1>
        <RankImage src={currentRank.imageUrl} alt={`Ranking screenshot for ${currentRank.title}`} />
        <p>
          This is the result of last week ranking. Congratulations to the winner. Come back everyday, challenge
          yourself to be forever remembered in the ranking screenshots.
        </p>
        {previousRankDate && (
          <>
            <NavLink href={`/ranks/${previousRankDate}`}>
              <NavChevron>{"< "}</NavChevron>
              previous rank: <NavDate>{formatRankDate(previousRankDate)}</NavDate>
            </NavLink>
            <br />
          </>
        )}
        {nextRankDate && (
          <>
            <NavLink href={`/ranks/${nextRankDate}`}>
              <NavChevron>{"> "}</NavChevron>
              next rank: <NavDate>{formatRankDate(nextRankDate)}</NavDate>
            </NavLink>
            <br />
          </>
        )}
        <PostsLink href="/ranks/posts">See all post</PostsLink>
      </InfoPageLayout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<RankByDatePageProps> = async (context) => {
  const date = context.params?.date;
  const selectedDate = Array.isArray(date) ? date[0] : date;
  const ranks = await getRankPosts();
  const currentIndex = ranks.findIndex((rank) => rank.date === selectedDate);

  if (currentIndex === -1) {
    return {
      notFound: true,
    };
  }

  const currentRank = ranks[currentIndex];
  const previousRank = ranks[currentIndex + 1] ?? null;
  const nextRank = currentIndex > 0 ? ranks[currentIndex - 1] : null;

  return {
    props: {
      currentRank,
      previousRankDate: previousRank?.date ?? null,
      nextRankDate: nextRank?.date ?? null,
    },
  };
};
