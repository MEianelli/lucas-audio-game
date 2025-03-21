import { Button } from "@/components/buttons/buttons";
import { generateYearlyDates, getDailyCards } from "@/utils/admin";
import api from "@/utils/api";

function Admin() {
  async function handleClickGen() {
    const res: Array<{ id: number }> = await api(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/data/cards?select=id`,
      {
        method: "GET",
      }
    );
    const ids = res.map(({ id }) => id);
    const dates = generateYearlyDates(ids);
    console.log("dates :", dates);
  }

  function handleClick() {
    const dailyCards = getDailyCards();
    console.log("dailyCards :", dailyCards);
  }

  return (
    <>
      <Button onClick={handleClickGen}>Gen dates file</Button>
      <Button onClick={handleClick}>Get cards</Button>
    </>
  );
}

export default Admin;
