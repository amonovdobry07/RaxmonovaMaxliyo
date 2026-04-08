import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // <-- Tarjima uchun ulandi
import AOS from "aos";
import "aos/dist/aos.css";

import "../assets/styles/Home.css";

import home_maxsulot_1 from "../assets/images/home_maxsulot_1.jpg";
import home_maxsulot_2 from "../assets/images/home_maxsulot_2.jpg";
import home_maxsulot_3 from "../assets/images/home_maxsulot_3.jpg";
import home_maxsulot_4 from "../assets/images/home_maxsulot_4.jpg";
import home_maxsulot_5 from "../assets/images/home_maxsulot_5jpg.jpg";

const Home = () => {
  const { t } = useTranslation(); // <-- Tarjima funksiyasi chaqirildi

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  // Mahsulotlar ro'yxati tarjima funksiyasi bilan
  const products = [
    {
      id: 1,
      image: home_maxsulot_1,
      title: t("home.product_1"), // Tarjima faylidan olinadi
      price: "$45.00",
      oldPrice: "$55.00",
      onSale: true,
    },
    {
      id: 2,
      image: home_maxsulot_2,
      title: t("home.product_2"),
      price: "$30.00",
      oldPrice: null,
      onSale: false,
    },
    {
      id: 3,
      image: home_maxsulot_3,
      title: t("home.product_3"),
      price: "$60.00",
      oldPrice: null,
      onSale: false,
    },
    {
      id: 4,
      image: home_maxsulot_4,
      title: t("home.product_4"),
      price: "$25.00",
      oldPrice: null,
      onSale: false,
    },
  ];

  return (
    <div className="home-container">
      {/* Asosiy Rasm qismi */}
      <section className="hero-section" data-aos="fade-in"></section>

      {/* Rasm ostidagi katta tekst qismi */}
      <section className="title-section" data-aos="fade-up">
        {/* Sarlavha tarjimadan keladi */}
        <h1>{t("home.main_title")}</h1>
      </section>

      {/* MAHSULOTLAR QISMI */}
      <section className="products-section">
        <div className="products-grid">
          {products.map((product, index) => (
            <Link to="/products" style={{ textDecoration: "none" }} key={product.id}>
              <div
                className="product-card"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div className="product-image-wrapper">
                  {product.onSale && <span className="sale-badge">{t("home.sale")}</span>}
                  <img
                    src={product.image}
                    alt={product.title}
                    className="product-image"
                  />
                </div>

                <div className="product-info">
                  <h3 className="product-title">{product.title}</h3>
                  <div className="product-price-wrapper">
                    <span className="current-price">{product.price}</span>
                    {product.oldPrice && (
                      <span className="old-price">{product.oldPrice}</span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* MEET THE ARTIST QISMI */}
      <section className="about-artist-section">
        <div className="about-artist-container">
          <div className="about-artist-image" data-aos="fade-right">
            <img src={home_maxsulot_5} alt="Maxliyo" />
          </div>

          <div className="about-artist-text" data-aos="fade-left">
            <h4 className="artist-subtitle">{t("home.meet_artist")}</h4>
            <h2 className="artist-title" dangerouslySetInnerHTML={{ __html: t("home.greeting") }}></h2>
            
            <p className="artist-bio">{t("home.bio_1")}</p>
            <p className="artist-bio">{t("home.bio_2")}</p>

            <Link to="/about" className="btn-outline">
              {t("home.btn_story")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;