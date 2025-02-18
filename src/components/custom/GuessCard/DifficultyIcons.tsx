import { Div } from "@/components/containers/div";
import { EasyIcon, HardIcon, NormalIcon } from "@/components/icons/faces";
import { TDifficulty } from "@/lib/supabase";

export function DifficultyIcons({
  difficulty,
}: {
  readonly difficulty: TDifficulty;
}) {
  let icon;

  switch (difficulty) {
    case "easy":
      icon = <EasyIcon />;
      break;
    case "normal":
      icon = <NormalIcon />;
      break;
    case "hard":
      icon = <HardIcon />;
      break;
    default:
      icon = <NormalIcon />;
  }

  return (
    <Div
      css={{
        position: "absolute",
        top: 2,
        right: 2,
      }}
    >
      {icon}
    </Div>
  );
}
