import React, { useContext } from 'react';
import styles from './ThemeColors.module.scss'
import { ThemeCode, ThemeContext } from '../../contexts/LanguageContext';
import { ACTIVE, THEME_COLOR_DARK, THEME_COLOR_LIGHT, THEME_STORAGE_KEY } from '../../helpers/constant';

export const ThemeColors = () => {
    const theme = useContext(ThemeContext);

    const handleThemeChange = (newTheme: ThemeCode) => {
        theme.change(newTheme);
        localStorage.setItem(THEME_STORAGE_KEY, newTheme);
    }

    return (
        <div className={styles.switcher}>
            <button
                onClick={() => handleThemeChange(THEME_COLOR_LIGHT)}
                aria-label='Light theme'
                className={`${styles.item} ${theme.value === THEME_COLOR_LIGHT && styles.isActive}`}>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    width='24'
                    height='24'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414M18.364 18.364l-1.414-1.414M6.05 6.05L4.636 7.464M12 8a4 4 0 100 8 4 4 0 000-8z'
                    />
                </svg>
            </button>

            <button
                onClick={() => handleThemeChange(THEME_COLOR_DARK)}
                aria-label='Dark theme'
                className={`${styles.item} ${theme.value === THEME_COLOR_DARK && styles.isActive}`}>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    width='24'
                    height='24'
                >
                    <path
                        d='M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z'
                    />
                </svg>
            </button>
        </div>
    );
}
