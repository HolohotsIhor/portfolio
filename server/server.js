import { mongoDB } from './connect.js';
import translationsRoutes from './translationsRoutes.js';
import express from 'express';
import cors from 'cors';

const PORT = 12345;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', translationsRoutes);

mongoDB.connectToServer().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}).catch((err) => {
    console.error('Failed to start server due to MongoDB error:', err);
    process.exit(1);
});
