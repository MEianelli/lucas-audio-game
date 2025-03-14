import { FlexC } from "@/components/containers/flex";
import { Logout } from "./Logout";
import { ButtonG } from "@/components/buttons/buttons";
import { useState } from "react";
import { Text } from "@/components/text/text";

export function MenuContainer() {
  const [loading, setLoading] = useState(false);

  async function handleCalculate() {
    setLoading(true);
    // const allCards = await getAllGuesses();
    // const allUsers = await getAllUsers();
    // if (!allUsers) return;
    // const dificulties = calcDificulty(allCards, allUsers);
    // try {
    //   const res = await updateGuesses(dificulties);
    //   if (res) {
    //     alert("Dificuldade atualizada");
    //   }
    // } catch (error) {
    //   console.log(`${error}`);
    // }
    setLoading(false);
  }

  return (
    <FlexC css={{ gap: 6, width: "100%" }}>
      <Text
        css={{
          fontSize: "28px",
          color: "$purple",
          fontWeight: 700,
          marginBottom: 4,
        }}
      >
        Menu
      </Text>
      <Logout />
      <ButtonG onClick={handleCalculate} disabled={loading}>
        Recalculate Dificulty
      </ButtonG>
    </FlexC>
  );
}
