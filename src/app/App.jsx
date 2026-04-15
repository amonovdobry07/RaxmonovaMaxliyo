import './App.css'

import Home from '../pages/Home'
import Products from '../pages/Products'
import MarketPlace from '../pages/MarketPlace'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Header from '../components/layout/Header'
import Footer from '../components/ui/Footer'
import MarketDetails from '../pages/MarketDetails'

// useLocation ni import qilamiz
import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react' 

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import translationUz from '../locales/translationUz'
import translationRu from '../locales/translationRu'
import translationEn from '../locales/translationEn'
import translationTr from '../locales/translationTr'
import translationFr from '../locales/translationFr'

import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS CSS stillari

i18n.use(initReactI18next).init({
  resources: {
    uz: { translation: translationUz }, // UZB o'rniga uz
    ru: { translation: translationRu }, // RUS o'rniga ru
    en: { translation: translationEn }, // ENG o'rniga en
    tr: { translation: translationTr }, // TUR o'rniga tr
    fr: { translation: translationFr }, // FRA o'rniga fr
  },
  lng: "uz", // Standart til ham uz bo'ladi
  fallbackLng: "uz", 
  interpolation: {
    escapeValue: false 
  }
});

function App() {
  // Hozirgi manzilni aniqlaymiz
  const location = useLocation();
  const isHome = location.pathname === '/';

    useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
      offset: 100,    
    });
  }, []);

  return (
    <div className='App'>
      <Header /> 
      
      {/* Agar bosh sahifa bo'lmasa, "page-padding" klassi qo'shiladi */}
      <main className={`main-content ${!isHome ? 'page-padding' : ''}`}>
          <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/market-place" element={<MarketPlace />} />
                <Route path="/market-place/:marketName" element={<MarketDetails />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer /> 
    </div>
  )
}

export default App