import { Container } from "@/components/containers/containers";
import { FlexC, FlexR } from "@/components/containers/flex";
import { Footer } from "@/components/custom/Misc/Footer";
import { StrongBlurText } from "@/components/text/StrongBlurText";
import { styled } from "@/styles/stitches.config";
import type { ReactNode } from "react";

const PageWrapper = styled(FlexC, {
  minHeight: "100vh",
});

const HeaderRow = styled(FlexR, {
  padding: "10px 18px 0px 18px",
});

const HeaderLink = styled("a", {
  textDecoration: "none",
  color: "inherit",
});

const ContentSection = styled("section", {
  padding: "20px 18px",
  maxWidth: "820px",
  margin: "0 auto",
  "@s": {
    padding: "16px 12px",
  },
});

const ContentBody = styled("div", {
  color: "rgba(255, 255, 255, 0.8)",
  fontSize: "14px",
  lineHeight: "1.7",
  textAlign: "left",
  "@s": {
    fontSize: "12px",
  },
  "& h1": {
    fontSize: "22px",
    margin: "0 0 10px 0",
    color: "$white",
  },
  "& h2": {
    fontSize: "18px",
    margin: "18px 0 8px",
    color: "$white",
  },
  "& h3": {
    fontSize: "16px",
    margin: "14px 0 6px",
    color: "$white",
  },
  "& h4": {
    fontSize: "14px",
    margin: "12px 0 6px",
    color: "$white",
  },
  "& p": {
    margin: "8px 0",
  },
  "& ul": {
    paddingLeft: "20px",
    margin: "8px 0",
  },
  "& ol": {
    paddingLeft: "20px",
    margin: "8px 0",
  },
  "& li": {
    margin: "4px 0",
  },
  "& hr": {
    border: "none",
    borderTop: "1px solid rgba(255, 255, 255, 0.12)",
    margin: "16px 0",
  },
});

type InfoPageLayoutProps = {
  children: ReactNode;
};

export function InfoPageLayout({ children }: InfoPageLayoutProps) {
  return (
    <Container>
      <PageWrapper>
        <HeaderRow>
          <HeaderLink href="/" aria-label="Go to home">
            <StrongBlurText title="Filmguess" css={{ fontSize: "32px", userSelect: "none" }} />
          </HeaderLink>
        </HeaderRow>
        <ContentSection>
          <ContentBody>{children}</ContentBody>
        </ContentSection>
        <Footer />
      </PageWrapper>
    </Container>
  );
}
