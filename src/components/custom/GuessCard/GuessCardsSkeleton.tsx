import { FlexC } from "@/components/containers/flex";
import { Div } from "@/components/containers/div";
import { ASPECT_R } from "@/lib/contants";
import { keyframes, styled } from "@/styles/stitches.config";

const shimmer = keyframes({
  "0%": { backgroundPosition: "-200% 0" },
  "100%": { backgroundPosition: "200% 0" },
});

const SkeletonBox = styled("div", {
  borderRadius: "10px",
  background:
    "linear-gradient(90deg, rgb(15 0 41) 25%, rgb(35 6 90) 50%, rgb(15 0 41) 75%)",
  backgroundSize: "200% 100%",
  animation: `${shimmer} 1.4s ease-in-out infinite`,
  boxShadow: "rgb(49 9 150 / 40%) 0px 0px 40px 10px inset",
});

export const GuessCardsSkeleton = () => {
  return (
    <FlexC
      css={{
        padding: "0px 20px",
        alignItems: "center",
        gap: 12,
        width: "100%",
        margin: "auto",
        position: "relative",
      }}
    >
      <SkeletonBox
        css={{
          width: "98%",
          aspectRatio: `${ASPECT_R}`,
        }}
      />
      <Div css={{ width: "100%", display: "flex", flexDirection: "column", gap: 10, paddingX: "7px" }}>
        {[0, 1, 2, 3].map((i) => (
          <SkeletonBox key={i} css={{ width: "100%", height: "66px" }} />
        ))}
      </Div>
    </FlexC>
  );
};
