import { ErrorMessage, Field, Form, Formik, FormikErrors} from 'formik';
import styles from './ContactForm.module.scss';
import * as Yup from 'yup';
import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { languages } from '../../assets/data/languages';

type FormValues = {
    name: string;
    company: string;
    email: string;
    location: string;
};

const initialValues: FormValues = {
    name: '',
    company: '',
    email: '',
    location: '',
};

export const ContactForm = () => {
    const language = useContext(LanguageContext);

    const validationSchema = Yup.object({
        name: Yup.string()
            .matches(/^[A-Za-zА-Яа-яЁё\s]+$/, languages[language.value].FORM_ERRORS.NAME.ALLOWD)
            .min(2, languages[language.value].FORM_ERRORS.NAME.MIN)
            .max(30, languages[language.value].FORM_ERRORS.NAME.MAX)
            .required(languages[language.value].FORM_ERRORS.NAME.REQUIRED),

        company: Yup.string()
            .matches(/^[\w\s\.\-]+$/, languages[language.value].FORM_ERRORS.COMPANY.ALLOWD)
            .min(2, languages[language.value].FORM_ERRORS.COMPANY.MIN)
            .max(50, languages[language.value].FORM_ERRORS.COMPANY.MAX)
            .required(languages[language.value].FORM_ERRORS.COMPANY.REQUIRED),

        email: Yup.string()
            .email(languages[language.value].FORM_ERRORS.EMAIL.INVALID)
            .required(languages[language.value].FORM_ERRORS.EMAIL.REQUIRED),

        location: Yup.string()
            .required(languages[language.value].FORM_ERRORS.LOCATION.REQUIRED),
    });

    const formikConfig = {
        initialValues,
        validationSchema,
        onSubmit: (values: FormValues) => {
            console.log(values)
        }
    }

    return (
        <Formik {...formikConfig}>
            <Form>
                <div className={styles.formItem}>
                    <Field
                        name='name'
                        placeholder='Your name*'
                        className={styles.input}
                    />
                    <ErrorMessage name='name' component='div' className={styles.error}/>
                </div>

                <div className={styles.formItem}>
                    <Field
                        name='company'
                        placeholder='Company*'
                        className={styles.input}
                    />
                    <ErrorMessage name='company' component='div' className={styles.error}/>
                </div>

                <div className={styles.formItem}>
                    <Field
                        name='email'
                        type='email'
                        placeholder='Email*'
                        className={styles.input}
                    />
                    <ErrorMessage name='email' component='div' className={styles.error}/>
                </div>

                <div className={styles.formItem}>
                    <Field
                        as='select'
                        name='location'
                        className={styles.input}
                    >
                        <option value=''>Select company region*</option>
                        <option value="ukraine">Ukraine</option>
                        <option value="europe">Europee</option>
                        <option value="usa">USA</option>
                        <option value="other">Other world</option>
                    </Field>
                    <ErrorMessage name='location' component='div' className={styles.location} />
                </div>

                <button type='submit' className={styles.button}>
                    Write to me
                </button>
            </Form>
        </Formik>
    );
};
