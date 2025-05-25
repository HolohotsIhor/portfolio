import React, { useContext } from 'react';
import { LanguageCode, LanguageContext } from '../../contexts/LanguageContext';
import styles from './LanguageToggler.module.scss';
import { LANG_EN, LANG_UA } from '../../helpers/constant.ts';
import { LANG_STORAGE_KEY } from '../../helpers/constant';

export const LanguageToggler = () => {
    const language = useContext(LanguageContext);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const languageValue = event.target.value as LanguageCode;
        language.change(languageValue);
        localStorage.setItem(LANG_STORAGE_KEY, languageValue);
    }

    return (
        <select
            onChange={handleChange}
            value={language.value}
            className={styles.select}
        >
            <option value={LANG_EN} className={`${styles.option} option-${LANG_EN}`}>{LANG_EN}</option>
            <option value={LANG_UA} className={`${styles.option} option-${LANG_UA}`}>{LANG_UA}</option>
        </select>
    );
}
