import React, { useContext, useState } from 'react'
import { Container, Navbar,Button,Badge} from "react-bootstrap"
import Counter from './components/Counter'
import RegistrationForm from './components/Form'
import MusicApp from './components/MusicApp'
import UserList from './components/UserList'
import "./App.css"
import { MyContext } from './store/ContextApi'
import CardData from './components/CardData'
const App = () => {
  let { data,show,setShow } = useContext(MyContext)

  return (
    <>
      <Navbar style={{position:"fixed",zIndex:"1000",width:"100%" ,top:"0"}} variant='dark' color='white' bg='dark' expand="sm" >
        <Container>
        <Navbar.Brand href='/'>Home</Navbar.Brand>
        </Container>
         <Container>
        <Navbar.Brand href='/store'>Store</Navbar.Brand>
        </Container> <Container>
        <Navbar.Brand href='/about'>About</Navbar.Brand>
        </Container>
        <div style={{position:"relative"}}>
        <Button variant='outline-info' style={{position:"absolute", right:"40px",top:'0'}} onClick={()=>setShow(!show)}>Cart</Button>
        <Badge
            bg="none"
            text='primary'
          pill
          style={{
            position: "absolute",
            top: "0px",
            right: "8px",
            fontSize: "0.7rem",
            fontSize:"20px"
          }}
        >
          {data.length}
        </Badge>
        </div>
      </Navbar>
      {!show?"":<CardData/>}
      {/* <UserList/> */}
     <MusicApp/>
      {/* <RegistrationForm/> */}
      {/* <Counter/> */}
</>
  )
}

export default App
