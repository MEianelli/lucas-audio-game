import { Div } from "@/components/containers/div";

const Tests = () => {
  return (
    <>
      <Div css={{ backgroundColor: "green" }}>BBBB</Div>
      <Div
        css={{
          backgroundColor: "red",
          position: "relative",
          width: "400px",
          height: "400px",
        }}
      >
        <Div
          css={{
            position: "absolute",
            top: -20,
            left: 0,
            backgroundColor: "blue",
          }}
        >
          AAA
        </Div>
      </Div>
    </>
  );
};

export default Tests;
