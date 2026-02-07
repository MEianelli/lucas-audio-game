import { FlexC, FlexR } from "@/components/containers/flex";
import { BlurText } from "@/components/text/BlurText";
import { styled } from "@/styles/stitches.config";
import { Disclaimer } from "./Disclaimer";
import { InstagramLogo, XLogo } from "@/components/icons/logos";

const FooterContainer = styled("footer", {
  padding: "20px 18px",
  marginTop: "auto",
  borderTop: "1px solid rgba(255, 255, 255, 0.1)",
  "@s": {
    padding: "16px 12px",
  },
});

const FooterLink = styled("a", {
  color: "rgba(255, 255, 255, 0.7)",
  textDecoration: "none",
  "&:hover": {
    color: "rgba(255, 255, 255, 0.9)",
  },
});

const SocialRow = styled(FlexR, {
  gap: 14,
  justifyContent: "center",
  marginTop: "6px",
});

const SocialLink = styled("a", {
  width: "44px",
  height: "44px",
  borderRadius: "50%",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: "rgba(255, 255, 255, 0.9)",
  transition: "all 0.2s ease",
  "&:hover": {
    transform: "translateY(-1px)",
  },
});

const FooterNav = styled("nav", {
  marginTop: "10px",
});

export function Footer() {
  return (
    <FooterContainer>
      <FlexC css={{ gap: 8, alignItems: "center" }}>
        <SocialRow>
          <SocialLink href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
            <InstagramLogo size={32} />
          </SocialLink>
          <SocialLink href="https://x.com" target="_blank" rel="noreferrer" aria-label="Twitter">
            <XLogo size={32} />
          </SocialLink>
        </SocialRow>
        <FooterNav>
          <FlexR css={{ gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <FooterLink href="/">
              <BlurText title="Home" css={{ fontSize: "14px" }} />
            </FooterLink>
            <FooterLink href="/content">
              <BlurText title="Play" css={{ fontSize: "14px" }} />
            </FooterLink>
            <FooterLink href="/privacy-policy">
              <BlurText title="Privacy Policy" css={{ fontSize: "14px" }} />
            </FooterLink>
            <FooterLink href="/faq">
              <BlurText title="FAQ" css={{ fontSize: "14px" }} />
            </FooterLink>
            <FooterLink href="/about">
              <BlurText title="About" css={{ fontSize: "14px" }} />
            </FooterLink>
            <FooterLink href="/how-to-play">
              <BlurText title="How to Play" css={{ fontSize: "14px" }} />
            </FooterLink>
          </FlexR>
        </FooterNav>
        <Disclaimer />
      </FlexC>
    </FooterContainer>
  );
}
