import { useEffect, useRef, useState } from 'react';
import { languages } from '../../assets/data/languages';
import { ErrorMessage, Field, Form, Formik, useFormikContext } from 'formik';
import styles from '../../components/ContactForm/ContactForm.module.scss';
import * as Yup from 'yup';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { useDebounce } from '@uidotdev/usehooks';
import { SearchResultList } from '../../components/InputResultList/SearchResultList';
import { getUserRepos, searchUsers } from '../../store/github/githubThunk';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { RepoCard } from '../../components/RepoCard/RepoCard.tsx';
import { Input } from 'antd';

type FormValues = {
    search: string;
};

type FormObserverProps = {
    onChange: (values: FormValues) => void;
};

const initialValues: FormValues = {
    search: '',
};

const FormObserver = ({ onChange }: FormObserverProps) => {
    const { values } = useFormikContext<FormValues>();
    const debounced = useDebounce(values.search, 300);

    useEffect(() => {
        if (debounced.trim()) onChange({ search: debounced });
    }, [debounced, onChange]);

    return null;
};

export const Github = () => {
    const [isResultShow, setIsResultShow] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const { language, languages: languagesDb } = useAppSelector(state => state.website);
    const { users, repos, loading } = useAppSelector(state => state.github);
    const dispatch = useAppDispatch();
    const currentDataLang = languagesDb.find(item => item.lang === language)?.data;

    useEffect(() => {
        inputRef.current && inputRef.current.focus();
        dispatch(getUserRepos('HolohotsIhor'));
    }, []);

    useEffect(() => {
        if (searchTerm.trim()) {
            dispatch(searchUsers(searchTerm));
        }

        (searchTerm.length > 1) ? setIsResultShow(true) : setIsResultShow(false);
    }, [searchTerm, dispatch]);

    const handleChange = (values: FormValues) => {
        setSearchTerm(values.search);
    };

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
            console.log('Form submitted with:', values);
        },
    }

    if (!currentDataLang) return null;

    return (
        <>
            <SectionTitle text={currentDataLang.GITHUB.TITLE} />

            <Formik {...formikConfig}>
                <Form>
                    <FormObserver onChange={handleChange} />

                    <div className={styles.formItem}>
                        <Field
                            as={Input}
                            name='search'
                            placeholder='Input github username'
                            className='form-control'
                            ref={inputRef}
                        />
                        <ErrorMessage name='search' component='div' className={styles.error}/>
                        {
                            isResultShow && (
                                <SearchResultList
                                    items={users}
                                    handleShow={setIsResultShow}
                                />
                            )
                        }
                    </div>
                    {
                        repos.map(repo => (
                            <RepoCard key={repo.id} repo={repo} loading={loading}/>
                        ))
                    }
                </Form>
            </Formik>
        </>
    );
}
