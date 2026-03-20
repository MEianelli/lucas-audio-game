import { InfoPageLayout } from "@/components/custom/Misc/InfoPageLayout";
import { SEO } from "@/components/custom/Misc/SEO";
import { estimateReadingTime, formatPostDate, getBlogPosts, type BlogPost } from "@/lib/posts";
import { styled } from "@/styles/stitches.config";
import type { GetServerSideProps } from "next";

type BlogArticlePageProps = {
  currentPost: BlogPost | null;
  previousPostSlug: string | null;
  nextPostSlug: string | null;
  previousPostDate: string | null;
  nextPostDate: string | null;
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
  fontSize: "32px !important",
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
    paddingLeft: "0",
    margin: "10px 0",
    listStylePosition: "inside",
  },
  "& li": {
    margin: "16px 0",
  },
  "& li p:nth-child(1)": {
    color: "#c084fc",
    fontWeight: 700,
    fontSize: "22px",
    display: "inline",
    margin: 0,
  },
  "& li p:nth-child(2)": {
    color: "$white",
    fontWeight: 700,
    fontSize: "12px",
    margin: "4px 0",
  },
  "& li p:nth-child(3)": {
    color: "$white",
    fontWeight: 400,
    fontSize: "12px",
    margin: 0,
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

export default function BlogArticlePage({
  currentPost,
  previousPostSlug,
  nextPostSlug,
  previousPostDate,
  nextPostDate,
}: BlogArticlePageProps) {
  if (!currentPost) {
    return (
      <>
        <SEO title="Post Not Found" description="Blog post not found." canonicalUrl="/blog" />
        <InfoPageLayout>
          <h1>Post not found</h1>
          <p>We could not find this post.</p>
          <PostsLink href="/blog/posts">See all post</PostsLink>
        </InfoPageLayout>
      </>
    );
  }

  const readingTime = estimateReadingTime(currentPost.html);

  return (
    <>
      <SEO title={currentPost.title} description="Weekly updates and audio guessing challenges." canonicalUrl={`/blog/${currentPost.slug}`} />
      <InfoPageLayout>
        <MetaLine>
          <MetaDate>{formatPostDate(currentPost.createdAt)}</MetaDate>
          {` - ${readingTime} min read`}
        </MetaLine>
        <PostTitle>{currentPost.title}</PostTitle>
        <PostContent dangerouslySetInnerHTML={{ __html: currentPost.html }} />
        {previousPostSlug && previousPostDate && (
          <>
            <NavLink href={`/blog/${previousPostSlug}`}>
              <NavChevron>{"< "}</NavChevron>
              previous post: <NavDate>{formatPostDate(previousPostDate)}</NavDate>
            </NavLink>
            <br />
          </>
        )}
        {nextPostSlug && nextPostDate && (
          <>
            <NavLink href={`/blog/${nextPostSlug}`}>
              <NavChevron>{"> "}</NavChevron>
              next post: <NavDate>{formatPostDate(nextPostDate)}</NavDate>
            </NavLink>
            <br />
          </>
        )}
        <PostsLink href="/blog/posts">See all post</PostsLink>
      </InfoPageLayout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<BlogArticlePageProps> = async (context) => {
  const slug = context.params?.slug;
  const currentSlug = String(Array.isArray(slug) ? slug[0] : slug || "");
  const posts = await getBlogPosts();
  const currentIndex = posts.findIndex((post) => post.slug === currentSlug || String(post.id) === currentSlug);

  if (!currentSlug || currentIndex === -1) {
    return {
      notFound: true,
    };
  }

  const currentPost = posts[currentIndex];
  const previousPost = posts[currentIndex + 1] ?? null;
  const nextPost = currentIndex > 0 ? posts[currentIndex - 1] : null;

  return {
    props: {
      currentPost,
      previousPostSlug: previousPost?.slug ?? null,
      nextPostSlug: nextPost?.slug ?? null,
      previousPostDate: previousPost?.createdAt ?? null,
      nextPostDate: nextPost?.createdAt ?? null,
    },
  };
};
