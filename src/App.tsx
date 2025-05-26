import { BrowserRouter, Route, Routes } from 'react-router';
import './assets/styles/index.scss';
import { Container } from './components/Container/Container.tsx';
import { Nav } from './components/Nav/Nav.tsx';
import { ErrorPage } from './pages/Error/Error.tsx';
import { SkillsExperience } from './pages/SkillsExperience/SkillsExperience.tsx';
import { Github } from './pages/Github/Github.tsx';
import { AboutMe } from './pages/AboutMe/AboutMe.tsx';
import { Contacts } from './pages/Contacts/Contacts.tsx';
import { LanguageCode, LanguageContext, ThemeCode, ThemeContext } from './contexts/LanguageContext';
import { useEffect, useState } from 'react';
import { LANG_EN, THEME_COLOR_DARK } from './helpers/constant.ts';
import { Footer } from './components/Footer/Footer.tsx';
import { Header } from './components/Header/Header.tsx';
import { LANG_STORAGE_KEY, LANG_UA, THEME_COLOR_LIGHT, THEME_STORAGE_KEY } from './helpers/constant';

function App() {
  const [language, setLanguage] = useState<LanguageCode>(LANG_EN);
  const [themeColor, setThemeColor] = useState<ThemeCode>(THEME_COLOR_DARK);

  useEffect(() => {
    const storedLang = localStorage.getItem(LANG_STORAGE_KEY);
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);

    if (storedTheme === THEME_COLOR_LIGHT || storedTheme === THEME_COLOR_DARK) {
        setThemeColor(storedTheme);
        document.body.classList.add(storedTheme);
    } else {
        setThemeColor(THEME_COLOR_DARK);
        document.body.classList.add(THEME_COLOR_DARK);
    }

    if (storedLang === LANG_EN || storedLang === LANG_UA) setLanguage(storedLang as LanguageCode);
    else setLanguage(LANG_EN);
  }, []);

  useEffect(() => {
      document.body.className = '';
      document.body.classList.add(themeColor);
  }, [themeColor]);

  return (
      <ThemeContext.Provider value={{value: themeColor, change: setThemeColor}}>
          <LanguageContext.Provider value={{value: language, change: setLanguage}}>
              <BrowserRouter>
                <Container>
                    <Header />
                    <Routes>
                        <Route path='/' element={<AboutMe />} />
                        <Route path='/portfolio/skills-experience' element={<SkillsExperience />} />
                        <Route path='/portfolio/github' element={<Github />} />
                        <Route path='/portfolio/contacts' element={<Contacts />} />
                        <Route path='*' element={<ErrorPage />} />
                    </ Routes>
                    <Nav />
                    <Footer />
                  </Container>
              </ BrowserRouter>
          </LanguageContext.Provider>
      </ThemeContext.Provider>
  )
}

export default App
