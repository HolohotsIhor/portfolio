import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { WebsiteTranslations } from '../../models/translationsModels.ts';

interface ExperienceItem {
    TITLE: string;
    DESCRIPTION: string;
}

export const getWebsiteTranslates = createAsyncThunk<WebsiteTranslations[]>(
    'website/getWebsiteTranslates',
    async () => {
        try {
            const response = await axios.get(`http://localhost:12345/api/translations`);
            return response.data; // как корректно обработать
        } catch (e) {
            throw new Error('Cannot get translations: ' + e);
        }
    }
)

export const addExperienceByLang = createAsyncThunk<
    { success: boolean; modifiedCount: number },
    { lang: string; experience: ExperienceItem },
    { rejectValue: { message: string } }
>(
    'translations/addExperienceByLang',
    async ({ lang, experience }, thunkAPI) => {
        try {
            const { data } = await axios.post<{ success: boolean; modifiedCount: number }>(
                'http://localhost:12345/api/translations',
                { lang, newExperience: experience }
            );
            return data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue({
                message: error.response?.data?.message || 'Server error',
            });
        }
    }
);

