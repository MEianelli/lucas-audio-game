import { Container } from "@/components/containers/containers";
import { FlexC, FlexR } from "@/components/containers/flex";
import { Footer } from "@/components/custom/Misc/Footer";
import { StrongBlurText } from "@/components/text/StrongBlurText";
import { styled } from "@/styles/stitches.config";
import type { ReactNode } from "react";
import { useMemo } from "react";
import { useRouter } from "next/router";

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

const BreadcrumbsRow = styled("nav", {
  marginTop: "8px",
  marginBottom: "10px",
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "6px",
});

const BreadcrumbLink = styled("a", {
  color: "#c084fc",
  textDecoration: "none",
  fontWeight: 700,
  "&:hover": {
    textDecoration: "underline",
  },
});

const BreadcrumbCurrent = styled("span", {
  color: "#c084fc",
  fontWeight: 700,
});

const BreadcrumbSeparator = styled("span", {
  color: "#c084fc",
  fontSize: "10px",
  lineHeight: 1,
  fontWeight: 700,
});

const ContentSection = styled("section", {
  padding: "20px 18px",
  width: "100%",
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

function toBreadcrumbLabel(segment: string) {
  const decoded = decodeURIComponent(segment);
  return decoded
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function InfoPageLayout({ children }: InfoPageLayoutProps) {
  const router = useRouter();
  const path = router.asPath.split("?")[0].split("#")[0];

  const breadcrumbItems = useMemo(() => {
    const segments = path.split("/").filter(Boolean);
    return segments.map((segment, index) => {
      const href = `/${segments.slice(0, index + 1).join("/")}`;
      return {
        href,
        label: toBreadcrumbLabel(segment),
        isLast: index === segments.length - 1,
      };
    });
  }, [path]);

  return (
    <Container>
      <PageWrapper>
        <HeaderRow>
          <HeaderLink href="/" aria-label="Go to home">
            <StrongBlurText title="Filmguess" css={{ fontSize: "32px", userSelect: "none" }} />
          </HeaderLink>
        </HeaderRow>
        <ContentSection>
          <ContentBody>
            <BreadcrumbsRow aria-label="Breadcrumb">
              {breadcrumbItems.length === 0 ? (
                <BreadcrumbCurrent>Home</BreadcrumbCurrent>
              ) : (
                <>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  {breadcrumbItems.map((item) => (
                    <FlexR key={item.href} css={{ gap: "6px", alignItems: "center" }}>
                      <BreadcrumbSeparator>{">"}</BreadcrumbSeparator>
                      {item.isLast ? (
                        <BreadcrumbCurrent>{item.label}</BreadcrumbCurrent>
                      ) : (
                        <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
                      )}
                    </FlexR>
                  ))}
                </>
              )}
            </BreadcrumbsRow>
            {children}
          </ContentBody>
        </ContentSection>
        <Footer />
      </PageWrapper>
    </Container>
  );
}
