import { mongoDB } from './connect.js';
import { languages } from '../src/assets/data/languages.js';

(async () => {
    try {
        await mongoDB.connectToServer();
        const db = mongoDB.getDb();

        // Очистим коллекцию перед вставкой (если нужно)
        await db.collection('translations').deleteMany({});

        // Преобразуем объект в массив документов для вставки
        const documents = Object.entries(languages).map(([lang, data]) => ({
            lang,
            data,
        }));

        // Вставим в коллекцию "translations"
        const result = await db.collection('translations').insertMany(documents);
        console.log(`Inserted ${result.insertedCount} translations.`);

        process.exit();
    } catch (err) {
        console.error('Error seeding translations:', err);
        process.exit(1);
    }
})();
