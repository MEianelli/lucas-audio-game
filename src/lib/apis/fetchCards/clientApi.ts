export const fetchFilteredCards = async (category: "movie" | "music", limit: number, excludeIds: number[] = []) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/data/fetch-cards`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                category,
                limit,
                excludeIds
            }),
        });

        if (!response.ok) {
            console.log('Network response was not ok');
            return [];
        }

        return await response.json();
    } catch (error) {
        console.log('Error fetching cards:', error);
        return [];
    }
};


