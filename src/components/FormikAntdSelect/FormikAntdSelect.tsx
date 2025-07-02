import { useFormikContext } from 'formik';
import { Select } from 'antd';

const { Option } = Select;

type Option = {
    VALUE: string;
    NAME: string;
};

type FormValues = {
    name: string;
    company: string;
    email: string;
    location: string;
};

type Props = {
    name: keyof FormValues;
    options: Option[];
    placeholder: string;
}

export const FormikAntdSelect = ({ name, options, placeholder }: Props) => {
    const { values, setFieldValue } = useFormikContext<FormValues>();

    return (
        <>
            <Select
                value={values[name]}
                onChange={(value) => setFieldValue(name, value)}
                placeholder={placeholder}
                allowClear
                style={{ width: '100%' }}
            >
                {
                    options.map(opt => (
                        <Option
                            key={opt.VALUE}
                            value={opt.VALUE}
                        >
                            {opt.NAME}
                        </Option>
                ))}
            </Select>
        </>
    );
};
