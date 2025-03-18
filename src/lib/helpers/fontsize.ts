import { MAX_ANS_LEN } from "../contants";

export function calculateFontSize(textLength: number) {
  const minLength = 15; // Minimum text length
  const maxLength = MAX_ANS_LEN; // Maximum text length
  const minFontSize = 22; // Minimum font size in px
  const maxFontSize = 28; // Maximum font size in px

  // Ensure the text length is within the bounds
  if (textLength <= minLength) {
    return maxFontSize; // Return max font size if text is too short
  }
  if (textLength >= maxLength) {
    return minFontSize; // Return min font size if text is too long
  }

  // Calculate the font size using linear interpolation
  const fontSize =
    minFontSize +
    ((textLength - minLength) * (maxFontSize - minFontSize)) /
      (maxLength - minLength);

  return Math.floor(fontSize);
}
