import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";
import { LogOut } from 'lucide-react';

const Navbar = ({ currentPage = 'home' }) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();

  const isLoggedIn = Boolean(user);
  const userProfile = user ?? null;

  const navItems = [
    { name: 'Home', path: '/', key: 'home' },
    { name: 'Articles', path: '/articles', key: 'articles' },
    { name: 'BMI', path: '/bmi', key: 'bmi' },
    { name: 'About', path: '/about', key: 'about' }
  ];

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 w-full px-8 py-4 bg-[#F5ECD5] shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="cursor-pointer" onClick={handleLogoClick}>
          <img
            src="/logo.svg"
            alt="BOMI Logo"
            className="w-24 h-auto hover:scale-105 transition-transform duration-200"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.key}
              to={item.path}
              className={`relative text-lg font-medium transition-colors duration-200 hover:text-green-700 ${
                currentPage === item.key ? 'text-green-700' : 'text-gray-700'
              }`}
              onMouseEnter={() => setHoveredItem(item.key)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {item.name}
              {(currentPage === item.key || hoveredItem === item.key) && (
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-green-700 transition-all duration-200"></div>
              )}
            </Link>
          ))}
        </div>
        

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          {/* Desktop Login/Profile Link*/}
          <div className="hidden md:block">
            {isLoggedIn && userProfile ? (
              <button 
                onClick={() => {setSidebarOpen(true);
                   console.log('Navigate to profile');
                  }}
                className="w-10 h-10 rounded-full bg-orange-300 flex items-center justify-center text-white font-bold hover:scale-105 transition-transform"
              >
                {userProfile.name ? userProfile.name[0].toUpperCase() : 'U'}
              </button>
            ) : (
              <Link
                to="/login" className='h-10 px-6 flex items-center justify-center rounded-full font-medium border-2 border-orange-300 text-green-700 hover:bg-orange-300 hover:text-white transition-all duration-200'>Login</Link>
            )}
          </div>
          {sidebarOpen && (
            <div className="fixed top-0 right-0 h-full w-64 bg-[#a8b764] shadow-lg p-4 z-50">
              <button className="text-gray-600 hover:text-red-500 float-right"
                      onClick={() => setSidebarOpen(false)}
              >
                ✕
              </button>

              {/*Profile Content*/}
              <div className = "text-center mt-6">
                {/*Profile Picture*/}
                <img
                  src={userProfile.photoUrl || "/default-avatar.png"} alt='Profile'
                  className="w-24 h-24 rounded-full mx-auto border-4 border-orange-200 object-cover"/>
              
                {/*Username*/}
                <h2 className="text-xl font-semibold mt-3">
                  {userProfile.name ?? "Username"}
                </h2>

                {/*Date of Birth*/}
                <p className="text-sm text-gray-500 mt-1">
                  {userProfile.dateofbirth ?? "Why you have no birthday ha?"}
                </p>

                {/*Email*/}
                <p className="text-sm text-gray-500 mt-1">
                  {userProfile.email ?? "address@example.com"}
                </p>

                {/*Logout Button*/}
                <button onClick={() => {
                  LogOut();
                  setSidebarOpen(false);
                }}
                className="mt-6 px-5 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition">
                  Logout
                </button>
              </div>
            </div>
          )}
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-green-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
          <div className="flex flex-col space-y-4 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                className={`text-left text-lg font-medium transition-colors duration-200 ${
                  currentPage === item.key ? 'text-green-700' : 'text-gray-700'
                } hover:text-green-700`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Login/Profile */}
            <div className="pt-4 border-t border-gray-100">
              {isLoggedIn && userProfile ? (
                <button 
                  className="flex items-center space-x-3 text-lg font-medium text-gray-700 hover:text-green-700"
                  onClick={() => {
                    console.log('Navigate to profile');
                    setMobileMenuOpen(false);
                  }}
                >
                  <div className="w-8 h-8 rounded-full bg-orange-300 flex items-center justify-center text-white text-sm font-bold">
                    {userProfile.name ? userProfile.name[0].toUpperCase() : 'U'}
                  </div>
                  <span>Profile</span>
                </button>
              ) : (
                <button 
                  className="w-full px-6 py-2 rounded-full font-medium border-2 border-orange-300 text-green-700 hover:bg-orange-300 hover:text-white transition-all duration-200"
                  onClick={() => {
                    console.log('Navigate to login');
                    setMobileMenuOpen(false);
                  }}
                >
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;