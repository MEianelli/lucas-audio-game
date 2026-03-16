import { InfoPageLayout } from "@/components/custom/Misc/InfoPageLayout";
import { SEO } from "@/components/custom/Misc/SEO";
import { formatPostDate, getBlogPosts, type BlogPost } from "@/lib/posts";
import { styled } from "@/styles/stitches.config";
import type { GetServerSideProps } from "next";

type BlogPostsPageProps = {
  posts: BlogPost[];
};

const ContentWrapper = styled("div", {
  textAlign: "left",
});

const PostsList = styled("ul", {
  "&&": {
    listStyle: "none",
    paddingLeft: 0,
    margin: "8px 0",
  },
});

const PostsListItem = styled("li", {
  margin: "0",
});

const PostLink = styled("a", {
  color: "#c084fc",
  fontWeight: "700",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
});

export default function BlogPostsPage({ posts }: BlogPostsPageProps) {
  return (
    <>
      <SEO title="All Blog Posts" description="All FilmGuess blog posts ordered by date." canonicalUrl="/blog/posts" />
      <InfoPageLayout>
        <ContentWrapper>
          <h1>All blog posts:</h1>
          {posts.length === 0 ? (
            <p>No posts yet.</p>
          ) : (
            <PostsList>
              {posts.map((post) => (
                <PostsListItem key={post.id}>
                  <PostLink href={`/blog/${post.slug}`}>{`${formatPostDate(post.createdAt)} - ${post.title}`}</PostLink>
                </PostsListItem>
              ))}
            </PostsList>
          )}
        </ContentWrapper>
      </InfoPageLayout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<BlogPostsPageProps> = async () => {
  return {
    props: {
      posts: await getBlogPosts(),
    },
  };
};
