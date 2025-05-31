import { BrowserRouter, Route, Routes } from 'react-router';
import './assets/styles/index.scss';
import { Container } from './components/Container/Container.tsx';
import { Nav } from './components/Nav/Nav.tsx';
import { ErrorPage } from './pages/Error/Error.tsx';
import { SkillsExperience } from './pages/SkillsExperience/SkillsExperience.tsx';
import { Github } from './pages/Github/Github.tsx';
import { AboutMe } from './pages/AboutMe/AboutMe.tsx';
import { Contacts } from './pages/Contacts/Contacts.tsx';
import { useEffect } from 'react';
import { Footer } from './components/Footer/Footer.tsx';
import { Header } from './components/Header/Header.tsx';
import { useTypedSelector } from './hooks/useRedux.ts';
import { LANG_STORAGE_KEY, THEME_COLOR_DARK, THEME_COLOR_LIGHT, THEME_STORAGE_KEY } from './helpers/constant.ts';

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
            <Container>
                <Header />
                <Routes>
                    <Route path="/" element={<AboutMe />} />
                    <Route path="/portfolio/skills-experience" element={<SkillsExperience />} />
                    <Route path="/portfolio/github" element={<Github />} />
                    <Route path="/portfolio/contacts" element={<Contacts />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
                <Nav />
                <Footer />
            </Container>
        </BrowserRouter>
    );
}

export default App;
