import React, { useContext } from 'react';
import { SectionSubtitle } from '../../components/SectionSubtitle/SectionSubtitle';
import { LanguageContext } from '../../contexts/LanguageContext';
import { LANG_EN } from '../../helpers/constant';
import { languages } from '../../assets/data/languages';

export const AboutMe = () => {
    const language = useContext(LanguageContext);

    return (
        <div>
            <h1>
                {language.value === LANG_EN
                    ? languages.EN.ABOUT_ME.TITLE
                    : languages.UA.ABOUT_ME.TITLE}
            </h1>
            <SectionSubtitle text={
                language.value === LANG_EN
                    ? languages.EN.ABOUT_ME.SUBTITLE
                    : languages.UA.ABOUT_ME.SUBTITLE
            } />
        </div>
    );
}
