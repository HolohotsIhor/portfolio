import { ThemeColors } from '../ThemeColors/ThemeColors';
import { LanguageToggler } from '../LanguageToggler/LanguageToggler.tsx';
import styles from './Header.module.scss';

export const Header = () => {
    return (
        <header className={styles.header}>
            <LanguageToggler />
            <ThemeColors />
        </header>
    );
}
