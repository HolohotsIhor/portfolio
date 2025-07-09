import { SectionSubtitle } from '../../components/SectionSubtitle/SectionSubtitle';
import { useAppSelector } from '../../hooks/useRedux.ts';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle.tsx';

export const AboutMe = () => {
    const { language, languages } = useAppSelector(state => state.website);
    const currentDataLang = languages.find(item => item.lang === language)?.data;

    if (!currentDataLang) return null;

    return (
        <>
            <SectionTitle text={currentDataLang.ABOUT_ME.TITLE} />
            <SectionSubtitle text={currentDataLang.ABOUT_ME.SUBTITLE} />
        </>
    );
}
