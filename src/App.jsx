import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Articles from './pages/Articles';
import BMI from './pages/BMI';
import About from './pages/About';
import LoginPage from './pages/LoginPage';
import RegisterPage  from './pages/RegisterPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/bmi" element={<BMI />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}