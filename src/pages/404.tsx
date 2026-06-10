import Link from "next/link";
import { InfoPageLayout } from "@/components/custom/Misc/InfoPageLayout";
import { SEO } from "@/components/custom/Misc/SEO";
import { styled } from "@/styles/stitches.config";

const LinkList = styled("ul", {
  margin: "12px 0",
  paddingLeft: "0",
  listStylePosition: "inside",
  "& li": {
    margin: "8px 0",
  },
  "& a": {
    color: "#c084fc",
    textDecoration: "underline",
  },
});

export default function NotFoundPage() {
  return (
    <>
      <SEO title="Page Not Found" description="This page does not exist. Head back to Filmguess and keep guessing movies by their audio." noIndex />
      <InfoPageLayout>
        <h1>Page not found</h1>
        <p>The page you are looking for does not exist or has moved. Here are some good places to go instead:</p>
        <LinkList>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/content">Play the game</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/ranks">Weekly ranks</Link>
          </li>
          <li>
            <Link href="/faq">FAQ</Link>
          </li>
        </LinkList>
      </InfoPageLayout>
    </>
  );
}
