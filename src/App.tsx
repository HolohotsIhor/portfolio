import "./assets/styles/index.scss";
import { Container } from "./components/Container/Container.tsx";
import { SectionSubtitle } from './components/SectionSubtitle/SectionSubtitle.tsx';
import { Contacts } from "./components/Contacts/Contacts.tsx";

function App() {

  return (
      <Container>
          {/*<h1>Ihor Holohots</h1>*/}
          {/*<SectionSubtitle text='I build accessible, pixel-perfect digital experiences for the web' />*/}
          <Contacts />
      </Container>
  )
}

export default App
