import styles from './Nav.module.scss'
import { NavLink } from 'react-router';
import { languages } from '../../assets/data/languages';
import { useTypedSelector } from '../../hooks/useRedux.ts';

export const Nav = () => {
    const { language } = useTypedSelector(state => state.website);

    const items = [
        {
            id: 1,
            name: languages[language].NAV.ABOUT_ME,
            link: '/portfolio/',
        },
        {
            id: 2,
            name: languages[language].NAV.SKILLS,
            link: '/portfolio/skills-experience',
        },
        {
            id: 3,
            name: languages[language].NAV.GITHUB,
            link: '/portfolio/github',
        },
        {
            id: 4,
            name: languages[language].NAV.CONTACTS,
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
                        end={item.link === '/portfolio/'}
                        className={({ isActive }) =>
                            `link ${isActive ? 'active' : ''}`
                        }
                    >
                        {item.name}
                    </NavLink>
                ))
            }
        </nav>
    );
}
