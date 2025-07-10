import express from 'express';
import { mongoDB } from './connect.js';

const SERVER_ERROR = 'Server error';
const INVALID_REQUEST = 'Invalid request payload';
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
            res.status(500).json({ error: SERVER_ERROR });
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
                        'data.SKILLS.EXPERIENCE': {
                            $each: [newExperience],
                            $position: 0,
                        },
                    },
                }
            );

            res.status(200).json({ success: true, modifiedCount: result.modifiedCount });
        } catch (e) {
            console.error('Failed to add experience:', e);
            res.status(500).json({ success: false, message: SERVER_ERROR });
        }
    })

    // === DELETE ONE EXPERIENCE ===
    .delete(async (req, res) => {
        try {
            const db = mongoDB.getDb();

            const { lang, index } = req.body;

            if (typeof lang !== 'string' || typeof index !== 'number') {
                return res.status(400).json({ success: false, message: INVALID_REQUEST });
            }

            const doc = await db.collection(COLLECTION_NAME).findOne({ lang });

            if (!doc || !Array.isArray(doc.data?.SKILLS?.EXPERIENCE)) {
                return res.status(404).json({ success: false, message: 'Experience array not found' });
            }

            const experienceArray = doc.data.SKILLS.EXPERIENCE;

            if (index < 0 || index >= experienceArray.length) {
                return res.status(400).json({ success: false, message: 'Index out of bounds' });
            }
            const updatedExperience = [...experienceArray];
            updatedExperience.splice(index, 1);

            const result = await db.collection(COLLECTION_NAME).updateOne(
                { lang },
                {
                    $set: {
                        'data.SKILLS.EXPERIENCE': updatedExperience,
                    },
                }
            );

            return res.status(200).json({
                success: true,
                modifiedCount: result.modifiedCount,
            });

        } catch (e) {
            console.error('Failed to delete experience:', e);
            return res.status(500).json({
                success: false,
                message: SERVER_ERROR,
            });
        }
    })

    // === UPDATE ONE EXPERIENCE ===
    .put(async (req, res) => {
        try {
            const db = mongoDB.getDb();
            const { lang, index, newItem } = req.body;

            if (
                typeof lang !== 'string' ||
                typeof index !== 'number' ||
                typeof newItem !== 'object' ||
                newItem === null
            ) {
                return res.status(400).json({ success: false, message: INVALID_REQUEST });
            }

            const doc = await db.collection(COLLECTION_NAME).findOne({ lang });

            if (!doc || !Array.isArray(doc.data?.SKILLS?.EXPERIENCE)) {
                return res.status(404).json({ success: false, message: 'Experience array not found' });
            }

            const experienceArray = doc.data.SKILLS.EXPERIENCE;

            if (index < 0 || index >= experienceArray.length) {
                return res.status(400).json({ success: false, message: 'Index out of bounds' });
            }

            const updatedExperience = [...experienceArray];
            updatedExperience[index] = newItem;

            const result = db.collection(COLLECTION_NAME).updateOne(
                { lang },
                {
                    $set: {
                        'data.SKILLS.EXPERIENCE': updatedExperience,
                    },
                }
            );

            return res.status(200).json({
                success: true,
                modifiedCount: result.modifiedCount,
            });
        } catch (e) {
            console.error('Failed to update experience:', e);
            return res.status(500).json({
                success: false,
                message: SERVER_ERROR,
            });
        }
    }
);

export default translationsRoutes;
