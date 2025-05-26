import { useContext } from 'react';
import styles from './Nav.module.scss'
import { NavLink } from 'react-router';
import { LanguageContext } from '../../contexts/LanguageContext';
import { LANG_EN } from '../../helpers/constant';
import { languages } from '../../assets/data/languages';

export const Nav = () => {
    const languageContext = useContext(LanguageContext);

    const items = [
        {
            id: 1,
            name: languageContext.value === LANG_EN
                ? languages.EN.NAV.ABOUT_ME
                : languages.UA.NAV.ABOUT_ME,
            link: '/',
        },
        {
            id: 2,
            name: languageContext.value === LANG_EN
                ? languages.EN.NAV.SKILLS
                : languages.UA.NAV.SKILLS,
            link: '/skills-experience',
        },
        {
            id: 3,
            name: languageContext.value === LANG_EN
                ? languages.EN.NAV.GITHUB
                : languages.UA.NAV.GITHUB,
            link: '/github',
        },
    ];

    return (
        <nav className={styles.nav}>
            {
                items.map(item => (
                    <NavLink
                        key={item.id}
                        to={item.link}
                        className={({ isActive }) =>
                            `${styles.link} ${isActive ? styles.active : ''}`
                        }
                    >
                        {item.name}
                    </NavLink>
                ))
            }
        </nav>
    );
}
