import { MAX_ANS_LEN } from "@/lib/contants";

export function reduceAnsSize(ans: string) {
  const trimedAns = ans.trim();
  if (trimedAns.length > MAX_ANS_LEN) {
    return trimedAns.slice(0, MAX_ANS_LEN) + "...";
  }
  return trimedAns;
}
