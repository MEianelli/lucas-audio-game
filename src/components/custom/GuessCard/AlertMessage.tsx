import { Div } from "@/components/containers/div";
import { FlexR } from "@/components/containers/flex";
import { ImageCss } from "@/components/image/Image";
import { Text } from "@/components/text/text";
import ranking1Icon from "../../../../public/imgs/ranking-up-1.png";
import { keyframes } from "@/styles/stitches.config";
import { useMemo } from "react";
import { FileIcon, RetryIcon } from "@/components/icons/file";
import * as motion from "motion/react-client";
import { useStore } from "@/lib/store";

export type AlertStatus = "ok" | "nok" | "neutral" | "retry";

const sizeAnimation = keyframes({
  "0%": { transform: "scale(1)" },
  "50%": { transform: "scale(1.3)" },
  "100%": { transform: "scale(1)" },
});

export const AlertPoint = ({
  status,
  id,
}: {
  status: AlertStatus;
  id: number;
}) => {
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
        zIndex: 50,
        animation,
      }}
    >
      <AlertPointContent status={status} id={id} />
    </FlexR>
  );
};

export const AlertPointContent = ({
  status,
  id,
}: {
  status: AlertStatus;
  id: number;
}) => {
  const setIgnoreids = useStore((store) => store.setIgnoreids);

  if (status === "ok") {
    return (
      <FlexR css={{ borderRadius: 8, overflow: "hidden" }}>
        <Div css={{ backgroundColor: "$grey", padding: 10 }}>
          <Text css={{ fontSize: 14 }}>Correct!</Text>
        </Div>
        <FlexR css={{ backgroundColor: "$brightGreen", padding: 10 }}>
          <ImageCss src={ranking1Icon} width={20} height={16} alt="ranking" />
        </FlexR>
      </FlexR>
    );
  }
  if (status === "nok") {
    return (
      <Div
        css={{
          backgroundColor: "$red",
          padding: 10,
          borderRadius: 8,
          overflow: "hidden",
        }}
      >
        <Text css={{ fontSize: 14 }}>Wrong!</Text>
      </Div>
    );
  }

  if (status === "retry") {
    return (
      <FlexR css={{ gap: 6 }}>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
          <Div
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              setIgnoreids([id]);
            }}
            css={{
              width: "45px",
              height: "45px",
              borderRadius: "50%",
              padding: "8px",
              backgroundColor: "#5400BF",
              boxShadow: "0px 4px rgb(38, 6, 80)",
              "& svg path": {
                fill: "white",
              },
            }}
          >
            <FileIcon />
          </Div>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          <Div
            css={{
              width: "45px",
              height: "45px",
              borderRadius: "50%",
              padding: "8px",
              backgroundColor: "#0CB540",
              boxShadow: "0px 4px rgb(2, 34, 8)",

              "& svg path": {
                fill: "white",
              },
            }}
          >
            <RetryIcon />
          </Div>
        </motion.div>
      </FlexR>
    );
  }

  return null;
};
