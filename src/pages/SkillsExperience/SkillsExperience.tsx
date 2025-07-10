import { useAppSelector } from '../../hooks/useRedux.ts';
import styles from './SkillsExperience.module.scss';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle.tsx';
import { TechList } from '../../components/TechList/TechList.tsx';
import { ExperianceSteps } from '../../components/ExperianceSteps/ExperianceSteps.tsx';

export const SkillsExperience = () => {
    const { language, languages } = useAppSelector(state => state.website);
    const currentDataLang = languages.find(item => item.lang === language)?.data;

    if (!currentDataLang) return null;

    return (
        <>
            <SectionTitle text={currentDataLang.SKILLS.TITLE} />
            <div className={styles.container}>
                <TechList />
                <ExperianceSteps />
            </div>
        </>
    );
};
