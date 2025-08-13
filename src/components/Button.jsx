import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

const Button = ({ styles }) => {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}>
      {t.business.button}
    </button>
  )
}

export default Button
