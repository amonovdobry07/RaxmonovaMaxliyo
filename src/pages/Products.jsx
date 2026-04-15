import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next'; // <-- Tarjima kiritildi
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import '../assets/styles/Products.css';
import ProductsSection from '../data/Products';

const Product = () => {
  const { t } = useTranslation(); // <-- t() funksiyasini chaqiramiz

  useEffect(() => {
    AOS.init({
      duration: 800,        
      once: true,           
      easing: 'ease-out',   
      offset: 100,          
    });
  }, []);

  return (
    <section className="premium-products-section">
      <div className="premium-header" data-aos="fade-up">
        {/* Sarlavhalar tarjimaga o'tkazildi */}
        <h2>{t('products.headerTitle')}</h2>
        <p>{t('products.headerSubtitle')}</p>
      </div>

      <div className="premium-masonry-grid">
        {ProductsSection.map((product, index) => (
          <div 
            key={product.id} 
            className="premium-masonry-item"
            data-aos="fade-up" 
            data-aos-delay={(index % 3) * 150} 
          >
            {/* Rasm */}
            <img src={product.image} alt={t(product.titleKey)} className="premium-item-image" />
            
            {/* Overlay */}
            <div className="premium-item-overlay">
              <div className="premium-overlay-content">
                {/* Mahsulot nomi tarjimadan olinadi */}
                <h3 className="premium-title">{t(product.titleKey)}</h3>
                <p className="premium-price">{product.price}</p>
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;