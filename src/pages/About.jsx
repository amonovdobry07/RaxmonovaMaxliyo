import React, { useEffect } from "react";
import { useTranslation } from "react-i18next"; // <-- Tarjima kiritildi
import "../assets/styles/About.css"; 

import video from "../assets/images/video/video.mp4";

import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  const { t } = useTranslation(); // <-- t() funksiyasini chaqiramiz

  useEffect(() => {
    AOS.init({
      duration: 800, 
      once: true,    
      offset: 50,    
    });
  }, []);

  return (
    <div className="about-page">
      <section className="about-header">
        <h1 className="about-title" data-aos="fade-down">{t('about.headerName')}</h1>
      </section>

      {/* Cheksiz aylanuvchi matn */}
      <div className="marquee-container">
        <div className="marquee-track">
          {/* 4 marta takrorlangan, shuning uchun 4 marta tarjimani chaqiramiz */}
          <span className="marquee-text">
            {t('about.marquee')} &nbsp; ★ &nbsp;
          </span>
          <span className="marquee-text">
            {t('about.marquee')} &nbsp; ★ &nbsp;
          </span>
          <span className="marquee-text">
            {t('about.marquee')} &nbsp; ★ &nbsp;
          </span>
          <span className="marquee-text">
            {t('about.marquee')} &nbsp; ★ &nbsp;
          </span>
        </div>
      </div>

      <div className="portfolio-container">
        <div className="portfolio-wrapper">
          
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

          <div className="content-section">
            <h1 className="hero-text" data-aos="fade-up">{t('about.heroTitle')}</h1>

            <div className="description" data-aos="fade-up" data-aos-delay="150">
              <p>{t('about.desc1')}</p>
              <p>{t('about.desc2')}</p>
            </div>

            <button className="contact-button" data-aos="fade-up" data-aos-delay="300">
              {t('about.contactBtn')}
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default About;