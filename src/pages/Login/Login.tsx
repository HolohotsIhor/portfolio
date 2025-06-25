import { LoginForm } from '../../components/LoginForm/LoginForm.tsx';
import { useTypedSelector } from '../../hooks/useRedux.ts';

export const Login = () => {
    const { isAuth } = useTypedSelector(store => store.website);

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
