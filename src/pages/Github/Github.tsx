import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { LANG_EN } from '../../helpers/constant';
import { languages } from '../../assets/data/languages';

export const Github = () => {
    const languageContext = useContext(LanguageContext);

    return (
        <div>
            <h1>
                {
                    languageContext.value === LANG_EN
                        ? languages.EN.GITHUB.TITLE
                        : languages.UA.GITHUB.TITLE
                }
            </h1>
        </div>
    );
}
