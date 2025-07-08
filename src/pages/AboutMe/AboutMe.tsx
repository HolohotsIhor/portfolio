import { SectionSubtitle } from '../../components/SectionSubtitle/SectionSubtitle';
import { languages } from '../../assets/data/languages';
import { useAppSelector } from '../../hooks/useRedux.ts';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle.tsx';

export const AboutMe = () => {
    const { language } = useAppSelector(state => state.website);

    return (
        <>
            <SectionTitle text={languages[language].ABOUT_ME.TITLE} />
            <SectionSubtitle text={languages[language].ABOUT_ME.SUBTITLE} />
        </>
    );
}
