import { languages } from '../../assets/data/languages';
import { useTypedSelector } from '../../hooks/useRedux.ts';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle.tsx';

export const SkillsExperience = () => {
    const { language } = useTypedSelector(state => state.website);

    return (
        <>
            <SectionTitle text={languages[language].SKILLS.TITLE} />
        </>
    );
}
