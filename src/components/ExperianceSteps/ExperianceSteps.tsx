import styles from './ExperianceSteps.module.scss';
import { Button, Form, FormProps, Input, Modal, Steps, Typography } from 'antd';
import { ExperienceModal } from '../ExperienceModal/ExperienceModal.tsx';
import { deleteExperienceByLang, updateExperienceByLang } from '../../store/website/websiteThunk.ts';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux.ts';
import { useState } from 'react';
import { FieldType } from '../../models/translationsModels.ts';

const { Text } = Typography;

export const ExperianceSteps = () => {
    const [ form] = Form.useForm();
    const [ currentIndex, setCurrentIndex] = useState(0);
    const { language, languages } = useAppSelector(state => state.website);
    const [modalOpen, setModalOpen] = useState(false);
    const currentDataLang = languages.find(item => item.lang === language)?.data;
    const dispatch = useAppDispatch();

    const handleDelete = (index: number) => {
        dispatch(deleteExperienceByLang({ lang: language, index }));
    };

    const handleEdit = (index: number) => {
        const currentDataLang = languages.find(item => item.lang === language)?.data;

        if (!currentDataLang) {
            console.error('Data for current language not found');
            return;
        }

        const targetItem = currentDataLang.SKILLS.EXPERIENCE[index];

        setModalOpen(true);
        setCurrentIndex(index);
        form.setFieldsValue({
            title: targetItem.TITLE,
            description: targetItem.DESCRIPTION,
        });
    };

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        dispatch(updateExperienceByLang({
            lang: language,
            index: currentIndex,
            newItem: {
                TITLE: values.title,
                DESCRIPTION: values.description,
            },
        }));
        setModalOpen(false);
        form.resetFields();
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const items = currentDataLang
        ? currentDataLang.SKILLS.EXPERIENCE.map((item, index) => ({
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
        }))
        : [];

    return (
        <>
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

            <Modal
                title='Please update content for experience item'
                centered
                open={modalOpen}
                onCancel={() => setModalOpen(false)}
                width={600}
                footer={null}
            >
                <Form
                    name="basic"
                    form={form}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>
                        label="Experience title"
                        name="title"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Experience description"
                        name="description"
                        rules={[{ required: true, message: 'Please input text for experience' }]}
                    >
                        <Input.TextArea />
                    </Form.Item>

                    <Form.Item label={null}>
                        <Button type="primary" htmlType="submit">
                            Update item
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
}
