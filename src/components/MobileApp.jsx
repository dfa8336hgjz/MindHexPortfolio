import React from 'react'
import { card } from '../assets'
import styles, { layout } from '../style'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

const MobileApp = () => {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>{t.mobileApp.title} 
          <br/> <span className='text-gradient'>{t.mobileApp.subtitle}</span></h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        {t.mobileApp.description}
        </p>
      </div>
      <div className={layout.sectionImg}>
        <img
          src={card}
          alt='card'
          className='w-[100%] h-[100%]'
        />
      </div>
    </section>
  )
}

export default MobileApp
