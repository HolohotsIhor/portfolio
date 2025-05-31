import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { LANG_STORAGE_KEY, LANG_UA, THEME_COLOR_DARK, THEME_STORAGE_KEY } from '../../helpers/constant.ts';

const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
const savedLang = localStorage.getItem(LANG_STORAGE_KEY);

interface IWebsite {
    theme: string;
    language: string;
}

const initialState: IWebsite = {
    theme: savedTheme || THEME_COLOR_DARK,
    language:  savedLang || LANG_UA,
}

export const websiteSlice = createSlice({
    name: 'website',
    initialState,
    reducers: {
        changeLanguage(state, action: PayloadAction<string>) {
            state.language = action.payload;
            localStorage.setItem(LANG_STORAGE_KEY, action.payload)
        },
        changeTheme(state, action: PayloadAction<string>) {
            state.theme = action.payload;
            localStorage.setItem(THEME_STORAGE_KEY, action.payload)
        },
    }
})

export const websiteActions = websiteSlice.actions;
