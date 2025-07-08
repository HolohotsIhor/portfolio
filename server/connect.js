import { MongoClient, ServerApiVersion  } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config({ path: './config.env' });

const uri = process.env.MONGO_URI;
let database;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

export const mongoDB = {
    connectToServer: async () => {
        try {
            await client.connect();
            database = client.db('portfolioApp');
            console.log('Connected to MongoDB');
        } catch (err) {
            console.error('MongoDB connection failed:', err);
            throw err;
        }
    },
    getDb: () => {
        if (!database) {
            throw new Error('MongoDB not connected');
        }
        return database;
    },
};
