import React from 'react';
import { useTranslation } from '../contexts/TranslationContext';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { changeLanguage } = useTranslation();

  return (
    <div className="language-switcher">
      <img
        src="/assets/images/am-flag.png"
        alt="Armenian"
        onClick={() => changeLanguage('am')}
      />
      <img
        src="/assets/images/eng-flag.png"
        alt="English"
        onClick={() => changeLanguage('eng')}
      />
      <img
        src="/assets/images/ru-flag.png"
        alt="Russian"
        onClick={() => changeLanguage('ru')}
      />
    </div>
  );
};

export default LanguageSwitcher;
