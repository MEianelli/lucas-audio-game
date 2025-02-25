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
    case 0:
      icon = <EasyIcon />;
      break;
    case 1:
      icon = <NormalIcon />;
      break;
    case 2:
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
