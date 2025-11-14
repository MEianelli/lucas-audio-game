import { useStore } from "@/lib/store";
import { useEffect, useState } from "react";
import { Card } from "@/types/types";
import { wait } from "@/utils/wait";
import { fetchCardBff } from "../apis/fetchCards/fetchCardBff";

export function useFetchCard(loading: boolean, id: number) {
  const hitids = useStore((s) => s.hitids);
  const missids = useStore((s) => s.missids);

  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    if (loading) return;
    async function getCards() {
      const data: Card[] = await fetchCardBff(id);
      await wait();
      setCards(() => [...data, ...data].slice(-2));
    }
    getCards();
    //eslint-disable-next-line
  }, [hitids, missids, loading]);

  return { cards };
}
