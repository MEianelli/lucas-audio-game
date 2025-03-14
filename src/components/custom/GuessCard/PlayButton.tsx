import { Div } from "@/components/containers/div";
import { PlayIcon } from "@/components/icons/play";

export function PlayButton({
  isPlaying,
  color = "$purple",
}: {
  isPlaying: boolean;
  color: string;
}) {
  if (isPlaying) return null;
  return (
    <Div
      css={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "80px",
        height: "64px",
        backgroundColor: "$darkgrey",
        color,
        border: `5px solid ${color}`,
        borderRadius: "14px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& svg": {
          translate: "2px",
        },
        "& svg path": {
          stroke: color,
        },
      }}
    >
      <PlayIcon />
    </Div>
  );
}
