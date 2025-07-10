import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { WebsiteTranslations } from '../../models/translationsModels.ts';

interface ExperienceItem {
    TITLE: string;
    DESCRIPTION: string;
}

interface ServerResponse {
    success: boolean;
    modifiedCount: number
}

export const getWebsiteTranslates = createAsyncThunk<WebsiteTranslations[]>(
    'website/getWebsiteTranslates',
    async () => {
        try {
            const { data } = await axios.get(`http://localhost:12345/api/translations`);
            return data;
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
            const { data } = await axios.post<ServerResponse>(
                'http://localhost:12345/api/translations',
                { lang, newExperience: experience }
            );
            return data;
        } catch (e: unknown) {
            if (axios.isAxiosError(e)) {
                return thunkAPI.rejectWithValue({
                    message: e.response?.data?.message || 'Server error',
                });
            }
            return thunkAPI.rejectWithValue({ message: 'Unexpected error' });
        }
    }
);

export const deleteExperienceByLang = createAsyncThunk<
    { success: boolean; modifiedCount: number },
    { lang: string; index: number },
    { rejectValue: { message: string } }
>(
    'translations/deleteExperienceByLang',
    async ({ lang, index }, thunkAPI) => {
        try {
            const { data } = await axios.delete<ServerResponse>(
                'http://localhost:12345/api/translations',
                {
                    data: { lang, index }
                }
            )
            return data;
        } catch (e: unknown) {
            if (axios.isAxiosError(e)) {
                return thunkAPI.rejectWithValue({
                    message: e.response?.data?.message || 'Server error',
                });
            }
            return thunkAPI.rejectWithValue({ message: 'Unexpected error' });
        }
    }
)

export const updateExperienceByLang = createAsyncThunk<
    { success: boolean; modifiedCount: number },
    { lang: string; index: number; newItem: ExperienceItem  },
    { rejectValue: { message: string } }
>(
    'translations/updateExperienceByLang',
    async ({ lang, index, newItem }, thunkAPI) => {
        try {
            const { data } = await axios.put<ServerResponse>(
                'http://localhost:12345/api/translations',
                { lang, index, newItem }
            )
            return data;
        } catch (e: unknown) {
            if (axios.isAxiosError(e)) {
                return thunkAPI.rejectWithValue({
                    message: e.response?.data?.message || 'Server error',
                });
            }
            return thunkAPI.rejectWithValue({ message: 'Unexpected error' });
        }
    }
)
