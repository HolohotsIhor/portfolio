import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { languages } from '../../assets/data/languages';

export const Github = () => {
    const language = useContext(LanguageContext);

    return (
        <div>
            <h1>{languages[language.value].GITHUB.TITLE}</h1>
        </div>
    );
}
