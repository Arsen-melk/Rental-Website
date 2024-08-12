
import React from 'react';
import { useTranslation } from '../../contexts/TranslationContext'; 
import './footer.scss'; 

const Footer = () => {
  const { t } = useTranslation(); 

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <address className="footer-address">
            <p>{t('footerAddress')}</p> 
            <p>{t('footerPhone')}</p> 
            <p>{t('footerEmail')}</p> 
          </address>
        </div>
        <div className="footer-center">
          <p>{t('footerCopyright')}</p> 
        </div>
        <div className="footer-right">
          <a href="/assets/images/facebook.png" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src="/assets/images/facebook.png" alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/mood_rental_official" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src="/assets/images/instagram.png" alt="Instagram" />
          </a>
        </div>

        <div className="logo-footer"><img src="/assets/images/logo.png" alt="Logo" className='img-logo'/></div>
      </div>
    </footer>
  );
};

export default Footer;
