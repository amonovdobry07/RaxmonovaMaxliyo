import React, { useEffect } from 'react'; // useEffect qo'shildi
import { Link } from 'react-router-dom';
import { MarketsList } from '../data/MarketPlaceData';
import '../assets/styles/MarketPlace.css';

// AOS kutubxonasi va uning stillari chaqirildi
import AOS from 'aos';
import 'aos/dist/aos.css';

const MarketPlace = () => {
  // AOS ni ishga tushirish uchun useEffect qo'shildi
  useEffect(() => {
    AOS.init({
      duration: 800, // Animatsiya tezligi (millisekundda)
      once: true, // Animatsiya faqat bir marta ishlashi uchun
      offset: 100, // Ekranda qancha ko'ringanda ishlashni boshlashi
    });
  }, []);

  return (
    <section className="premium-hub-section">
      <div className="premium-hub-bg"></div> {/* Orqa fon uchun naqsh/gradient */}
      
      <div className="premium-hub-container">
        {/* Sarlavhaga fade-down animatsiyasi qo'shildi */}
        <div className="premium-hub-header" data-aos="fade-down">
          <h2>Xaridlarni o'zingizga qulay<br/>platformada amalga oshiring</h2>
          <p>O'zingiz yoqtirgan internet magazindan buyurtma bering va uyingizgacha yetkazib berishlaridan rohatlaning.</p>
        </div>

        {/* Bento-Grid uslubidagi zamonaviy kartalar */}
        <div className="bento-cards-grid">
          {/* map ichiga index qo'shildi, delay uchun */}
          {MarketsList.map((market, index) => (
            <Link 
              to={`/market-place/${market.id}`} 
              key={market.id} 
              className="bento-card"
              data-aos="fade-up" 
              data-aos-delay={index * 150} // Har bir karta bir oz kechikib, navbat bilan chiqadi
            >
              {/* Hover bo'lganda orqa fonda magazin rangida nur (glow) yonadi */}
              <div 
                className="bento-glow" 
                style={{ backgroundColor: market.bgColor }}
              ></div>

              <div className="bento-content">
                <div className="bento-logo-wrapper">
                  <img src={market.logo} alt={market.name} />
                </div>
                
                <div className="bento-text">
                  <h3>{market.name}</h3>
                  <span className="bento-link-text">
                    Mahsulotlarni ko'rish
                    {/* Silliq chiquvchi o'q belgisi */}
                    <svg className="arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketPlace;