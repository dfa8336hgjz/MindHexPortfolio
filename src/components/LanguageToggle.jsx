import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-300 text-white text-sm font-medium"
      aria-label="Toggle language"
    >
      <span className="text-xs">🌐</span>
      <span>{language === 'vi' ? 'EN' : 'VI'}</span>
    </button>
  );
};

export default LanguageToggle;
