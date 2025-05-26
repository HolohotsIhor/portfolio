import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { languages } from '../../assets/data/languages';

export const SkillsExperience = () => {
    const language = useContext(LanguageContext);

    return (
        <div>
            <h1>{languages[language.value].SKILLS.TITLE}</h1>
        </div>
    );
}
