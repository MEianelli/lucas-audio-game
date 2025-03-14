import { MAX_ANS_LEN } from "@/lib/contants";

export function reduceAnsSize(ans: string) {
  if (ans.length > MAX_ANS_LEN) {
    return ans.slice(0, MAX_ANS_LEN) + "...";
  }
  return ans;
}
