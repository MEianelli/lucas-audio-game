import { fetchFilteredCards } from '@/lib/apis/fetchCards/fetchFilteredCards';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const { category, limit, excludeIds } = req.body;

        if (!category || !limit) {
            return res.status(400).json({
                message: 'Missing required parameters: category and limit'
            });
        }

        const cards = await fetchFilteredCards(category, limit, excludeIds);

        return res.status(200).json(cards);
    } catch (error: unknown) {
        console.error('Error fetching filtered cards:', error);
        return res.status(500).json({
            message: 'Internal server error',
            error: (error as any)?.message
        });
    }
}