import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { languages } from '../../assets/data/languages';

export const ErrorPage = () => {
    const language = useContext(LanguageContext);

    return (
        <div>
            <h1>{languages[language.value].ERROR_PAGE.TITLE}</h1>
        </div>
    );
}
