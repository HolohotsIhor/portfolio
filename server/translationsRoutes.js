import express from 'express';
import { mongoDB } from './connect.js';
const COLLECTION_NAME = 'translations';
const translationsRoutes = express.Router();

translationsRoutes.route('/translations')
    // === GET TRANSLATIONS ===
    .get(async (req, res) => {
        try {
            const db = mongoDB.getDb();
            const data = await db.collection(COLLECTION_NAME).find({}).toArray();

            if (data.length > 0) {
                res.json(data);
            } else {
                res.status(404).json({ message: 'No translations found.' });
            }
        } catch (e) {
            console.error('Failed to get content:', e);
            res.status(500).json({ error: 'Internal server error' });
        }
    })

    // === ADD ONE EXPERIENCE ===
    .post(async (req, res) => {
        try {
            const db = mongoDB.getDb();
            const { lang, newExperience } = req.body;

            const result = await db.collection(COLLECTION_NAME).updateOne(
                { lang },
                {
                    $push: {
                        "data.SKILLS.EXPERIENCE": {
                            $each: [newExperience],
                            $position: 0,
                        },
                    },
                }
            );

            res.status(200).json({ success: true, modifiedCount: result.modifiedCount });
        } catch (err) {
            console.error('Failed to add experience:', err);
            res.status(500).json({ success: false, message: 'Server error' });
        }
    }
);

export default translationsRoutes;
