import { LoginForm } from '../../components/LoginForm/LoginForm.tsx';
import { useAppSelector } from '../../hooks/useRedux.ts';

export const Login = () => {
    const { isAuth } = useAppSelector(store => store.website);

    return (
        <>
            {
                isAuth
                    ? <div>Hello, you are logged in as admin.</div>
                    : <LoginForm />
            }
        </>
    );
}
