import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next'; // <-- i18n chaqirildi
import '../../assets/styles/Navbar.css';

import logo from "../../assets/images/logo.png"

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); 
  
  const { t, i18n } = useTranslation(); // <-- Tarjima funksiyalari
  
  // i18n dan hozirgi tilni olib, bosh harfini katta qilamiz (masalan 'uz' -> 'Uz')
  const currentLang = i18n.language ? i18n.language.charAt(0).toUpperCase() + i18n.language.slice(1).toLowerCase() : 'En';
  
  const [langDropdown, setLangDropdown] = useState(false); 
  const languages = ['Uz', 'Ru', 'En', 'Tr', 'Fr'];

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const navClass = isHome && !scrolled ? 'navbar-transparent' : 'navbar-solid';

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Haqiqiy i18n til almashtirish funksiyasi
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang.toLowerCase()); // i18n kichik harflarda ('uz', 'en') qabul qiladi
    setLangDropdown(false);
    // Mobilda til almashtirganda menyu yopilishi uchun (ixtiyoriy, lekin qulay)
    if(isOpen) closeMenu(); 
  };

  return (
    <nav className={`navbar ${navClass}`}>
      <div className="navbar-logo">
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="" />
        </Link>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes style={{color: "black"}} /> : <FaBars  />}
      </div>

      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        {/* Yozuvlar t() funksiyasi orqali chaqirildi */}
        <li><NavLink to="/" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>{t('nav.home')}</NavLink></li>
        <li><NavLink to="/products" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>{t('nav.products')}</NavLink></li>
        <li><NavLink to="/market-place" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>{t('nav.market')}</NavLink></li>
                <li><NavLink to="/about" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>{t('nav.about')}</NavLink></li>
        <li><NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>{t('nav.contact')}</NavLink></li>

        {/* MOBIL UCHUN TIL ALMASHTIRGICH */}
        <div className="mobile-langs">
          {languages.map((lang) => (
            <span 
              key={lang} 
              className={currentLang === lang ? 'active-lang' : ''}
              onClick={() => changeLanguage(lang)}
            >
              {lang}
            </span>
          ))}
        </div>
      </ul>

      {/* DESKTOP UCHUN TIL ALMASHTIRGICH */}
      <div className="desktop-lang" onClick={() => setLangDropdown(!langDropdown)}>
        <span className="lang-toggle">
          {currentLang} <span style={{ fontSize: '0.8rem', marginLeft: '3px' }}>{langDropdown ? '▲' : '▼'}</span>
        </span>
        
        <div className={`lang-dropdown ${langDropdown ? 'show' : ''}`}>
          {languages.map((lang) => (
            <div 
              key={lang} 
              className={`lang-option ${currentLang === lang ? 'selected' : ''}`}
              onClick={() => changeLanguage(lang)}
            >
              {lang}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;