import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // <-- Tarjima kiritildi
import { MarketProducts, MarketsList } from '../data/MarketPlaceData';
import '../assets/styles/MarketDetail.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

const MarketDetails = () => {
  const { marketName } = useParams();
  const { t } = useTranslation(); // <-- t() funksiyasini chaqiramiz

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
    });
  }, []);

  const products = MarketProducts.filter(p => p.market === marketName);
  const marketInfo = MarketsList.find(m => m.id === marketName);

  if (!marketInfo) {
    return <div className="market-error">{t('marketDetails.notFound')}</div>;
  }

  return (
    <section className="market-details-section">
      <div className="market-details-header" data-aos="fade-down">
        <Link to="/market-place" className="back-btn">{t('marketDetails.backBtn')}</Link>
        
        <div className="details-logo-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
          <img src={marketInfo.logo} alt={marketInfo.name} style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
          <h2>{marketInfo.name}</h2>
        </div>
        
        <p>{t('marketDetails.allProducts')}</p>
      </div>

      <div className="market-products-grid">
        {products.map((product, index) => (
          <a 
            href={product.externalLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            key={product.id} 
            className="market-product-card"
            data-aos="fade-up" 
            data-aos-delay={index * 100} 
          >
            <div className="img-wrapper">
              <img src={product.image} alt={t(product.titleKey)} />
            </div>
            <div className="product-info">
              {/* Mahsulot nomi tarjimadan keladi */}
              <h3>{t(product.titleKey)}</h3>
              <p>{product.price}</p>
              <button style={{ backgroundColor: marketInfo.bgColor, color: '#111', fontWeight: 'bold' }} className="buy-btn">
                {t('marketDetails.buyBtn')}
              </button>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default MarketDetails;