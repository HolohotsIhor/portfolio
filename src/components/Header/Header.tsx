import { ThemeColors } from '../ThemeColors/ThemeColors';
import { LanguageToggler } from '../LanguageToggler/LanguageToggler.tsx';
import styles from './Header.module.scss';
import { NavLink } from 'react-router';
import { useTypedSelector } from '../../hooks/useRedux.ts';

export const Header = () => {
    const { isAuth } = useTypedSelector(state => state.website);

    return (
        <header className={styles.header}>
            <LanguageToggler />
            <div className='d-flex gap-5 align-items-center'>
                {
                    isAuth
                        ? (
                            <div>admin</div>
                        ) : (
                            <NavLink to='/portfolio/login' className='link'>Log in</NavLink>
                        )
                }
                <ThemeColors />
            </div>
        </header>
    );
}
