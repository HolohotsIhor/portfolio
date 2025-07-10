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
import { addExperienceByLang, deleteExperienceByLang, getWebsiteTranslates } from './websiteThunk.ts';
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
    error: string | null;
    languages: WebsiteTranslations[];
}

const initialState: IWebsite = {
    themeColor: isThemeCode(savedTheme) ? savedTheme : THEME_COLOR_LIGHT,
    language: isLanguageCode(savedLang) ? savedLang : LANG_UA,
    isAuth: savedIsAuth === 'true',
    loading: false,
    error: null,
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
                state.error = null;
            })
            .addCase(getWebsiteTranslates.fulfilled, (state, action: PayloadAction<WebsiteTranslations[]>) => {
                state.loading = false;
                state.languages = action.payload;
            })
            .addCase(getWebsiteTranslates.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch repos';
            })

            // === ADD EXPERIENCE BY LANG ===
            .addCase(addExperienceByLang.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addExperienceByLang.fulfilled, (state, action) => {
                const { lang, experience } = action.meta.arg;
                const langObj = state.languages.find(item => item.lang === lang);

                state.loading = false;

                if (langObj) {
                    langObj.data.SKILLS.EXPERIENCE.unshift(experience);
                }
            })
            .addCase(addExperienceByLang.rejected, (state, action) => {
                const payload = action.payload as { message: string } | undefined;
                state.loading = false;

                state.error =
                    payload?.message || action.error.message || 'Failed to add experience';
            })

            // === REMOVE EXPERIENCE BY LANG AND INDEX ===
            .addCase(deleteExperienceByLang.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteExperienceByLang.fulfilled, (state, action) => {
                const { lang, index } = action.meta.arg;
                const langObj = state.languages.find((item) => item.lang === lang);

                state.loading = false;

                if (!langObj) return;

                const experienceList = langObj.data.SKILLS.EXPERIENCE;

                if (index >= 0 && index < experienceList.length) {
                    experienceList.splice(index, 1);
                }
            });
    },
})

export const websiteActions = websiteSlice.actions;
export const websiteReducer = websiteSlice.reducer;
