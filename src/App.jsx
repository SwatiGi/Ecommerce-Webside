import React, { useContext } from "react";
import { Container, Navbar, Nav, Button, Badge } from "react-bootstrap";

import MusicApp from "./components/MusicApp";
import "./App.css";
import { MyContext } from "./store/ContextApi";
import CardData from "./components/CardData";

const App = () => {
  let { data, show, setShow } = useContext(MyContext);

  return (
    <>
      <Navbar
        style={{ position: "fixed", zIndex: "1000", width: "100%", top: "0" }}
        bg="dark"
        variant="dark"
        expand="sm"
      >
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/store">Store</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>

          <div style={{ position: "relative" }}>
            <Button
              variant="outline-info"
              onClick={() => setShow(!show)}
              style={{ position: "relative" }}
            >
              Cart
            </Button>
            <Badge
              bg="white"
              text="primary"
              style={{
                position: "absolute",
                top: "-25px",
                right: "-10px",
                fontSize: "14px",
                borderRadius: "50%",
                padding: "5px 8px",
              }}
            >
              {data.length}
            </Badge>
          </div>
        </Container>
      </Navbar>

    
      {show && <CardData />}

   
      <div style={{ marginTop: "80px" }}>
     
        <MusicApp />
       
      </div>
    </>
  );
};

export default App;

