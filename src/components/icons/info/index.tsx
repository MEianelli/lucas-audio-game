import { IconsContainer } from "@/components/containers/containers";
import { styled } from "@/styles/stitches.config";

const InfoIconContainer = styled(IconsContainer, {
  cursor: "pointer",
  position: "relative",
  "&:hover": {
    opacity: 0.8,
  },
});

export function Info({ size = "20px" }: { size?: string }) {
  return (
    <InfoIconContainer css={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ filter: "drop-shadow(0 0 3px rgba(178, 242, 253, 0.5))" }}
      >
        <circle cx="12" cy="12" r="10" stroke="rgb(178, 242, 253)" strokeWidth="2" fill="none" />
        <path
          d="M12 16V12M12 8H12.01"
          stroke="rgb(178, 242, 253)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </InfoIconContainer>
  );
}

