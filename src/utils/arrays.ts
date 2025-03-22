//converts this: 'errada1, errada2,errada3, Errada 4, Errada 5 ,' to this: ['errada1', 'errada2', 'errada3', 'errada 4', 'errada 5']
export function commaStringToArr(data: string) {
  return data
    .split(",")
    .map((tag) => tag.trim().toLowerCase())
    .filter((it) => !!it);
}

export function countElementsInArray(array1: number[], array2: number[]) {
  return array1.reduce((count, element) => {
    if (array2.includes(element)) {
      return count + 1;
    }
    return count;
  }, 0);
}
