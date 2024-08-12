import React, { createContext, useContext, useState } from 'react';
import translations from '../translations/translations.json'; 

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState('am'); 

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  const t = (key) => {
    return (translations[language] && translations[language][key]) || key;
  };

  return (
    <TranslationContext.Provider value={{ t, changeLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => useContext(TranslationContext);
