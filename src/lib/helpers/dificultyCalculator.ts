import { TDifficulty, TGuess, User } from "../supabase";

export type TIdsArray = (number[] | undefined)[] | undefined;

export type TScores = {
  id: number;
  score: number;
}[];

export type TDificulties = {
  id: number;
  difficulty: TDifficulty;
}[];

export function calcDificulty(allGuesses: TGuess[], allUsers: User[]) {
  const allHits = allUsers?.map(({ hitids }) => hitids);
  const allMiss = allUsers?.map(({ missids }) => missids);

  const hitCounts = calculateCounts(allHits);
  const missCounts = calculateCounts(allMiss);

  const scores = calcFinalScore(hitCounts, missCounts, allGuesses);

  return calculateThresholdsAndCategorize(scores);
}

export function calculateThresholdsAndCategorize(
  scores: TScores
): TDificulties {
  const onlyScore = scores.map(({ score }) => score);
  const sortedScores = [...onlyScore].sort((a, b) => a - b);

  // Step 2: Calculate the 25th and 75th percentiles
  const calculatePercentile = (arr: number[], percentile: number) => {
    const index = (percentile / 100) * (arr.length - 1);
    const lower = Math.floor(index);
    const upper = Math.ceil(index);
    if (lower === upper) return arr[lower];
    return arr[lower] + (arr[upper] - arr[lower]) * (index - lower);
  };

  const threshold1 = calculatePercentile(sortedScores, 25); // 25th percentile
  const threshold2 = calculatePercentile(sortedScores, 75); // 75th percentile

  // Step 3: Categorize the scores
  return scores.map(({ id, score }) => {
    if (score < threshold1) {
      return { id, difficulty: 3 };
    } else if (score >= threshold1 && score <= threshold2) {
      return { id, difficulty: 2 };
    } else {
      return { id, difficulty: 1 };
    }
  });
}

export function calculateCounts(data: TIdsArray) {
  const map = new Map();
  data?.forEach((arr) => {
    arr?.forEach((value) => {
      const curr = map.get(value) || 0;
      map.set(value, curr + 1);
    });
  });
  return map;
}

export function calcFinalScore(
  hits: Map<number, number>,
  misses: Map<number, number>,
  guesses: TGuess[]
): TScores {
  return guesses.map(({ id }) => {
    const hit = hits?.get(id) ?? 0;
    const miss = misses?.get(id) ?? 0;
    const diff = hit - miss;
    return {
      id,
      score: diff,
    };
  });
}
