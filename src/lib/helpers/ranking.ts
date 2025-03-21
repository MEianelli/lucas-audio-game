import { User } from "@/types/types";

export function sortByWinRate(
  a: { name: string; winRate: number },
  b: { name: string; winRate: number }
) {
  return Number(b.winRate) - Number(a.winRate);
}

export function calculateWinRates(users?: User[] | null) {
  if (!users?.length) return [];
  return users.map((user) => ({
    name: user.name,
    winRate: calculateWinRate({
      hitids: user.hitids,
      missids: user.missids,
    }),
  }));
}

export type CalculateType = {
  hitids: number[];
  missids: string[];
};

export function calculateWinRate({ hitids, missids }: CalculateType): number {
  if (!hitids.length) return 0;
  const total = hitids.length + missids!.length;
  if (!total) return 0;
  return Math.round((hitids.length / total) * 10000);
}
