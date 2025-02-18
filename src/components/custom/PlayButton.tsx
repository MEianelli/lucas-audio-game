import { TDifficulty } from "@/lib/supabase";
import { Div } from "../containers/div";
import { PlayIcon } from "../icons/play";

export const difficultyToColor: Record<TDifficulty, string> = {
  normal: "$green",
  easy: "$purple",
  hard: "$pink",
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
        width: "45px",
        height: "38px",
        backgroundColor: "$darkgrey",
        color: difficultyToColor[difficulty],
        border: `2px solid ${difficultyToColor[difficulty]}`,
        borderRadius: "12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& svg": {
          translate: "1px",
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
