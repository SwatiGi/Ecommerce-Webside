import React, { useContext } from "react";
import { Container, Navbar, Nav, Button, Badge } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";

import "./App.css";
import { MyContext } from "./store/ContextApi";
import CardData from "./components/CardData";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Login from "./components/Login/Login";

// 🔹 ProtectedRoute component
const ProtectedRoute = ({ isLogin, children }) => {
  if (!isLogin) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const App = () => {
  const { data, show, setShow, isLogin } = useContext(MyContext);

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

        <div style={{ marginTop: "80px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Protected Store route */}
              <Route
    path="/about"
    element={
      <ProtectedRoute isLogin={isLogin}>
        <About />
      </ProtectedRoute>
    }
  />

            <Route
              path="/store"
              element={
                <ProtectedRoute isLogin={isLogin}>
                  <CardData />
                </ProtectedRoute>
              }
            />

            {/* Login route accessible always */}
            <Route path="/login" element={<Login />} />

            {/* Catch-all wildcard route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>

      {show && <CardData />}
    </>
  );
};

export default App;


