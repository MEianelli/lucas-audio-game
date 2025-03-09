import { keyframes, styled } from "@/styles/stitches.config";

const loading = keyframes({
  "0%": { opacity: 0.5 },
  "50%": { opacity: 1 },
  "100%": { opacity: 0.5 },
});

// Styled components using Stitches
const SkeletonContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  width: "100%",
});

const SkeletonBar = styled("div", {
  height: "20px",
  backgroundColor: "#505050",
  borderRadius: "4px",
  animation: `${loading} 1.5s infinite ease-in-out`,
});

// LoadingSkeleton component
const LoadingSkeleton = () => {
  return (
    <SkeletonContainer>
      <SkeletonBar css={{ width: "100%" }} />
      <SkeletonBar css={{ width: "80%" }} />
      <SkeletonBar css={{ width: "60%" }} />
      <SkeletonBar css={{ width: "40%" }} />
      <SkeletonBar css={{ width: "20%" }} />
    </SkeletonContainer>
  );
};

export default LoadingSkeleton;
