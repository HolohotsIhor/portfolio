import './assets/styles/index.scss';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useTypedSelector } from './hooks/useRedux.ts';
import {
    LANG_STORAGE_KEY,
    THEME_COLOR_DARK, THEME_COLOR_LIGHT,
    THEME_STORAGE_KEY,
} from './helpers/constant.ts';
import { ErrorPage } from './pages/Error/Error.tsx';
import { SkillsExperience } from './pages/SkillsExperience/SkillsExperience.tsx';
import { Github } from './pages/Github/Github.tsx';
import { AboutMe } from './pages/AboutMe/AboutMe.tsx';
import { Contacts } from './pages/Contacts/Contacts.tsx';
import { Login } from './pages/Login/Login.tsx';
import { ConfigProvider, Layout } from 'antd';
import { Sidebar } from './components/Sidebar/Sidebar.tsx';
import { HeaderApp } from './components/HeaderApp/HeaderApp.tsx';
import { FooterApp } from './components/FooterApp/FooterApp.tsx';

const { Content } = Layout;

const App = () => {
    const { themeColor, language } = useTypedSelector(state => state.website);
    const navigate = useNavigate();

    useEffect(() => {
        const body = document.querySelector('body');
        if (!body) return;

        body.classList.remove(THEME_COLOR_DARK, THEME_COLOR_LIGHT);
        body.classList.add(themeColor);
    }, [themeColor]);

    useEffect(() => {
        const redirect = sessionStorage.redirect;
        if (redirect) {
            sessionStorage.removeItem('redirect');
            navigate(redirect, { replace: true });
        }
    }, [navigate]);

    useEffect(() => {
        localStorage.setItem(THEME_STORAGE_KEY, themeColor);
        localStorage.setItem(LANG_STORAGE_KEY, language);
    }, [themeColor, language]);

    return (
        <ConfigProvider

        >
            <Layout hasSider>
                <Sidebar />
                <Layout>
                    <HeaderApp />
                    <Content>
                        <Routes>
                            <Route path="/portfolio" element={<AboutMe />} />
                            <Route path="/portfolio/skills-experience" element={<SkillsExperience />} />
                            <Route path="/portfolio/github" element={<Github />} />
                            <Route path="/portfolio/contacts" element={<Contacts />} />
                            <Route path="/portfolio/login" element={<Login />} />
                            <Route path="*" element={<ErrorPage />} />
                        </Routes>
                    </Content>
                    <FooterApp />
                </Layout>
            </Layout>
        </ConfigProvider>
    );
};

export default App;
