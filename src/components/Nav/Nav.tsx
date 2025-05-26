import { useContext } from 'react';
import styles from './Nav.module.scss'
import { NavLink } from 'react-router';
import { LanguageContext } from '../../contexts/LanguageContext';
import { languages } from '../../assets/data/languages';

export const Nav = () => {
    const language = useContext(LanguageContext);

    const items = [
        {
            id: 1,
            name: languages[language.value].NAV.ABOUT_ME,
            link: '/',
        },
        {
            id: 2,
            name: languages[language.value].NAV.SKILLS,
            link: '/portfolio/skills-experience',
        },
        {
            id: 3,
            name: languages[language.value].NAV.GITHUB,
            link: '/portfolio/github',
        },
        {
            id: 4,
            name: languages[language.value].NAV.CONTACTS,
            link: '/portfolio/contacts',
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
