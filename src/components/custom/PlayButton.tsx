import { Div } from "../containers/div";

export function PlayButton({ isPlaying }: { readonly isPlaying: boolean }) {
  return (
    <Div
      css={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "60px",
        height: "60px",
        backgroundColor: "#AB8C8C",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {!isPlaying ? (
        <Div
          css={{
            width: 0,
            height: 0,
            borderLeft: "24px solid white",
            borderTop: "12px solid transparent",
            borderBottom: "12px solid transparent",
            marginLeft: "6px",
          }}
        />
      ) : (
        <Div
          css={{ width: "22px", height: "22px", backgroundColor: "white" }}
        />
      )}
    </Div>
  );
}
