import { FlexC } from "@/components/containers/flex";
import { BuyLifes } from "./BuyLifes";
import { Logout } from "./Logout";
import { Button } from "@/components/buttons/buttons";
import { useState } from "react";
import { getAllGuesses, getAllUsers, updateGuesses } from "@/lib/supabase";
import { calcDificulty } from "@/lib/helpers/dificultyCalculator";

export function MenuContainer() {
  const [loading, setLoading] = useState(false);

  async function handleCalculate() {
    setLoading(true);
    const allCards = await getAllGuesses();
    const allUsers = await getAllUsers();
    if (!allUsers) return;
    const dificulties = calcDificulty(allCards, allUsers);
    try {
      const res = await updateGuesses(dificulties);
      if (res) {
        alert("Dificuldade atualizada");
      }
    } catch (error) {
      console.log(`${error}`);
    }
    setLoading(false);
  }

  return (
    <FlexC css={{ gap: 16, width: "100%" }}>
      <Logout />
      <BuyLifes />
      <Button onClick={handleCalculate} disabled={loading}>
        Recalculate Dificulty
      </Button>
    </FlexC>
  );
}
