import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { LANG_EN } from '../../helpers/constant';
import { languages } from '../../assets/data/languages';

export const SkillsExperience = () => {
    const languageContext = useContext(LanguageContext);

    return (
        <div>
            <h1>
                {
                    languageContext.value === LANG_EN
                        ? languages.EN.SKILLS.TITLE
                        : languages.UA.SKILLS.TITLE
                }
            </h1>
        </div>
    );
}
