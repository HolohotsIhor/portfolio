import express from 'express';
import { mongoDB } from './connect.js';

const translationsRoutes = express.Router();

// GET /api/content
translationsRoutes.route('/translations').get(async (req, res) => {
    try {
        const db = mongoDB.getDb();
        const data = await db.collection('translations').find({}).toArray();

        if (data.length > 0) {
            res.json(data);
        } else {
            res.status(404).json({ message: 'No translations found.' });
        }
    } catch (e) {
        console.error('Failed to get content:', e);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default translationsRoutes;
