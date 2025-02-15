import { EasyIcon, HardIcon, NormalIcon } from "@/components/icons/faces";

export function DifficultyIcons({
  difficulty,
}: {
  readonly difficulty: "normal" | "easy" | "hard";
}) {
  if (difficulty === "easy") {
    return <EasyIcon />;
  }

  if (difficulty === "normal") {
    return <NormalIcon />;
  }

  if (difficulty === "hard") {
    return <HardIcon />;
  }

  return <NormalIcon />;
}
