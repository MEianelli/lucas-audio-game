import { keyframes, styled } from "@/styles/stitches.config";
import { FlexC } from "../containers/flex";

const spin = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

const Loader = styled("div", {
  borderRadius: "50%",
  scale: 3,
  borderWidth: "px",
  borderStyle: "solid",
  borderColor: "#0070f3 transparent #0070f3 transparent",
  animation: `${spin} 1s linear infinite`,

  variants: {
    size: {
      small: { width: "30px", height: "30px" },
      medium: { width: "50px", height: "50px" },
      large: { width: "70px", height: "70px" },
    },
    color: {
      primary: { borderColor: "#0070f3 transparent #0070f3 transparent" },
      secondary: { borderColor: "#ff4081 transparent #ff4081 transparent" },
    },
  },
  defaultVariants: {
    size: "large",
    color: "primary",
  },
});

export const SpinningLoader = ({
  size,
  color,
}: {
  size: "small" | "medium" | "large";
  color: "primary" | "secondary";
}) => {
  return <Loader size={size} color={color} />;
};

export const LoadingModal = ({
  size = "medium",
  color = "primary",
}: {
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary";
}) => {
  return (
    <FlexC
      css={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 500,
        backgroundColor: "#000000ef",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Loader size={size} color={color} />
    </FlexC>
  );
};
