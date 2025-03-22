import { getRndArrElements } from "./random";
import dailyCardsData from "@/lib/dailyCardsData";

export function generateYearlyDates(ids: number[]) {
  const year = new Date().getFullYear(); // Get the current year
  const dates: Record<string, number[]> = {};

  // Loop through each month (0 = January, 11 = December)
  for (let month = 0; month < 12; month++) {
    // Get the number of days in the current month
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Loop through each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      // Format the date as "DD-MM-YYYY"
      const dayS = String(day).padStart(2, "0");
      const monthS = String(month + 1).padStart(2, "0");
      const dateKey = `${year}-${monthS}-${dayS}`;
      const rnd8Ids = getRndArrElements<number>(ids, 10);
      dates[dateKey] = rnd8Ids;
    }
  }

  const def = getRndArrElements<number>(ids, 10);
  dates["default"] = def;

  return dates;
}

export function getDailyCards() {
  const today = new Date();
  const m = String(today.getMonth() + 1).padStart(2, "0");
  const d = String(today.getDate()).padStart(2, "0");
  const y = today.getFullYear();
  const dateKey = `${y}-${m}-${d}`;
  return dailyCardsData[dateKey] || dailyCardsData["default"];
}
