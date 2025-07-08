import { ErrorMessage, Field, Form, Formik } from 'formik';
import styles from './ContactForm.module.scss';
import * as Yup from 'yup';
import { languages } from '../../assets/data/languages';
import { useAppSelector } from '../../hooks/useRedux.ts';
import { Button, Input } from 'antd';
import { FormikAntdSelect } from '../FormikAntdSelect/FormikAntdSelect.tsx';

type FormValues = {
    name: string;
    company: string;
    email: string;
    location: string | undefined;
};

export const ContactForm = () => {
    const { language } = useAppSelector(state => state.website);

    const initialValues: FormValues = {
        name: '',
        company: '',
        email: '',
        location: undefined,
    };

    const validationSchema = Yup.object({
        name: Yup.string()
            .matches(/^[A-Za-zА-Яа-яЁё\s]+$/, languages[language].FORM_ERRORS.NAME.ALLOWD)
            .min(2, languages[language].FORM_ERRORS.NAME.MIN)
            .max(30, languages[language].FORM_ERRORS.NAME.MAX)
            .required(languages[language].FORM_ERRORS.NAME.REQUIRED),

        company: Yup.string()
            .matches(/^[\w\s\.\-]+$/, languages[language].FORM_ERRORS.COMPANY.ALLOWD)
            .min(2, languages[language].FORM_ERRORS.COMPANY.MIN)
            .max(50, languages[language].FORM_ERRORS.COMPANY.MAX)
            .required(languages[language].FORM_ERRORS.COMPANY.REQUIRED),

        email: Yup.string()
            .email(languages[language].FORM_ERRORS.EMAIL.INVALID)
            .required(languages[language].FORM_ERRORS.EMAIL.REQUIRED),

        location: Yup.string()
            .required(languages[language].FORM_ERRORS.LOCATION.REQUIRED),
    });

    const formikConfig = {
        initialValues,
        validationSchema,
        onSubmit: (values: FormValues) => {
            console.log(values)
        }
    }

    return (
        <Formik { ...formikConfig }>
            <Form className={styles.form}>
                <div className={styles.formItem}>
                    <Field
                        as={Input}
                        name='name'
                        placeholder={languages[language].FORM_FIELDS.NAME}
                        className='form-control'
                    />
                    <ErrorMessage name='name' component='div' className={styles.error}/>
                </div>

                <div className={styles.formItem}>
                    <Field
                        as={Input}
                        name='company'
                        placeholder={languages[language].FORM_FIELDS.COMPANY}
                        className='form-control'
                    />
                    <ErrorMessage name='company' component='div' className={styles.error}/>
                </div>

                <div className={styles.formItem}>
                    <Field
                        as={Input}
                        name='email'
                        type='email'
                        placeholder={languages[language].FORM_FIELDS.EMAIL}
                        className='form-control'
                    />
                    <ErrorMessage name='email' component='div' className={styles.error}/>
                </div>

                <div className={styles.formItem}>
                    <FormikAntdSelect
                        name='location'
                        options={languages[language].FORM_FIELDS.LOCATIONS}
                        placeholder={languages[language].FORM_FIELDS.SELECT_DEFAULT}
                    />
                    <ErrorMessage name='location' component='div' className={styles.error}/>
                </div>

                <Button type="primary" htmlType="submit">
                    {languages[language].FORM_FIELDS.BUTTON}
                </ Button>
            </Form>
        </Formik>
    );
};
