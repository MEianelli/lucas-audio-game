import { User } from "@/types/types";

export function sortByWinRate(
  a: { name: string; winRate: string },
  b: { name: string; winRate: string }
) {
  return Number(b.winRate) - Number(a.winRate);
}

export function calculateWinRates(users?: User[] | null) {
  if (!users?.length) return [];
  return users.map((user) => ({
    name: user.name,
    winRate: calculateWinRate(user).toFixed(2),
  }));
}

export function calculateWinRate(user: User): number {
  const total = user.hitids.length + user.missids.length;
  if (!total) return 0;
  if (!user.hitids.length) return 0;
  return (user.hitids.length / total) * 100;
}
