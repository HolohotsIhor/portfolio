import React from 'react';
import styles from './LanguageToggler.module.scss';
import { LANG_EN, LANG_UA, LanguageCodes } from '../../helpers/constant.ts';
import { useAction } from '../../hooks/useActions.ts';
import { useTypedSelector } from '../../hooks/useRedux.ts';

export const LanguageToggler = () => {
    const { language } = useTypedSelector(state => state.website);
    const { changeLanguage } = useAction();

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const languageValue = event.target.value as LanguageCodes;
        changeLanguage(languageValue);
    }

    return (
        <select
            onChange={handleChange}
            value={language}
            className={styles.select}
        >
            <option value={LANG_EN} className={`${styles.option} option-${LANG_EN}`}>{LANG_EN}</option>
            <option value={LANG_UA} className={`${styles.option} option-${LANG_UA}`}>{LANG_UA}</option>
        </select>
    );
}
