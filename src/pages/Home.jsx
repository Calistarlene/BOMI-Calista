import React from 'react';
import Navbar from '../components/Navbar';
import Welcome from '../components/home/Welcome';
import Blog from '../components/home/Article';
import Features from '../components/home/Feature';
import Faq from '../components/home/FAQ';
import Testimonial from '../components/home/Testimonial';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <Navbar />
      <Welcome />
      <Blog />
      <Features />
      <Faq />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;