//converts this: 'errada1, errada2,errada3, Errada 4, Errada 5 ,' to this: ['errada1', 'errada2', 'errada3', 'errada 4', 'errada 5']
export function commaStringToArr(data: string) {
  return data
    .split(",")
    .map((tag) => tag.trim().toLowerCase())
    .filter((it) => !!it);
}
