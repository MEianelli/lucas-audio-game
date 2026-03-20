import React, { useEffect, useState } from "react";
import { styled } from "@/styles/stitches.config";
import { BlurText } from "@/components/text/BlurText";

const BannerWrapper = styled("div", {
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  padding: "16px 24px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  zIndex: 9999,
  gap: "16px",
  borderTop: "1px solid rgba(255, 255, 255, 0.05)",
  "@media (max-width: 600px)": {
    flexDirection: "column",
    textAlign: "center",
    padding: "16px",
  },
});

const BannerBg = styled("div", {
  position: "absolute",
  inset: 0,
  background: "#08001c",
  backdropFilter: "blur(12px)",
  zIndex: -1,
  opacity: 0.95,
});

const BannerText = styled("p", {
  color: "rgba(255, 255, 255, 0.85)",
  fontSize: "13px",
  margin: 0,
  lineHeight: "1.5",
  position: "relative",
  zIndex: 1,
  "& a": {
    color: "#ffaa00",
    textDecoration: "underline",
    fontWeight: "600",
  },
});

const AcceptButton = styled("button", {
  backgroundColor: "rgba(255, 128, 0, 0.15)",
  border: "1px solid rgba(255, 128, 0, 0.5)",
  borderRadius: "24px",
  padding: "8px 24px",
  cursor: "pointer",
  transition: "all 0.2s ease",
  whiteSpace: "nowrap",
  position: "relative",
  zIndex: 1,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 0 10px rgba(255, 128, 0, 0.2)",
  "&:hover": {
    backgroundColor: "rgba(255, 128, 0, 0.3)",
    boxShadow: "0 0 15px rgba(255, 128, 0, 0.4)",
  },
});

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("filmguess_cookie_consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("filmguess_cookie_consent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <BannerWrapper>
      <BannerBg />
      <BannerText>
        We use cookies and similar technologies to enhance your experience, analyze site traffic, and serve
        personalized ads. By clicking &quot;Accept&quot;, you agree to our use of cookies as described in our{" "}
        <a href="/privacy-policy">Privacy Policy</a>.
      </BannerText>
      <AcceptButton onClick={handleAccept}>
        <BlurText title="Accept" css={{ fontSize: "14px", color: "#ffaa00", letterSpacing: "1px" }} />
      </AcceptButton>
    </BannerWrapper>
  );
}
