import { supabase } from "@/lib/supabase";
import { Card } from "@/types/types";


export const fetchFilteredCards = async (category: string, limit: number, excludeIds: number[] = []): Promise<Card[]> => {
    const { data, error } = await supabase
        .rpc('get_filtered_cards', {
            category_filter: category,
            num_cards: limit,
            ids_to_exclude: excludeIds
        })

    if (error) {
        console.error('Error fetching cards:', error);
        return [];
    }

    return data;
}