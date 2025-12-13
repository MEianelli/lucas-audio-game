import { FlexC } from "@/components/containers/flex";
import { BlurText } from "@/components/text/BlurText";
import { styled } from "@/styles/stitches.config";

const DescriptionContainer = styled("section", {
  padding: "20px 18px",
  maxWidth: "800px",
  margin: "0 auto",
  "@s": {
    padding: "16px 12px",
  },
});

const DescriptionText = styled("p", {
  color: "rgba(255, 255, 255, 0.8)",
  fontSize: "14px",
  lineHeight: "1.6",
  margin: "8px 0",
  textAlign: "center",
  "@s": {
    fontSize: "12px",
  },
});

export function GameDescription() {
  return (
    <DescriptionContainer>
      <FlexC css={{ gap: 12, alignItems: "center" }}>
        <BlurText title="About the Game" css={{ fontSize: "20px", marginBottom: "8px" }} />
        <DescriptionText>
          Filmguess is a fun game that tests your movie knowledge! Listen to audio clips from famous movies and try to guess which movie is correct.
        </DescriptionText>
        <DescriptionText>
          Each player has 3 lives per day. Getting a correct answer increases your score and takes you to the next question. Getting a wrong answer makes you lose a life. When your lives run out, you'll need to wait until the next day to continue playing.
        </DescriptionText>
        <DescriptionText>
          Compete with other players on the leaderboard and see who can get the highest score! The leaderboard is updated in real-time and shows the best players of the week and of all time.
        </DescriptionText>
      </FlexC>
    </DescriptionContainer>
  );
}

export function HowToPlay() {
  return (
    <DescriptionContainer>
      <FlexC css={{ gap: 12, alignItems: "center" }}>
        <BlurText title="How to Play" css={{ fontSize: "20px", marginBottom: "8px" }} />
        <DescriptionText>
          <strong>1.</strong> Click the "Play" button to start the game.
        </DescriptionText>
        <DescriptionText>
          <strong>2.</strong> Click on the image to listen to an audio clip from a movie (2-4 seconds).
        </DescriptionText>
        <DescriptionText>
          <strong>3.</strong> Choose from the 4 answer options which movie you think it is.
        </DescriptionText>
        <DescriptionText>
          <strong>4.</strong> If you get it right, you earn points and advance to the next question. If you get it wrong, you lose a life.
        </DescriptionText>
        <DescriptionText>
          <strong>5.</strong> Keep playing until your lives run out or until you decide to stop. Your lives are renewed daily!
        </DescriptionText>
      </FlexC>
    </DescriptionContainer>
  );
}

