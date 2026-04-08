import React, { useEffect } from 'react'; // useEffect qo'shildi
import { useParams, Link } from 'react-router-dom';
import { MarketProducts, MarketsList } from '../data/MarketPlaceData';
import '../assets/styles/MarketDetail.css';

// AOS kutubxonasi va uning stillari chaqirildi
import AOS from 'aos';
import 'aos/dist/aos.css';

const MarketDetails = () => {
  // URL dan :marketName qismini o'qib olamiz (masalan, 'ozon')
  const { marketName } = useParams();

  // AOS ni ishga tushirish uchun useEffect qo'shildi
  useEffect(() => {
    AOS.init({
      duration: 800, // Animatsiya tezligi
      once: true, // Animatsiya faqat bir marta ishlashi uchun
      offset: 50, // Ekranda tezroq ko'rinishi uchun offset biroz kamaytirildi
    });
  }, []);

  // TUG'RILANDI: Array bo'lgani uchun .filter() ishlatamiz
  const products = MarketProducts.filter(p => p.market === marketName);
  
  // Magazinning vizual ma'lumotlarini topamiz
  const marketInfo = MarketsList.find(m => m.id === marketName);

  // Agar bunday magazin topilmasa
  if (!marketInfo) {
    return <div className="market-error">Magazin topilmadi!</div>;
  }

  return (
    <section className="market-details-section">
      {/* Sarlavhaga fade-down animatsiyasi qo'shildi */}
      <div className="market-details-header" data-aos="fade-down">
        <Link to="/market-place" className="back-btn">← Orqaga</Link>
        
        {/* TUG'RILANDI: Logo rasm formatida va bgColor ishlatildi */}
        <div className="details-logo-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
          <img src={marketInfo.logo} alt={marketInfo.name} style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
          <h2>{marketInfo.name}</h2>
        </div>
        
        <p>Ushbu platformadagi barcha mahsulotlarimiz</p>
      </div>

      <div className="market-products-grid">
        {/* map ichiga index qo'shildi, delay uchun */}
        {products.map((product, index) => (
          /* TUG'RILANDI: externalLink ishlatildi */
          <a 
            href={product.externalLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            key={product.id} 
            className="market-product-card"
            data-aos="fade-up" 
            data-aos-delay={index * 100} // Har bir mahsulot 100ms farq bilan ketma-ket chiqadi
          >
            <div className="img-wrapper">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="product-info">
              <h3>{product.title}</h3>
              <p>{product.price}</p>
              {/* TUG'RILANDI: marketInfo.bgColor ishlatildi */}
              <button style={{ backgroundColor: marketInfo.bgColor, color: '#111', fontWeight: 'bold' }} className="buy-btn">
                Sotib Olish
              </button>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default MarketDetails;