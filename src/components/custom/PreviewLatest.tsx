import { useEffect, useState } from "react";
import { FlexC } from "../containers/flex";
import { GuessCard } from "./GuessCard";
import { deleteOne, getLatest, TGuess } from "@/lib/supabase";
import { Button } from "../buttons/buttons";
import { Text } from "../text/text";

export const PreviewLatest = ({ reload }: { reload: boolean }) => {
  const [guess, setGuess] = useState<TGuess[] | null>(null);

  useEffect(() => {
    async function getData() {
      try {
        const data = await getLatest();
        setGuess(data);
      } catch (error) {
        alert(error);
      }
    }
    getData();
  }, [reload]);

  async function handleDelete() {
    const deleteId = guess?.[0].id;
    if (!deleteId) return;
    const res = await deleteOne(guess?.[0].id);
    if (res) {
      alert("DELETADO");
      window.location.reload();
    }
  }

  return (
    <FlexC
      css={{
        gap: "32px",
        width: "100%",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <Text size={"b"}>PREVIEW ultimo adicionado:</Text>
      {guess?.map((it, i) => (
        <GuessCard key={it.image_src! + i} card={it} />
      ))}
      <Button variant={"delete"} onClick={handleDelete}>
        DELETAR
      </Button>
    </FlexC>
  );
};
