import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './partials/footer';
import Header from './partials/header';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Create from "./components/Create"
import Edit from "./components/Edit";
import './styles.css'

function App() {
  return (
    <div className="container">
      <Header />
      <div className="form-container">
      
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path ="/register" element={<Register />} />
        <Route path ="/login" element={<Login />} />
        <Route path ="/create" element={<Create />} />
        <Route path ="/edit" element={<Edit />} />
      </Routes> 

      </div>
      <Footer />

      
    </div>
  );
}

export default App;