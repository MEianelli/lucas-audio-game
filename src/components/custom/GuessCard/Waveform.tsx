import { Barrinha } from "@/components/icons/audiowave/Barrinha";
import { BarrinhaFundo } from "@/components/icons/audiowave/BarrinhaFundo";
import { keyframes, styled } from "@/styles/stitches.config";

const Container = styled("div", {
  background: "$darkPurple",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "45px",
  height: "45px",
  borderRadius: 3,
});

const upAndDown = keyframes({
  "0%, 40%, 80%, 100%": { maskPosition: "0px 60px" },
  "20%, 60%": { maskPosition: "0px 15px" },
  "30%, 50%, 90%": { maskPosition: "0px 30px" },
  "10%, 70%": { maskPosition: "0px 10px" },
});

//const upAndDown = keyframes({});

const Waveform = () => {
  return (
    <Container>
      {/* <Div
        css={{
          backgroundColor: "$darkPurple",
          filter: "blur(2px)",
          borderRadius: 3,
          position: "absolute",
          width: "40px",
          height: "40px",
        }}
      /> */}
      <BarrinhaFundo css={{ opacity: 0.15, filter: "blur(1px)" }} />
      <Barrinha css={{ translate: "13.2px", animation: `${upAndDown} 4s infinite` }} />
      <Barrinha css={{ animation: `${upAndDown} 4s infinite 0.3s` }} />
      <Barrinha css={{ translate: "-13.2px", animation: `${upAndDown} 4s infinite 0.15s` }} />
    </Container>
  );
};

export default Waveform;
