import { supabase } from "@/lib/supabase";
import { Card, CardDTO } from "@/types/types";
import { getRndArrElements, shuffleArray } from "@/utils/random";
import { PostgrestError } from "@supabase/supabase-js";
import * as unit from "@/utils/unitTest";

export const fetchFilteredCardsSsr = async (
  category: string,
  limit: number,
  excludeIds: number[] = []
): Promise<Card[]> => {
  const { data, error }: { data: CardDTO[] | null; error: PostgrestError | null } = await supabase.rpc(
    "get_filtered_cards",
    {
      category_filter: category,
      num_cards: limit,
      ids_to_exclude: excludeIds,
    }
  );

  if (error || !data) {
    console.error("Error fetching cards:", error);
    return [];
  }

  const parsedData = data.map((card) => {
    const rndWrongs = getRndArrElements(card.wrongs);
    const options = shuffleArray([...rndWrongs, card.title]);
    const titleIndex = options.indexOf(card.title);
    let test = unit.test1(titleIndex);
    test = unit.test2(test);
    test = unit.test3(test);
    test = unit.test4(test);
    const archive = `${test}`;
    return {
      media_id: card.media_id,
      card_id: card.card_id,
      options,
      image_src: card.image_src,
      audio_src: card.audio_src,
      archive,
    };
  });

  return parsedData;
};
