import { BlurText } from "@/components/buttons/BlurText/BlurText";
import { Div } from "@/components/containers/div";
import { FlexC } from "@/components/containers/flex";

const Tests = () => {
  return (
    <FlexC
      css={{
        background: "$darkPurple",
        width: "900px",
        height: "100vh",
        margin: "auto",
        padding: "60px",
      }}
    >
      <Div
        css={{
          display: "flex",
          flexFlow: "column",
          gap: "60px",
          padding: "20px",
          borderRadius: "20px",
          backgroundColor: "#080858",
        }}
      >
        <BlurText title={"Leaderboard"} onclick={() => {}} css={{ fontSize: "18px" }} />
      </Div>
    </FlexC>
  );
};

export default Tests;
