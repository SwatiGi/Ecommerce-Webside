import React, { useRef } from 'react';
import "./Login.css";
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
const navigate = useNavigate()
  const handleLogin = (e) => {
    e.preventDefault();
    const enterEmail = emailInputRef.current.value;
    const enterPassword = passwordInputRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyARDxt5Lm3M6csGWS9yZONyj74rf0MBs-Y",
      {
        method: "POST",
        body: JSON.stringify({
          email: enterEmail,
          password: enterPassword,
          returnSecureToken: true,
        }),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => {
        if (res.ok) return res.json();
        else throw new Error("Login failed");
      })
      .then((data) => {
        console.log("User logged in:", data.idToken);
          alert("Login successful!");
          navigate("/")
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h1 className="login-title">Login</h1>

        <label className="login-label" htmlFor="email">
          Email
        </label>
        <input className="login-input" type="text" id="email" ref={emailInputRef} />

        <label className="login-label" htmlFor="password">
          Password
        </label>
        <input className="login-input" type="password" id="password" ref={passwordInputRef} />

        <button className="login-button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
