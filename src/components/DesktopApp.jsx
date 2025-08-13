import React from 'react'
import { apple, bill, google } from '../assets'
import styles, { layout } from '../style'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

const DesktopApp = () => {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={bill}
          alt='billing'
          className='w-[100%] h-[100%] relative z-[5]'
        />
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>{t.desktopApp.title} 
          <br/> <span className='text-gradient'>{t.desktopApp.subtitle}</span></h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        {t.desktopApp.description}
        </p>
      </div>  
    </section>
  )
}

export default DesktopApp
