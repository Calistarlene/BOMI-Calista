import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BMICalc from '../components/BMICalc';
const Articles = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <Navbar currentPage='bmi'/>
      <BMICalc />
      

      <Footer />
    </div>
  );
};

export default Articles;