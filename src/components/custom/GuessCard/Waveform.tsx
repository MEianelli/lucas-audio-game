import { keyframes, styled } from "@/styles/stitches.config";

// Define the bounce animation
const bounce = keyframes({
  "0%": { height: "10px" },
  "100%": { height: "40px" },
});

// Styled components
const WaveformContainer = styled("div", {
  display: "flex",
  alignItems: "flex-end",
  height: "50px",
  gap: "5px",
});

const Line = styled("div", {
  width: "4px",
  backgroundColor: "$green",
  animation: `${bounce} 0.5s infinite alternate`,
  variants: {
    size: {
      small: { height: "20px" },
      medium: { height: "30px" },
      large: { height: "40px" },
    },
    delay: {
      0: { animationDelay: "0s" },
      1: { animationDelay: "0.22s" },
      2: { animationDelay: "0.09s" },
      3: { animationDelay: "0.3s" },
    },
  },
});

// Waveform Component
const Waveform = () => {
  return (
    <WaveformContainer>
      <Line size="small" delay="0" />
      <Line size="medium" delay="1" />
      <Line size="large" delay="2" />
      <Line size="medium" delay="3" />
    </WaveformContainer>
  );
};

export default Waveform;
