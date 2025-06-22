import { useStore } from "@/lib/store";
import { useEffect, useState } from "react";
import { Card } from "@/types/types";
import { fetchFilteredCardsBff } from "../apis/fetchCards/fetchFilteredCardsBff";
import { wait } from "@/utils/wait";

export function useFetchCards() {
  const hitids = useStore((s) => s.hitids);
  const missids = useStore((s) => s.missids);
  const [loadingCards, setLoadingCards] = useState(false);
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    async function getCards() {
      setLoadingCards(true);
      const limit = cards.length ? 1 : 2;
      const currentIds = cards.map((it) => it.card_id);
      const data: Card[] = await fetchFilteredCardsBff("movie", limit, [...hitids, ...missids, ...currentIds]);
      await wait();
      setCards((old) => [...old, ...data].slice(-2));
      setLoadingCards(false);
    }
    getCards();
    //eslint-disable-next-line
  }, [hitids, missids]);

  return { loadingCards, cards };
}
