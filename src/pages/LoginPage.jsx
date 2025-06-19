import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Login from '../components/Login';
const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <Navbar currentPage='login'/>
      <Login />
      <Footer />
    </div>
  );
};

export default LoginPage;