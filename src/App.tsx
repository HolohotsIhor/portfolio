import { BrowserRouter, Route, Routes } from 'react-router';
import './assets/styles/index.scss';
import { Container } from './components/Container/Container.tsx';
import { Nav } from './components/Nav/Nav.tsx';
import { ErrorPage } from './pages/Error/Error.tsx';
import { SkillsExperience } from './pages/SkillsExperience/SkillsExperience.tsx';
import { Github } from './pages/Github/Github.tsx';
import { AboutMe } from './pages/AboutMe/AboutMe.tsx';
import { LanguageContext, ThemeContext } from './contexts/LanguageContext';
import { useEffect, useState } from 'react';
import { LANG_EN, LANG_UA, THEME_COLOR_DARK } from './helpers/constant.ts';
import { Footer } from './components/Footer/Footer.tsx';
import { Header } from './components/Header/Header.tsx';

function App() {
  const [language, setLanguage] = useState(LANG_EN);
  const [themeColor, setThemeColor] = useState(THEME_COLOR_DARK);

  useEffect(() => {
     document.body.classList.add(themeColor);
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
                        <Route path='/skills-experience' element={<SkillsExperience />} />
                        <Route path='/github' element={<Github />} />
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
