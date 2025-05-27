import { mapValues } from "@/utils/map";
import { MAX_ANS_LEN } from "../lib/contants";

export function calculateFontSize(textLength: number) {
  const minLength = 15; // Minimum text length
  const maxLength = MAX_ANS_LEN; // Maximum text length 24
  const minFontSize = 18; // Minimum font size in px
  const maxFontSize = 26; // Maximum font size in px

  const mappedValue = mapValues(textLength, minLength, maxLength, maxFontSize, minFontSize, true);

  return Math.floor(mappedValue);
}
