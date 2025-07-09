import { Steps, Typography } from 'antd';
import { useAppSelector } from '../../hooks/useRedux.ts';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle.tsx';
import { TechList } from '../../components/TechList/TechList.tsx';
import styles from './SkillsExperience.module.scss';
import { ExperienceModal } from '../../components/ExperienceModal/ExperienceModal.tsx';

const { Text } = Typography;

export const SkillsExperience = () => {
    const { language, languages } = useAppSelector(state => state.website);
    const currentDataLang = languages.find(item => item.lang === language)?.data;

    if (!currentDataLang) return null;

    const items = currentDataLang.SKILLS.EXPERIENCE.map(item => ({
        title: item.TITLE,
        description: <div dangerouslySetInnerHTML={{ __html: item.DESCRIPTION }} />
    }));

    return (
        <>
            <SectionTitle text={currentDataLang.SKILLS.TITLE}/>

            <div className={styles.container}>
                <TechList />
                {
                    items ? (
                        <div>
                            <Steps
                                direction="vertical"
                                current={items.length}
                                items={items}
                                className={styles.steps}
                            />
                            <ExperienceModal />
                        </div>
                    ) : (
                        <Text type="danger">No experience data...</Text>
                    )
                }
            </div>
        </>
    );
}
