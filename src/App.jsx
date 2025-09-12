import React, { useContext } from "react";
import { Container, Navbar, Nav, Button, Badge } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import MusicApp from "./components/MusicApp";
import "./App.css";
import { MyContext } from "./store/ContextApi";
import CardData from "./components/CardData";
import Home from "./components/Home/Home";
import About from "./components/About/About"

const App = () => {
  let { data, show, setShow } = useContext(MyContext);

  return (
    <>
      <Router>
  <Navbar
          style={{
     position: "fixed",
    zIndex: "1000",
    width: "100%",
    top: "0",
    borderBottom: "2px solid white",
  }}
  bg="black"
  variant="dark"
  expand="sm"
>
  <Container className="nav-container">
    <Nav className="nav-links">
      <Navbar.Brand as={Link} to="/">
        HOME
      </Navbar.Brand>
      <Navbar.Brand as={Link} to="/store">
        STORE
      </Navbar.Brand>
      <Navbar.Brand as={Link} to="/about">
        ABOUT
      </Navbar.Brand>
     
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
                  top: "0px",
                  right: "-30px",
                  fontSize: "14px",
                  borderRadius: "50%",
                  padding: "5px 8px",
                }}
              >
                {data.length}
              </Badge>
            </div>
    </Nav>
  </Container>
</Navbar>


        {/* Margin-top to push content below fixed navbar */}
        <div style={{ marginTop: "80px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<MusicApp />} />
             <Route path="/about" element={<About />} />
            {/* <Route path="/about" element={<About />} />  <-- yahan apna About component add karna */}
          </Routes>
        </div>
      </Router>

      {/* Cart Data toggle */}
      {show && <CardData />}
    </>
  );
};

export default App;


