import { LoginForm } from '../../components/LoginForm/LoginForm.tsx';
import { useAppSelector } from '../../hooks/useRedux.ts';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle.tsx';

export const Login = () => {
    const { isAuth, languages, language } = useAppSelector(store => store.website);
    const currentDataLang = languages.find(item => item.lang === language)?.data;

    if (!currentDataLang) return null;

    return (
        <>
            <SectionTitle text={currentDataLang.LOGIN.TITLE} />
            {
                isAuth
                    ? <div>{currentDataLang.LOGIN.TEXT}</div>
                    : <LoginForm />
            }
        </>
    );
}
