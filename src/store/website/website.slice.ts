import {
    LANG_STORAGE_KEY,
    LANG_UA,
    LanguageCodes,
    THEME_COLOR_DARK,
    THEME_STORAGE_KEY,
    ThemeCodes,
    THEME_COLOR_LIGHT, LANG_EN, IS_AUTH_STORAGE_KEY
} from '../../helpers/constant.ts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getWebsiteTranslates } from './websiteThunk.ts';
import { WebsiteTranslations } from '../../models/translationsModels.ts';

const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
const savedLang = localStorage.getItem(LANG_STORAGE_KEY);
const savedIsAuth = localStorage.getItem(IS_AUTH_STORAGE_KEY);

const isThemeCode = (value: any): value is ThemeCodes =>
    value === THEME_COLOR_DARK || value === THEME_COLOR_LIGHT;
const isLanguageCode = (value: any): value is LanguageCodes =>
    [LANG_EN, LANG_UA].includes(value);

interface IWebsite {
    themeColor: ThemeCodes;
    language: LanguageCodes;
    isAuth: boolean;
    loading: boolean;
    error: string;
    languages: WebsiteTranslations[];
}

const initialState: IWebsite = {
    themeColor: isThemeCode(savedTheme) ? savedTheme : THEME_COLOR_LIGHT,
    language: isLanguageCode(savedLang) ? savedLang : LANG_UA,
    isAuth: savedIsAuth === 'true',
    loading: false,
    error: '',
    languages: [],
};

export const websiteSlice = createSlice({
    name: 'website',
    initialState,
    reducers: {
        changeLanguage(state, action: PayloadAction<LanguageCodes>) {
            state.language = action.payload;
        },
        changeTheme(state, action: PayloadAction<ThemeCodes>) {
            state.themeColor = action.payload;
        },
        setIsAuth(state, action: PayloadAction<boolean>) {
            state.isAuth = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getWebsiteTranslates.pending, (state) => {
                state.loading = true;
            })
            .addCase(getWebsiteTranslates.fulfilled, (state, action: PayloadAction<WebsiteTranslations[]>) => {
                state.loading = false;
                state.languages = action.payload;
            })
            .addCase(getWebsiteTranslates.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch repos';
            })
    }
})

export const websiteActions = websiteSlice.actions;
export const websiteReducer = websiteSlice.reducer;
