import { Button, Form, FormProps, Input, Modal } from 'antd';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux.ts';
import { addExperienceByLang } from '../../store/website/websiteThunk.ts';
import { FieldType } from '../../models/translationsModels.ts';

export const ExperienceModal = () => {
    const [ form] = Form.useForm();
    const [modalOpen, setModalOpen] = useState(false);
    const { language } = useAppSelector(state => state.website);
    const dispatch = useAppDispatch();

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        dispatch(addExperienceByLang({
            lang: language,
            experience: {
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

    return (
        <>
            <Button style={{ marginTop: '30px' }} type='primary' onClick={() => setModalOpen(true)}>
                Add experience
            </Button>

            <Modal
                title='Please input content'
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
                            Add item
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
}
