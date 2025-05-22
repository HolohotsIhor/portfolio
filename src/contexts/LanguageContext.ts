import { createContext } from 'react';

interface LanguageContextType {
    value: string;
    change: (lang: string) => void;
}

interface ThemeColorContextType {
    value: string;
    change: (lang: string) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
    value: 'en',
    change: () => {},
});

export const ThemeContext = createContext<ThemeColorContextType >({
    value: 'dark',
    change: () => {},
})
