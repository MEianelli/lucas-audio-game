import { supabase } from "@/lib/supabase";
import { Card, CardDTO } from "@/types/types";
import { getRndArrElements, shuffleArray } from "@/utils/random";
import { PostgrestError } from "@supabase/supabase-js";

export const fetchFilteredCards = async (
  category: string,
  limit: number,
  excludeIds: number[] = []
): Promise<Card[]> => {
  const {
    data,
    error,
  }: { data: CardDTO[] | null; error: PostgrestError | null } =
    await supabase.rpc("get_filtered_cards", {
      category_filter: category,
      num_cards: limit,
      ids_to_exclude: excludeIds,
    });

  if (error || !data) {
    console.error("Error fetching cards:", error);
    return [];
  }

  const parsedData = data.map((card) => {
    const rndWrongs = getRndArrElements(card.wrongs);
    const options = shuffleArray([...rndWrongs, card.title]);
    return {
      media_id: card.media_id,
      title: card.title,
      card_id: card.card_id,
      options,
      image_src: card.image_src,
      audio_src: card.audio_src,
    };
  });

  return parsedData;
};
