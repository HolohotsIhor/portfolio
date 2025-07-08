import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { WebsiteTranslations } from '../../models/translationsModels.ts';

export const getWebsiteTranslates = createAsyncThunk<WebsiteTranslations[]>(
    'website/getWebsiteTranslates',
    async () => {
        try {
            const response = await axios.get(`http://localhost:12345/api/translations`);
            return response.data; // как корректно обработать
        } catch (e) {
            throw e;
        }
    }
)
