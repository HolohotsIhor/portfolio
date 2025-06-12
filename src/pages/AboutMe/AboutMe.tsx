import { SectionSubtitle } from '../../components/SectionSubtitle/SectionSubtitle';
import { languages } from '../../assets/data/languages';
import { useTypedSelector } from '../../hooks/useRedux.ts';

export const AboutMe = () => {
    const { language } = useTypedSelector(state => state.website);

    return (
        <>
            <h1>{languages[language].ABOUT_ME.TITLE}</h1>
            <SectionSubtitle text={languages[language].ABOUT_ME.SUBTITLE} />
        </>
    );
}
