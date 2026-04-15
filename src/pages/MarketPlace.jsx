import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // <-- Tarjima kiritildi
import { MarketsList } from '../data/MarketPlaceData';
import '../assets/styles/MarketPlace.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

const MarketPlace = () => {
  const { t } = useTranslation(); // <-- t() funksiyasini chaqiramiz

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section className="premium-hub-section">
      <div className="premium-hub-bg"></div>
      
      <div className="premium-hub-container">
        <div className="premium-hub-header" data-aos="fade-down">
          {/* Tarjima funksiyasidan foydalanamiz */}
          <h2>{t('marketplace.title')}</h2>
          <p>{t('marketplace.subtitle')}</p>
        </div>

        <div className="bento-cards-grid">
          {MarketsList.map((market, index) => (
            <Link 
              to={`/market-place/${market.id}`} 
              key={market.id} 
              className="bento-card"
              data-aos="fade-up" 
              data-aos-delay={index * 150}
            >
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
                    {t('marketplace.viewProducts')}
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