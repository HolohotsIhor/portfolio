import { NavLink, useLocation } from 'react-router-dom';
import { languages } from '../../assets/data/languages';
import { useAppSelector } from '../../hooks/useRedux.ts';
import { Menu } from 'antd';
import styles from './Nav.module.scss';

export const Nav = () => {
    const { language } = useAppSelector(state => state.website);
    const location = useLocation();

    const items = [
        {
            key: '/portfolio/',
            label: (
                <NavLink to="/portfolio/">
                    {languages[language].NAV.ABOUT_ME}
                </NavLink>
            ),
        },
        {
            key: '/portfolio/skills-experience',
            label: (
                <NavLink to="/portfolio/skills-experience">
                    {languages[language].NAV.SKILLS}
                </NavLink>
            ),
        },
        {
            key: '/portfolio/github',
            label: (
                <NavLink to="/portfolio/github">
                    {languages[language].NAV.GITHUB}
                </NavLink>
            ),
        },
        {
            key: '/portfolio/contacts',
            label: (
                <NavLink to="/portfolio/contacts">
                    {languages[language].NAV.CONTACTS}
                </NavLink>
            ),
        },
    ];

    return (
        <Menu
            className={styles.nav}
            theme="dark"
            mode="inline"
            selectedKeys={[location.pathname]} // <-- привязка к текущему пути
            items={items}
        />
    );
};
