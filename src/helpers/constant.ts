import { languages } from '../assets/data/languages.ts';

export const DATA_USERS = 'usersData';
export const LANG_EN = 'EN';
export const LANG_UA = 'UA';
export const THEME_COLOR_DARK = 'themeDark';
export const THEME_COLOR_LIGHT = 'themeLight';
export const LANG_STORAGE_KEY = 'clientLang';
export const THEME_STORAGE_KEY = 'clientTheme';
export const ACTIVE = 'isActive';

export type LanguageCodes = keyof typeof languages;
export type ThemeCodes = typeof THEME_COLOR_DARK | typeof THEME_COLOR_LIGHT;
