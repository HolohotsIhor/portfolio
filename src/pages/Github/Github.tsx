import { useEffect } from 'react';
import { languages } from '../../assets/data/languages';
import { ErrorMessage, Field, Form, Formik, useFormikContext } from 'formik';
import styles from '../../components/ContactForm/ContactForm.module.scss';
import * as Yup from 'yup';
import { useTypedSelector } from '../../hooks/useRedux.ts';

type FormValues = {
    search: string;
};

const initialValues: FormValues = {
    search: '',
};

const FormObserver = () => {
    const { values } = useFormikContext<FormValues>();

    useEffect(() => {
        console.log('search:', values.search);
    }, [values.search]);

    return null;
};

export const Github = () => {
    const { language } = useTypedSelector(state => state.website);

    const validationSchema = Yup.object({
        search: Yup.string()
            .matches(/^[A-Za-zА-Яа-яЁё\s]+$/, languages[language].FORM_ERRORS.NAME.ALLOWD)
            .min(2, languages[language].FORM_ERRORS.NAME.MIN)
            .max(50, languages[language].FORM_ERRORS.NAME.MAX)
            .required(languages[language].FORM_ERRORS.NAME.REQUIRED),
    });

    const formikConfig = {
        initialValues,
        validationSchema,
        onSubmit: (values: FormValues) => {
            console.log('Submitted values:', values);
        }
    }

    return (
        <>
            <h1>{languages[language].GITHUB.TITLE}</h1>

            <Formik {...formikConfig}>
                <Form>
                    <FormObserver />

                    <div className={styles.formItem}>
                        <Field
                            name='search'
                            placeholder='Input repositories name'
                            className={styles.input}
                        />
                        <ErrorMessage name='name' component='div' className={styles.error}/>
                    </div>
                </Form>
            </Formik>
        </>
    );
}
