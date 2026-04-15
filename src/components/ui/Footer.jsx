import React from 'react';
import { FaInstagram, FaTelegram, } from 'react-icons/fa'; // Ikonkalar uchun: npm install react-icons
import "../../assets/styles/Footer.css"

const Footer = () => {
  return (
    <footer className="w-full py-8 px-4 md:px-12 border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* 1. Ijtimoiy tarmoqlar (Social Icons) */}
        <div className="flex items-center gap-6 text-gray-800">
          <a href="https://www.instagram.com/rayhona_atelie/"  target='__blank'  className="hover:text-blue-400 transition-colors" aria-label="Twitter">
            <FaInstagram size={18} />
          </a>
          <a href="https://t.me/+tvRU4Aklc4UxZmUy" target='__blank' className="hover:text-blue-600 transition-colors" aria-label="Facebook">
            <FaTelegram size={18} />
          </a>
        </div>

        {/* 2. Copyright matni */}
        <div className="text-gray-900 font-medium text-center md:text-left text-sm sm:text-base">
          Barcha huquqlar himoyalangan
        </div>

        {/* 3. Brend/Platforma nomi */}
        <div className="text-sm sm:text-base">
          <span className="text-gray-600">Made with </span>
          <a 
            style={{cursor: "pointer"}} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-black font-semibold underline underline-offset-4 hover:text-gray-700 decoration-1"
          >
            KHALIMOV
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;