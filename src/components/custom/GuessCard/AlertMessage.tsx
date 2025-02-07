import { Div } from "@/components/containers/div";
import { FlexR } from "@/components/containers/flex";
import { ImageCss } from "@/components/image/Image";
import { Text } from "@/components/text/text";
import ranking1Icon from "../../../../public/imgs/ranking-up-1.png";
import { keyframes } from "@/styles/stitches.config";
import { useMemo } from "react";

export type AlertStatus = "ok" | "nok" | "neutral";

const sizeAnimation = keyframes({
  "0%": { transform: "scale(1)" },
  "50%": { transform: "scale(1.3)" },
  "100%": { transform: "scale(1)" },
});

export const AlertPoint = ({ status }: { status: AlertStatus }) => {
  const animation = useMemo(() => {
    if (status !== "neutral") {
      return `${sizeAnimation} 0.3s ease-in-out`;
    }
    return "none";
  }, [status]);

  return (
    <FlexR
      css={{
        position: "absolute",
        top: "50%",
        left: "50%",
        translate: "-50% -50%",
        overflow: "hidden",
        zIndex: 50,
        borderRadius: 8,
        animation,
      }}
    >
      <AlertPointContent status={status} />
    </FlexR>
  );
};

export const AlertPointContent = ({ status }: { status: AlertStatus }) => {
  if (status === "ok") {
    return (
      <>
        <Div css={{ backgroundColor: "$grey", padding: 10 }}>
          <Text css={{ fontSize: 14 }}>Correct!</Text>
        </Div>
        <FlexR css={{ backgroundColor: "$brightGreen", padding: 10 }}>
          <ImageCss src={ranking1Icon} width={20} height={16} alt="ranking" />
        </FlexR>
      </>
    );
  }
  if (status === "nok") {
    return (
      <Div css={{ backgroundColor: "$red", padding: 10 }}>
        <Text css={{ fontSize: 14 }}>Wrong!</Text>
      </Div>
    );
  }
  return null;
};
