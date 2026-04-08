import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // <-- AOS ning stil fayli (Majburiy)
import '../assets/styles/Products.css';
import ProductsSection from '../data/Products';

const Product = () => {
  // Sahifa yuklanganda AOS ni initsializatsiya (ishga tushirish) qilamiz
  useEffect(() => {
    AOS.init({
      duration: 800,        // Animatsiya davomiyligi (0.8 soniya - juda silliq)
      once: true,           // Animatsiya faqat 1 marta ishlaydi (tepaga qaytganda yana o'ynamaydi)
      easing: 'ease-out',   // Premium silliq to'xtash effekti
      offset: 100,          // Element ekranda 100px ko'ringanda animatsiya boshlanadi
    });
  }, []);

  return (
    <section className="premium-products-section">
      {/* Sarlavha qismiga ham oddiy tepaga chiqish animatsiyasini berdik */}
      <div className="premium-header" data-aos="fade-up">
        <h2>Kolleksiya</h2>
        <p>Har bir detalda milliy ruh va zamonaviy joziba</p>
      </div>

      <div className="premium-masonry-grid">
        {/* 'index' ni qo'shib oldik, bu bizga ketma-ketlik (delay) yaratish uchun kerak */}
        {ProductsSection.map((product, index) => (
          <div 
            key={product.id} 
            className="premium-masonry-item"
            data-aos="fade-up" 
            /* PRO YECHIM: Yonma-yon turgan 3 ta element bir vaqtda chiqmasligi uchun 
               ularning chiqish vaqtini (delay) index ga qarab 0, 100, 200 millisoniyaga kechiktiramiz */
            data-aos-delay={(index % 3) * 150} 
          >
            
            {/* Rasm */}
            <img src={product.image} alt={product.title} className="premium-item-image" />
            
            {/* Rasm ustiga borganda chiqadigan ma'lumotlar (Overlay) */}
            <div className="premium-item-overlay">
              <div className="premium-overlay-content">
                <h3 className="premium-title">{product.title}</h3>
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