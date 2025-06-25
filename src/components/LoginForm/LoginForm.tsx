import { useState } from 'react';
import { useTypedDispatch } from '../../hooks/useRedux.ts';
import { useAction } from '../../hooks/useActions.ts';
import { Alert, Button, Checkbox, Form, FormProps, Input } from 'antd';
import { SectionTitle } from '../SectionTitle/SectionTitle.tsx';

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

export const LoginForm = () => {
    const [error, setError] = useState('');
    const dispatch = useTypedDispatch();
    const {setIsAuth} = useAction();

    const handleSuccess: FormProps<FieldType>['onFinish'] = (values) => {
        const username = values.username;
        const password = values.password;

        // Auth logic
        (username === 'admin' && password === 'admin')
            ? dispatch(setIsAuth(true))
            : setError('Invalid email or password');
    };

    const onFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
                <SectionTitle text='Log in' />
                { error && <Alert showIcon message={error} type='error' /> }
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={handleSuccess}
                    onFinishFailed={onFailed}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item<FieldType> name="remember" valuePropName="checked" label={null}>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item label={null}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
        </>
    );
}
