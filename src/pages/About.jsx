import React, { useEffect } from "react"; // useEffect qo'shildi
import "../assets/styles/About.css"; 

import video from "../assets/images/video/video.mp4";

// AOS kutubxonasi va stillari chaqirildi
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  // AOS ni ishga tushirish
  useEffect(() => {
    AOS.init({
      duration: 800, // Animatsiya tezligi
      once: true,    // Faqat bir marta ishlaydi
      offset: 50,    // Animatsiya ekranda paydo bo'lish darajasi
    });
  }, []);

  return (
    <div className="about-page">
      {/* Tepadagi katta sarlavha qismi - TEPADAN TUSHADI */}
      <section className="about-header">
        <h1 className="about-title" data-aos="fade-down">RAHMANOVA MAXLIYO</h1>
      </section>

      {/* =======================================
          CHEKSIZ AYLANUVCHI YULDUZLI MATN (MARQUEE)
          Bu qismga AOS qo'shilmadi, chunki o'zi harakatda.
          ======================================= */}
      <div className="marquee-container">
        <div className="marquee-track">
          <span className="marquee-text">
            Organic Forms &nbsp; ★ &nbsp; Scotland-Based Artist &nbsp; ★ &nbsp; Botanical Art &nbsp; ★ &nbsp;
          </span>
          <span className="marquee-text">
            Organic Forms &nbsp; ★ &nbsp; Scotland-Based Artist &nbsp; ★ &nbsp; Botanical Art &nbsp; ★ &nbsp;
          </span>
          <span className="marquee-text">
            Organic Forms &nbsp; ★ &nbsp; Scotland-Based Artist &nbsp; ★ &nbsp; Botanical Art &nbsp; ★ &nbsp;
          </span>
          <span className="marquee-text">
            Organic Forms &nbsp; ★ &nbsp; Scotland-Based Artist &nbsp; ★ &nbsp; Botanical Art &nbsp; ★ &nbsp;
          </span>
        </div>
      </div>

      <div className="portfolio-container">
        <div className="portfolio-wrapper">
          {/* Chap tomon: Video qismi - CHAPDAN CHIQADI */}
          <div className="image-section" data-aos="fade-right">
            <div className="image-border">
              <video
                className="profile-img"
                src={video}
                autoPlay
                loop
                muted
                playsInline
                disablePictureInPicture
                preload="metadata"
              ></video>
            </div>
          </div>

          {/* O'ng tomon: Matn qismi */}
          <div className="content-section">
            {/* Sarlavha PASTDAN CHIQADI */}
            <h1 className="hero-text" data-aos="fade-up">Men Mahliyo</h1>

            {/* Matn PASTDAN, BIROZ KECHIKIB CHIQADI */}
            <div className="description" data-aos="fade-up" data-aos-delay="150">
              <p>
                Mening ishim React yordamida yozilgan toza arxitektura va
                fototahrirdagi sehrli realizm elementlarini birlashtirib,
                mantiqiy kod va vizual san'at o'rtasida mukammal uyg'unlikni
                hosil qiladi.
              </p>
              <p>
                Atrofimdagi boy muhit va raqamli ijodning cheksiz
                imkoniyatlaridan ilhomlangan holda, loyihalarimga ko'pincha
                interaktiv elementlar, nafis kompozitsiyalar va o'ziga xos
                vizual hikoyalarni olib kiraman. Ishonamanki, ta'sirchan loyiha
                o'ta murakkab bo'lishi shart emas — to'g'ri ishlangan bitta
                komponent, nozik vizual detal yoki mukammal yozilgan birgina kod
                qatori butun boshli voqeani so'zlab bera oladi.
              </p>
            </div>

            {/* Tugma eng oxirida, PASTDAN CHIQADI */}
            <button className="contact-button" data-aos="fade-up" data-aos-delay="300">
              Men bilan bog'laning
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;