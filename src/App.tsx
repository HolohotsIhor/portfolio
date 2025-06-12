import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/index.scss';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Layout } from './components/Container/Layout.tsx';
import { Nav } from './components/Nav/Nav.tsx';
import { useEffect } from 'react';
import { Footer } from './components/Footer/Footer.tsx';
import { Header } from './components/Header/Header.tsx';
import { useTypedSelector } from './hooks/useRedux.ts';
import { LANG_STORAGE_KEY, THEME_COLOR_DARK, THEME_COLOR_LIGHT, THEME_STORAGE_KEY } from './helpers/constant.ts';
import { FavoritesList } from './components/FavoritesList/FavoritesList.tsx';
import { ErrorPage } from './pages/Error/Error.tsx';
import { SkillsExperience } from './pages/SkillsExperience/SkillsExperience.tsx';
import { Github } from './pages/Github/Github.tsx';
import { AboutMe } from './pages/AboutMe/AboutMe.tsx';
import { Contacts } from './pages/Contacts/Contacts.tsx';
import { Login } from './pages/Login/Login.tsx';
import { Col, Row } from 'react-bootstrap';

function App() {
    const { theme, language } = useTypedSelector(state => state.website);

    // Set theme color
    useEffect(() => {
        document.body.classList.remove(THEME_COLOR_LIGHT, THEME_COLOR_DARK);
        document.body.classList.add(theme);
        localStorage.setItem(THEME_STORAGE_KEY, theme)
        localStorage.setItem(LANG_STORAGE_KEY, language)
    }, []);

    return (
        <BrowserRouter>
            <Layout>
                <Header />
                <Row className='content'>
                    <Col lg={3}>
                        <aside className='aside'>
                            <Nav />
                            <FavoritesList />
                        </aside>
                    </Col>
                    <Col lg={{ span: 8, offset: 1 }}>
                        <Routes>
                            <Route path="/portfolio" element={<AboutMe />} />
                            <Route path="/portfolio/skills-experience" element={<SkillsExperience />} />
                            <Route path="/portfolio/github" element={<Github />} />
                            <Route path="/portfolio/contacts" element={<Contacts />} />
                            <Route path="/portfolio/login" element={<Login />} />
                            <Route path="*" element={<ErrorPage />} />
                        </Routes>
                    </Col>
                </Row>
                <Footer />
            </Layout>
        </BrowserRouter>
    );
}

export default App;
