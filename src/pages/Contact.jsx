import React, { useState } from 'react';
import '../assets/styles/Contact.css'; // CSS faylini ulash

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/[^0-9+]/g, '');
    if (value.length <= 12) {
      setFormData({ ...formData, phone: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const targetEmail = "example@gmail.com"; 
    const subject = encodeURIComponent("Veb-saytdan yangi xabar");
    const body = encodeURIComponent(
      `Ism: ${formData.name}\nTelefon: ${formData.phone}\n\nXabar:\n${formData.message}`
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
          <h2 className="contact-title">Biz bilan bog'laning</h2>
          <p className="contact-subtitle">
            Savollaringiz bo'lsa, quyidagi forma orqali bizga xabar yuboring. Tez orada siz bilan bog'lanamiz.
          </p>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label>Ismingiz</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Ali Valiyev"
              />
            </div>

            <div className="form-group">
              <label>Telefon raqamingiz (Maks 12 belgi)</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handlePhoneChange}
                required
                placeholder="+99890123456"
              />
            </div>

            <div className="form-group">
              <label>Xabaringiz</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                placeholder="Shu yerga yozing..."
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Xabarni Gmail orqali yuborish
            </button>
          </form>
        </div>

        {/* O'ng qism: Xarita */}
        <div className="contact-map-section">
          <iframe
            title="Kompaniya manzili"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98139.73691652496!2d66.89279768997388!3d39.65487770000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d191960077df7%3A0x487636d9d13f2f57!2sSamarkand%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
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