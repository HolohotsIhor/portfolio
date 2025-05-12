// import reactLogo from './assets/react.svg'
import { useState } from "react";
import "./assets/styles/index.scss";
import { Button } from "./components/Button/Button.tsx";
import { Container } from "./components/Container/Container.tsx";
import { SectionSubtitle } from './components/SectionSubtitle/SectionSubtitle.tsx';

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
      setCount(prev => prev + 1);
  }

  const handleDecrement = () => {
    setCount(prev => prev - 1);
  }

  return (
      <Container>
          {/* TODO: need to use other svg
            <div>
              <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>*/}
          <h1>Ihor Holohots</h1>
          <SectionSubtitle text='I build accessible, pixel-perfect digital experiences for the web' />
          <div className='counter'>
              <Button text='Decrement' handler={handleDecrement} />
              <Button text='Increment' handler={handleIncrement} />
          </div>
          <span>{count}</span>
      </Container>
  )
}

export default App
