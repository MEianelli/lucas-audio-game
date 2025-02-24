export function getRandomIds(ids: unknown[], count: number) {
  const shuffled = ids.slice().sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export function shuffleArray<T>(arr: T[]) {
  let currentIndex = arr.length;
  while (currentIndex != 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex],
      arr[currentIndex],
    ];
  }
  return arr;
}

export function getRndArrElements<T>(arr: T[], amount = 3) {
  if (!arr?.length) return [];
  const copy = [...arr];
  const result = [];
  for (let i = 0; i < amount; i++) {
    const rndIndex = Math.floor(Math.random() * arr.length);
    result.push(arr[rndIndex]);
    copy.splice(rndIndex, 1);
  }
  return result;
}
