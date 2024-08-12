



import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useTranslation } from '../../contexts/TranslationContext'; 
import './contact.scss'; 

const Contact = () => {
  const { t } = useTranslation(); 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_125bqma', 'template_xfwjfh9', formData, '3bg4i4sW61mLq_yBA')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
      });
  };

  return (
    <section id='contact' className="contact-section">
      <div className="container">
        <div className="contact-form">
          <h2>{t('contactTitle')}</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t('contactNamePlaceholder')} 
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t('contactEmailPlaceholder')} 
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t('contactMessagePlaceholder')} 
              required
            />
            <button type="submit">{t('contactButton')}</button> 
          </form>
        </div>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3046.823551684693!2d44.50338077581658!3d40.212987771473124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd4d9483540d%3A0x4bcaab3484015b24!2s7%20Hovsep%20Arghutian%20St%2C%20Yerevan!5e0!3m2!1sru!2sam!4v1722588538280!5m2!1sru!2sam"
            width="400"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
