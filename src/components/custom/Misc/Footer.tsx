import { FlexC, FlexR } from "@/components/containers/flex";
import { BlurText } from "@/components/text/BlurText";
import { styled } from "@/styles/stitches.config";
import { Disclaimer } from "./Disclaimer";

const FooterContainer = styled("footer", {
  padding: "20px 18px",
  marginTop: "auto",
  borderTop: "1px solid rgba(255, 255, 255, 0.1)",
  "@s": {
    padding: "16px 12px",
  },
});

const FooterText = styled("p", {
  color: "rgba(255, 255, 255, 0.6)",
  fontSize: "11px",
  lineHeight: "1.5",
  textAlign: "center",
  margin: "4px 0",
  "@s": {
    fontSize: "10px",
  },
});

const FooterLink = styled("a", {
  color: "rgba(255, 255, 255, 0.7)",
  textDecoration: "underline",
  "&:hover": {
    color: "rgba(255, 255, 255, 0.9)",
  },
});

export function Footer() {
  return (
    <FooterContainer>
      <FlexC css={{ gap: 8, alignItems: "center" }}>
        <BlurText title="Filmguess" css={{ fontSize: "16px", marginBottom: "4px" }} />
        <FooterText>
          Filmguess is a free online game where you can test your movie knowledge by guessing movies through audio clips.
        </FooterText>
        <FooterText>
          Challenge yourself, compete with other players and see how many movies you can guess correctly!
        </FooterText>
        <FlexR css={{ gap: 16, justifyContent: "center", marginTop: "8px", flexWrap: "wrap" }}>
          <FooterText>
            <FooterLink href="/">Home</FooterLink>
          </FooterText>
          <FooterText>
            <FooterLink href="/content">Play</FooterLink>
          </FooterText>
        </FlexR>
        <FooterText css={{ marginTop: "12px", fontSize: "10px" }}>
          © {new Date().getFullYear()} Filmguess. All rights reserved.
        </FooterText>
        <Disclaimer />
      </FlexC>
    </FooterContainer>
  );
}
