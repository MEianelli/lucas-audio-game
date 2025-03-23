import { Glitch } from "@/components/buttons/GlitchTexts/Version1/glitch";
import { Div } from "@/components/containers/div";

const Tests = () => {
  return (
    <Div
      css={{
        background: "$black",
        width: "900px",
        height: "900px",
        alignContent: "center",
      }}>
      <Glitch title="asd" />
    </Div>
  );
};

export default Tests;
