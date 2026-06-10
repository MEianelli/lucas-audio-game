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

type RanksPageProps = {
  ranks: RankPost[];
};

export default function RanksPage({ ranks }: RanksPageProps) {
  const currentRank = ranks[0];
  const previousRank = ranks[1] ?? null;

  if (!currentRank) {
    return (
      <>
        <SEO title="Weekly Ranks" description="See who's topping the Filmguess leaderboard. Weekly ranking screenshots celebrating our top movie audio guessing players." canonicalUrl="/ranks" />
        <InfoPageLayout>
          <h1>Ranks</h1>
          <p>No rank posts yet.</p>
          <PostsLink href="/ranks/posts">See all posts</PostsLink>
        </InfoPageLayout>
      </>
    );
  }

  return (
    <>
      <SEO
        title={`Rank - ${currentRank.title}`}
        description="See who's topping the Filmguess leaderboard. Weekly ranking screenshots celebrating our top movie audio guessing players."
        canonicalUrl="/ranks"
      />
      <InfoPageLayout>
        <h1>{currentRank.title}</h1>
        <RankImage src={currentRank.imageUrl} alt={`Ranking screenshot for ${currentRank.title}`} width={1200} height={800} />
        <p>
          These are the latest weekly standings. Congratulations to the winner and to everyone who made the board —
          every point here came from correctly recognizing a movie by its audio alone.
        </p>
        <p>
          Rankings reset weekly, so there is always a fresh shot at the top. Play a few rounds each day, keep your
          streak alive, and your name could be in next week&apos;s screenshot.
        </p>
        {previousRank && (
          <NavLink href={`/ranks/${previousRank.date}`}>
            <NavChevron>{"< "}</NavChevron>
            previous rank: <NavDate>{formatRankDate(previousRank.date)}</NavDate>
          </NavLink>
        )}
        <br />
        <PostsLink href="/ranks/posts">See all posts</PostsLink>
      </InfoPageLayout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<RanksPageProps> = async () => {
  const ranks = await getRankPosts();

  return {
    props: {
      ranks,
    },
  };
};
