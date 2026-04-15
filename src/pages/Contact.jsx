import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; // <-- Tarjima hook'i qo'shildi
import '../assets/styles/Contact.css'; 

const Contact = () => {
  const { t } = useTranslation(); // <-- t() funksiyasini chaqiramiz

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Telefon raqami formati va 12 belgilik cheklov saqlab qolindi
  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/[^0-9+]/g, '');
    if (value.length <= 12) {
      setFormData({ ...formData, phone: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const targetEmail = "raykhon.textile@gmail.com"; 
    
    // Elektron pochtaga ketadigan xabar ham tarjimaga moslandi
    const subject = encodeURIComponent(t('contact.emailSubject'));
    const body = encodeURIComponent(
      `${t('contact.nameLabel')}: ${formData.name}\n${t('contact.phoneLabel')}: ${formData.phone}\n\n${t('contact.messageLabel')}:\n${formData.message}`
    );

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${targetEmail}&su=${subject}&body=${body}`;
    window.open(gmailLink, '_blank');
    
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-card">
        
        {/* Chap qism: Contact Form */}
        <div className="contact-form-section">
          <h2 className="contact-title">{t('contact.title')}</h2>
          <p className="contact-subtitle">
            {t('contact.subtitle')}
          </p>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label>{t('contact.nameLabel')}</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder={t('contact.namePlaceholder')}
              />
            </div>

            <div className="form-group">
              <label>{t('contact.phoneLabel')}</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handlePhoneChange}
                required
                placeholder={t('contact.phonePlaceholder')}
              />
            </div>

            <div className="form-group">
              <label>{t('contact.messageLabel')}</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                placeholder={t('contact.messagePlaceholder')}
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              {t('contact.submitBtn')}
            </button>
          </form>
        </div>

        {/* O'ng qism: Xarita */}
        <div className="contact-map-section">
          <iframe
            title={t('contact.mapTitle')}
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6157.401706365908!2d64.791669!3d39.498669!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDI5JzU1LjIiTiA2NMKwNDcnMzAuMCJF!5e0!3m2!1sru!2s!4v1776250171854!5m2!1sru!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </div>
  );
};

export default Contact;