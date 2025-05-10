import { Div } from "@/components/containers/div";
import { FlexC } from "@/components/containers/flex";
import { Bolt } from "@/components/icons/bolt";
import { Heart } from "@/components/icons/heart";
import { World } from "@/components/icons/world";

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
        <Heart />
        <World />
        <Bolt />
      </Div>
    </FlexC>
  );
};

export default Tests;
