export function mapValues(n: number, originalStart: number, orignalEnd: number, targetStart: number, targetEnd: number, withinBounds?: boolean) {
  const newval = ((n - originalStart) / (orignalEnd - originalStart)) * (targetEnd - targetStart) + targetStart;
  if (!withinBounds) {
    return newval;
  }
  return constrain(newval, Math.min(targetStart, targetEnd), Math.max(targetStart, targetEnd));
}

function constrain(n: number, low: number, high: number) {
  return Math.max(Math.min(n, high), low);
}
