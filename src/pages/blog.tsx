import { InfoPageLayout } from "@/components/custom/Misc/InfoPageLayout";
import { SEO } from "@/components/custom/Misc/SEO";
import { estimateReadingTime, formatPostDate, getBlogPosts, type BlogPost } from "@/lib/posts";
import { styled } from "@/styles/stitches.config";
import type { GetServerSideProps } from "next";

type BlogPageProps = {
  posts: BlogPost[];
};

const MetaLine = styled("p", {
  margin: "0 0 8px 0",
  fontSize: "12px",
  color: "rgba(255, 255, 255, 0.65)",
});

const MetaDate = styled("span", {
  fontWeight: 700,
});

const PostTitle = styled("h1", {
  margin: "0 0 10px 0",
  fontSize: "32px",
  lineHeight: 1.2,
  fontWeight: 700,
  color: "$white",
});

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

const PostContent = styled("div", {
  "& p": {
    margin: "10px 0",
  },
  "& a": {
    color: "#c084fc",
    textDecoration: "underline",
  },
  "& ul, & ol": {
    paddingLeft: "20px",
    margin: "10px 0",
  },
  "& li": {
    margin: "4px 0",
  },
  "& ol li": {
    color: "#c084fc",
  },
  "& ol li::marker": {
    color: "$white",
    fontSize: "22px",
    fontWeight: 700,
  },
  "& h1, & h2, & h3, & h4": {
    marginTop: "12px",
    marginBottom: "8px",
  },
});

export default function BlogPage({ posts }: BlogPageProps) {
  const currentPost = posts[0];
  const previousPost = posts[1] ?? null;

  if (!currentPost) {
    return (
      <>
        <SEO title="FilmGuess Blog" description="Weekly updates, rankings, and new audio guessing challenges." canonicalUrl="/blog" />
        <InfoPageLayout>
          <h1>Blog</h1>
          <p>No posts yet.</p>
          <PostsLink href="/blog/posts">See all post</PostsLink>
        </InfoPageLayout>
      </>
    );
  }

  const readingTime = estimateReadingTime(currentPost.html);

  return (
    <>
      <SEO
        title={currentPost.title}
        description="Weekly updates, rankings, and new audio guessing challenges."
        canonicalUrl="/blog"
      />
      <InfoPageLayout>
        <MetaLine>
          <MetaDate>{formatPostDate(currentPost.createdAt)}</MetaDate>
          {` - ${readingTime} min read`}
        </MetaLine>
        <PostTitle>{currentPost.title}</PostTitle>
        <PostContent dangerouslySetInnerHTML={{ __html: currentPost.html }} />
        {previousPost && (
          <NavLink href={`/blog/${previousPost.slug}`}>
            <NavChevron>{"< "}</NavChevron>
            previous post: <NavDate>{formatPostDate(previousPost.createdAt)}</NavDate>
          </NavLink>
        )}
        <br />
        <PostsLink href="/blog/posts">See all post</PostsLink>
      </InfoPageLayout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<BlogPageProps> = async () => {
  return {
    props: {
      posts: await getBlogPosts(),
    },
  };
};
