import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Steps, Typography, Button } from 'antd';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux.ts';
import styles from './SkillsExperience.module.scss';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle.tsx';
import { TechList } from '../../components/TechList/TechList.tsx';
import { ExperienceModal } from '../../components/ExperienceModal/ExperienceModal.tsx';
import { deleteExperienceByLang } from '../../store/website/websiteThunk.ts';
import { logDOM } from '@testing-library/dom';

const { Text } = Typography;

export const SkillsExperience = () => {
    const dispatch = useAppDispatch();
    const { language, languages } = useAppSelector(state => state.website);
    const currentDataLang = languages.find(item => item.lang === language)?.data;

    if (!currentDataLang) return null;

    const handleDelete = (index: number) => {
        dispatch(deleteExperienceByLang({ lang: language, index }));
    };

    const handleEdit = (index: number) => {
        // todo: delete logic
        console.log(index);
    };

    const items = currentDataLang.SKILLS.EXPERIENCE.map((item, index) => ({
        title: item.TITLE || 'No item title...',
        description: item.DESCRIPTION ? (
            <div className={styles.stepContent}>
                <div dangerouslySetInnerHTML={{ __html: item.DESCRIPTION }} />
                <div className={styles.buttonGroup}>
                    <Button
                        type="text"
                        icon={<EditOutlined />}
                        onClick={() => handleEdit(index)}
                        size="small"
                    />
                    <Button
                        type="text"
                        icon={<DeleteOutlined />}
                        onClick={() => handleDelete(index)}
                        danger
                        size="small"
                    />
                </div>
            </div>
        ) : (
            <div>No item description...</div>
        ),
    }));

    return (
        <>
            <SectionTitle text={currentDataLang.SKILLS.TITLE} />
            <div className={styles.container}>
                <TechList />
                {items.length > 0 ? (
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
                )}
            </div>
        </>
    );
};
