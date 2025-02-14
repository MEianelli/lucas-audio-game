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
        width: "50px",
        height: "50px",
        backgroundColor: "$green2",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0px 3px 0px 0px $darkGreen2",
        opacity: 0.7,
      }}
    >
      <PlayIcon />
    </Div>
  );
}
