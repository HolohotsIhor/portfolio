// import reactLogo from './assets/react.svg'
import "./assets/styles/index.scss";
import { Button } from "./components/Button/Button.tsx";
import { Container } from "./components/Container/Container.tsx";
import { SectionSubtitle } from './components/SectionSubtitle/SectionSubtitle.tsx';

function App() {
  return (
    <Container>
        {/*<div>
          <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>*/}
      <h1>Ihor Holohots</h1>
      <SectionSubtitle text={'I build accessible, pixel-perfect digital experiences for the web'} />
      <Button text='Increment' />
    </Container>
  )
}

export default App
