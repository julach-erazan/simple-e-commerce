import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Register from './pages/User/Register/Register';
import Login from './pages/User/Login/Login';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
