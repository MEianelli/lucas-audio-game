import { Div } from "@/components/containers/div";
import { FlexR } from "@/components/containers/flex";
import { ImageCss } from "@/components/image/Image";
import { Text } from "@/components/text/text";
import ranking1Icon from "../../../../public/imgs/ranking-up-1.png";

export type AlertStatus = "ok" | "nok" | "neutral";

export const AlertPoint = ({ status }: { status: AlertStatus }) => {
  console.log("status :", status);
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
          <Text>Correct!</Text>
        </Div>
        <FlexR css={{ backgroundColor: "$brightGreen", padding: 10 }}>
          <ImageCss src={ranking1Icon} width={30} height={20} alt="ranking" />
        </FlexR>
      </>
    );
  }
  if (status === "nok") {
    return (
      <Div css={{ backgroundColor: "$red", padding: 10 }}>
        <Text>Wrong!</Text>
      </Div>
    );
  }
};
