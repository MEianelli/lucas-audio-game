const prepositions = ["o", "a", "os", "as", "the"];

export function rightAnswerCheck(arr: string[], value: string) {
  const cleanedAns = arr.map(cleanWord);
  const cleanValue = cleanWord(value);
  return cleanedAns.some((ans) => ans === cleanValue);
}

function cleanWord(word: string) {
  word = removeAccents(word);
  word = removePrepositions(word);
  return word.trim();
}

function removePrepositions(s: string) {
  prepositions.forEach((pre) => {
    s = s.replace(pre + " ", "");
  });
  return s;
}

function removeAccents(s: string) {
  return s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase();
}
