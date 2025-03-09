import { useEffect, useState } from "react";
import { FlexC } from "@/components/containers/flex";
import { deleteOne, getLatest } from "@/lib/supabase";
import { Button } from "@/components/buttons/buttons";
import { Text } from "@/components/text/text";
import { TGuess } from "@/types/types";

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
      {/* {guess?.map((it, i) => (
        <GuessCard key={it.image_src! + i} card={it} isInView={true} />
      ))} */}
      <Button variant={"delete"} onClick={handleDelete}>
        DELETAR
      </Button>
    </FlexC>
  );
};
