import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import styles from './LanguageToggler.module.scss';
import { LANG_EN, LANG_UA } from '../../helpers/constant.ts';

export const LanguageToggler = () => {
    const language = useContext(LanguageContext);

    const handleChange = event => {
        const languageValue = event.target.value;
        language.change(languageValue);
    }

    return (
        <select
            onChange={handleChange}
            className={styles.select}
        >
            <option value={LANG_EN} className={[`${styles.option}, option-${LANG_EN}`]}>{LANG_EN}</option>
            <option value={LANG_UA} className={[`${styles.option}, option-${LANG_UA}`]}>{LANG_UA}</option>
        </select>
    );
}
