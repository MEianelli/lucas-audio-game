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

export function getRndArrElements<T>(arr: T[], amount = 3): T[] {
  if (!arr?.length) return [];
  const result: Set<T> = new Set();
  while (result.size < amount) {
    const rndIndex = Math.floor(Math.random() * arr.length);
    result.add(arr[rndIndex]);
  }
  return [...result];
}
