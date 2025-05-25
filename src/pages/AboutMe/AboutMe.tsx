import React, { useContext } from 'react';
import { SectionSubtitle } from '../../components/SectionSubtitle/SectionSubtitle';
import { LanguageContext } from '../../contexts/LanguageContext';
import { LANG_EN } from '../../helpers/constant';
import { languages } from '../../assets/data/languages';

export const AboutMe = () => {
    const language = useContext(LanguageContext);

    return (
        <div>
            <h1>{languages[language.value].ABOUT_ME.TITLE}</h1>
            <SectionSubtitle text={languages[language.value].ABOUT_ME.SUBTITLE} />
        </div>
    );
}
