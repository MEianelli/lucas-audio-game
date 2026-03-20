import React from "react";
import { styled } from "@/styles/stitches.config";
import { BlurText } from "@/components/text/BlurText";

const IntroWrapper = styled("section", {
  position: "relative",
  padding: "24px",
  margin: "20px auto",
  maxWidth: "90%",
  textAlign: "center",
  borderRadius: "16px",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  overflow: "hidden",
});

const BlurBg = styled("div", {
  position: "absolute",
  inset: 0,
  background: "#1b005c",
  filter: "blur(3px)",
  zIndex: -1,
});

const IntroText = styled("p", {
  fontSize: "15px",
  lineHeight: "1.6",
  color: "rgba(255, 255, 255, 0.8)",
  marginBottom: "16px",
  position: "relative",
  zIndex: 1,
});

export function AboutIntro() {
  return (
    <IntroWrapper>
      <BlurBg />
      <div style={{ marginBottom: "16px", position: "relative", zIndex: 1, display: "inline-block" }}>
        <BlurText title="What is FilmGuess?" css={{ fontSize: "24px", color: "$white" }} />
      </div>
      <IntroText>
        FilmGuess is the ultimate interactive movie audio quiz game designed for cinema lovers and trivia enthusiasts.
        Test your knowledge of the most iconic movie quotes and sounds in cinematic history. Whether you are a fan of
        classic films, modern blockbusters, or indie gems, our curated audio excerpts will challenge your memory and
        recognition skills.
      </IntroText>
      <IntroText>
        To play, simply listen to the short audio clip and select the correct movie title from the four options
        provided. Act fast—the clock is ticking! Rack up points for consecutive correct answers and climb the global
        leaderboards to prove you are the ultimate film buff.
      </IntroText>
      <IntroText style={{ marginBottom: 0 }}>
        Dive into our weekly updated selection of quotes and scenes. It&apos;s more than just a game; it&apos;s a celebration
        of the unforgettable moments that make us love the movies. Ready to accept the challenge? Hit play and let
        the movie magic begin!
      </IntroText>
    </IntroWrapper>
  );
}
