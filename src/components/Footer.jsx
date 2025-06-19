import React from 'react';
import Logo from '../assets/logo.svg';

const Footer = ({ onNavigate }) => {
  const handleLogoClick = () => {
    // Scroll to welcome section on home page
    if (onNavigate) {
      onNavigate('/#welcome');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePageNavigate = (page) => {
    if (onNavigate) {
      onNavigate(page);
    } else {
      console.log(`Navigate to: ${page}`);
    }
  };

  return (
    <footer className="bg-orange-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Logo Section */}
          <div className="flex-1">
            <button
              onClick={handleLogoClick}
              className="cursor-pointer transition-transform hover:scale-105"
            >
              <img src={Logo} alt="BOMI Logo" className="h-16 md:h-40" />
            </button>
          </div>

          {/* Links and Contact Section */}
          <div className="flex-l flex flex-col items-start md:items-end gap-6">
            {/* Page Links */}
            <div className="flex flex-col gap-2">
              <button
                onClick={() => handlePageNavigate('/privacy-policy')}
                className="text-gray-700 hover:text-[#626F47] transition-colors text-left"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => handlePageNavigate('/terms-conditions')}
                className="text-gray-700 hover:text-[#626F47] transition-colors text-left"
              >
                Terms and Conditions
              </button>
            </div>

            {/* Contact Us Section */}
            <div>
              <p className="text-gray-700 font-semibold mb-3 text-[#626F47]">Contact Us:</p>
              <div className="flex gap-4">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#626F47] rounded-full flex items-center justify-center hover:bg-[#7da03a] transition-colors"
                  aria-label="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                  </svg>
                </a>

                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#626F47] rounded-full flex items-center justify-center hover:bg-[#7da03a] transition-colors"
                  aria-label="TikTok"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#626F47] rounded-full flex items-center justify-center hover:bg-[#7da03a] transition-colors"
                  aria-label="YouTube"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-[#A4B465] text-white py-4">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex items-center justify-between">
            <span className="text-xl font-semibold text-[#626F47]">BOMI</span>
            <span className="text-sm font-bold text-[#626F47]">© copyright 2025 BOMI All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;