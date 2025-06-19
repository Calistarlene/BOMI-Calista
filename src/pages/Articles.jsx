import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Articleslist from '../components/Articlelist';
const Articles = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <Navbar currentPage='article'/>
      <Articleslist />
      <Footer />
    </div>
  );
};

export default Articles;