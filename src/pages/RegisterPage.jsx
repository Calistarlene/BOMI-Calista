import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Register from '../components/Register';
const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <Navbar currentPage='register'/>
      <Register />
      <Footer />
    </div>
  );
};

export default RegisterPage;