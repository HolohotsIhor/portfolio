import { languages } from '../../assets/data/languages';
import { useTypedSelector } from '../../hooks/useRedux.ts';

export const SkillsExperience = () => {
    const { language } = useTypedSelector(state => state.website);

    return (
        <>
            <h1>{languages[language].SKILLS.TITLE}</h1>
        </>
    );
}
