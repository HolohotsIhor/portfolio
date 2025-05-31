import {
    LANG_STORAGE_KEY,
    LANG_UA,
    LanguageCodes,
    THEME_COLOR_DARK,
    THEME_STORAGE_KEY,
    ThemeCodes,
    THEME_COLOR_LIGHT
} from '../../helpers/constant.ts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
const savedLang = localStorage.getItem(LANG_STORAGE_KEY);

const isThemeCode = (value: any): value is ThemeCodes =>
    value === THEME_COLOR_DARK || value === THEME_COLOR_LIGHT;
const isLanguageCode = (value: any): value is LanguageCodes =>
    value === 'EN' || value === 'UA'; // или лучше: [LANG_EN, LANG_UA].includes(value)

interface IWebsite {
    theme: ThemeCodes;
    language: LanguageCodes;
}

const initialState: IWebsite = {
    theme: isThemeCode(savedTheme) ? savedTheme : THEME_COLOR_DARK,
    language: isLanguageCode(savedLang) ? savedLang : LANG_UA,
};

export const websiteSlice = createSlice({
    name: 'website',
    initialState,
    reducers: {
        changeLanguage(state, action: PayloadAction<LanguageCodes>) {
            state.language = action.payload;
            localStorage.setItem(LANG_STORAGE_KEY, action.payload)
        },
        changeTheme(state, action: PayloadAction<ThemeCodes>) {
            state.theme = action.payload;
            localStorage.setItem(THEME_STORAGE_KEY, action.payload)
        },
    }
})

export const websiteActions = websiteSlice.actions;
