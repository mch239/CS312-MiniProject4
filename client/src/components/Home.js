import React from 'react';
import { useNavigate } from 'react-router-dom'

function Home() {

  const navigate = useNavigate();

  function registerClick() {
    navigate("/Register")
  console.log("clicked")
};

  function loginClick() {
    navigate("/Login")
    console.log("clicked")
  };

  return (
    <div className="center">
      <h1 className="title" >Blog'n Away</h1>
      <div className="center">
        <button className="register-button" onClick={registerClick}>Register</button>
        <button className="login-button" onClick={loginClick}>Login</button>

      </div>
    </div>
  )
}

export default Home;