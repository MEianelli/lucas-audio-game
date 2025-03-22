import { CardState } from "@/types/types";

export function colorPicker(
  state: CardState,
  isRight: boolean,
  isClicked?: boolean
) {
  if (state === "ok" && isRight) return "$green";
  if (state === "ok") return "$white";
  if (state === "nok" && isClicked) return "$red";
  if (state === "nok") return "$white";
  return "$white";
}
