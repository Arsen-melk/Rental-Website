

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import productsData from '../../products-item.json';
import { useTranslation } from '../../contexts/TranslationContext'; 
import './header.scss';

const Header = ({ onSearch }) => {
  const { t, changeLanguage } = useTranslation(); 
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [noResultsMessage, setNoResultsMessage] = useState('');

  const handleLogoClick = () => {
    window.location.href = '/'; 
  };

  const handleProductsClick = () => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('products');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 0);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    if (noResultsMessage) {
      setNoResultsMessage(''); // Clear no results message when typing
    }
  };

  const handleSearchClick = () => {
    const query = searchQuery.trim().toLowerCase();
    const matchingCategory = Object.keys(productsData).find(category => 
      productsData[category].items.some(item => item.name.toLowerCase().includes(query))
    );
    if (matchingCategory) {
      setSearchQuery('');
      setNoResultsMessage(''); 
      navigate(`/category/${matchingCategory}?search=${encodeURIComponent(query)}`);
    } else {
      setNoResultsMessage('Ոչինչ չի գտնվել'); 
      setSearchQuery(''); 
    }
  };

  const handleInputClick = () => {
    if (noResultsMessage) {
      setNoResultsMessage(''); 
    }
  };

  return (
    <header id="header" className="header">
      <div className="container">
        <a href="/" className="logo" onClick={handleLogoClick}>
          <img src="/assets/images/logo.png" alt="Logo" className='img-logo'/>
          <h4 className="logo-text">Vardzuyt.am</h4>
        </a>
        <div className="search-container">
          <input
            type="text"
            placeholder={t('searchPlaceholder')}
            value={searchQuery}
            onChange={handleSearchChange}
            onClick={handleInputClick} // Clear message on input click
          />
          <button className="search-button" onClick={handleSearchClick}>{t('searchButton')}</button>
          {noResultsMessage && <p className="no-results-message">{noResultsMessage}</p>} 
        </div>
        <nav className="nav">
          <a href="#products" onClick={handleProductsClick}>{t('products')}</a>
          <a href="#info">{t('info')}</a>
          <a href="#contact">{t('contact')}</a>
        </nav>
        <div className="language-switcher">
          <img
            src="/assets/images/arm.png"
            alt="Armenian"
            onClick={() => changeLanguage('am')}
          />
          <img
            src="/assets/images/eng.png"
            alt="English"
            onClick={() => changeLanguage('en')}
          />
          <img
            src="/assets/images/rus.png"
            alt="Russian"
            onClick={() => changeLanguage('ru')}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
