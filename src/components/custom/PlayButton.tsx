import { TDifficulty } from "@/lib/supabase";
import { Div } from "../containers/div";
import { PlayIcon } from "../icons/play";

export const difficultyToColor: Record<TDifficulty, string> = {
  0: "$green",
  1: "$green",
  2: "$green",
  3: "$purple",
  4: "$pink",
};

export function PlayButton({
  isPlaying,
  difficulty,
}: {
  readonly isPlaying: boolean;
  readonly difficulty: TDifficulty;
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
        color: difficultyToColor[difficulty],
        border: `5px solid $green`,
        borderRadius: "14px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& svg": {
          translate: "2px",
        },
        "& svg path": {
          stroke: difficultyToColor[difficulty],
        },
      }}
    >
      <PlayIcon />
    </Div>
  );
}
