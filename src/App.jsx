import React from 'react'
import { Container, Navbar} from "react-bootstrap"
import Counter from './components/Counter'
import RegistrationForm from './components/Form'
import MusicApp from './components/MusicApp'
const App = () => {
  return (
    <>
      <Navbar variant='dark' color='white' bg='dark' expand="sm" >
        <Container>
        <Navbar.Brand href='/'>Home</Navbar.Brand>
        </Container>
         <Container>
        <Navbar.Brand href='/store'>Store</Navbar.Brand>
        </Container> <Container>
        <Navbar.Brand href='/about'>About</Navbar.Brand>
        </Container>
      
      </Navbar>
      <MusicApp></MusicApp>
      {/* <RegistrationForm/> */}
      {/* <Counter/> */}
</>
  )
}

export default App
