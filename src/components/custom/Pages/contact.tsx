import React from "react";
import { styled } from "@/styles/stitches.config";

const ContactContainer = styled("div", {
  marginTop: "20px",
  backgroundColor: "rgba(255, 255, 255, 0.05)",
  padding: "30px",
  borderRadius: "12px",
  border: "1px solid rgba(255, 255, 255, 0.1)",
});

const ContactLink = styled("a", {
  color: "#ffaa00",
  textDecoration: "none",
  fontWeight: "bold",
  "&:hover": {
    textDecoration: "underline",
  },
});

export default function ContactContent() {
  return (
    <>
      <h1>Contact Us</h1>
      <p>We&apos;d love to hear from you!</p>

      <p>
        Whether you have a question about the game, want to report a bug, have a feature request, or just want to
        talk about movies, our team is here to help. At FilmGuess, we constantly strive to improve our platform
        based on the feedback of our amazing community.
      </p>

      <ContactContainer>
        <h2>Get in Touch</h2>
        <p>
          <strong>Email:</strong>{" "}
          <ContactLink href="mailto:support@filmguess.com">support@filmguess.com</ContactLink>
        </p>
        <p>
          For the fastest response, please include relevant details such as your username or the specific issue
          you are experiencing. We aim to respond to all inquiries within 1-2 business days.
        </p>
      </ContactContainer>

      <h2>Social Media</h2>
      <p>
        You can also reach out to us and join the community on our social media channels. Follow us for weekly
        gameplay updates, movie trivia, and special event announcements!
      </p>
      <ul>
        <li>
          <strong>Instagram:</strong>{" "}
          <ContactLink href="https://www.instagram.com/film.guess.official/" target="_blank" rel="noreferrer">
            @film.guess.official
          </ContactLink>
        </li>
        <li>
          <strong>TikTok:</strong>{" "}
          <ContactLink href="https://www.tiktok.com/@filmguess8" target="_blank" rel="noreferrer">
            @filmguess8
          </ContactLink>
        </li>
      </ul>
    </>
  );
}
