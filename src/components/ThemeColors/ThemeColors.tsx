import styles from './ThemeColors.module.scss'
import { ACTIVE, THEME_COLOR_DARK, THEME_COLOR_LIGHT, THEME_STORAGE_KEY, ThemeCodes } from '../../helpers/constant';
import { useAppSelector } from '../../hooks/useRedux.ts';
import { useAction } from '../../hooks/useActions.ts';
import React from 'react';

export const ThemeColors = () => {
    const { themeColor } = useAppSelector(state => state.website);
    const { changeTheme } = useAction();

    const handleThemeChange = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = (e.target as HTMLElement).closest('[data-color]') as HTMLElement | null;
        const newTheme = target?.dataset.color as ThemeCodes | undefined;

        if (newTheme && (newTheme === THEME_COLOR_LIGHT || newTheme === THEME_COLOR_DARK)) {
            localStorage.setItem(THEME_STORAGE_KEY, newTheme);
            changeTheme(newTheme);
        }
    }

    return (
        <div
            className={styles.switcher}
            onClick={handleThemeChange}
        >
            {/*TODO: need adding this items in array and mapping result*/}
            <button
                data-color={THEME_COLOR_LIGHT}
                aria-label='Light theme'
                className={`${styles.item} ${themeColor === THEME_COLOR_LIGHT ? styles[ACTIVE] : ''}`}>
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
                data-color={THEME_COLOR_DARK}
                aria-label='Dark theme'
                className={`${styles.item} ${themeColor === THEME_COLOR_DARK ? styles[ACTIVE] : ''}`}>
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
