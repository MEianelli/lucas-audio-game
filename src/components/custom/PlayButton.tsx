import { Div } from "../containers/div";
import { PlayIcon } from "../icons/play";

export function PlayButton({ isPlaying }: { readonly isPlaying: boolean }) {
  if (isPlaying) return null;
  return (
    <Div
      css={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "40px",
        height: "40px",
        backgroundColor: "#00af47",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0px 3px 0px 0px $darkGreen2",
        opacity: 1,
      }}
    >
      <PlayIcon />
    </Div>
  );
}
