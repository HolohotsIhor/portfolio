import { languages } from '../../assets/data/languages';
import { useAppSelector } from '../../hooks/useRedux.ts';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle.tsx';

export const SkillsExperience = () => {
    const { language } = useAppSelector(state => state.website);

    return (
        <>
            <SectionTitle text={languages[language].SKILLS.TITLE} />
        </>
    );
}
