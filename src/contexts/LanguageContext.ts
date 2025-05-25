import { createContext } from 'react';
import { languages } from '../assets/data/languages';
import { LANG_EN, THEME_COLOR_DARK, THEME_COLOR_LIGHT } from '../helpers/constant';

export type LanguageCode = keyof typeof languages;
export type ThemeCode = typeof THEME_COLOR_DARK | typeof THEME_COLOR_LIGHT; // ✅

interface LanguageContextType {
    value: LanguageCode;
    change: (lang: LanguageCode) => void;
}

interface ThemeColorContextType {
    value: ThemeCode;
    change: (lang: ThemeCode) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
    value: LANG_EN,
    change: () => {},
});

export const ThemeContext = createContext<ThemeColorContextType >({
    value: THEME_COLOR_DARK,
    change: () => {},
})
