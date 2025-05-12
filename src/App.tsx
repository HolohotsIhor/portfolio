// import reactLogo from './assets/react.svg'
import "./assets/styles/index.scss";
import { SectionSubtitle } from './components/SectionSubtitle/SectionSubtitle.tsx';

function App() {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          {/*<img src={reactLogo} className="logo react" alt="React logo" />*/}
        </a>
      </div>
      <h1>Brittany Chiang</h1>
      <SectionSubtitle text={'I build accessible, pixel-perfect digital experiences for the web'} />
    </>
  )
}

export default App
