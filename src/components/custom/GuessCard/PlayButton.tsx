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
        width: "80px",
        height: "64px",
        backgroundColor: "$darkgrey",
        color,
        border: `4px solid ${color}`,
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
