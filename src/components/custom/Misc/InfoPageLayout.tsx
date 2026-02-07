import { Container } from "@/components/containers/containers";
import { FlexC, FlexR } from "@/components/containers/flex";
import { Footer } from "@/components/custom/Misc/Footer";
import { BlurText } from "@/components/text/BlurText";
import { StrongBlurText } from "@/components/text/StrongBlurText";
import { styled } from "@/styles/stitches.config";

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

const ContentText = styled("p", {
  color: "rgba(255, 255, 255, 0.8)",
  fontSize: "14px",
  lineHeight: "1.6",
  margin: "8px 0",
  textAlign: "left",
  "@s": {
    fontSize: "12px",
  },
});

type InfoPageLayoutProps = {
  title: string;
  paragraphs: string[];
};

export function InfoPageLayout({ title, paragraphs }: InfoPageLayoutProps) {
  return (
    <Container>
      <PageWrapper>
        <HeaderRow>
          <HeaderLink href="/" aria-label="Go to home">
            <StrongBlurText title="Filmguess" css={{ fontSize: "32px", userSelect: "none" }} />
          </HeaderLink>
        </HeaderRow>
        <ContentSection>
          <FlexC css={{ gap: 12, alignItems: "center" }}>
            <BlurText title={title} css={{ fontSize: "20px", marginBottom: "8px" }} />
            {paragraphs.map((paragraph, index) => (
              <ContentText key={`${title}-${index}`}>{paragraph}</ContentText>
            ))}
          </FlexC>
        </ContentSection>
        <Footer />
      </PageWrapper>
    </Container>
  );
}
