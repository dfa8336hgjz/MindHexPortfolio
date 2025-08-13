import React from 'react'
import styles from '../style'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import Button from './Button'

const CTA = () => {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className='flex-1 flex flex-col'>
        <h2 className={styles.heading2}>{t.cta.title}</h2>
        <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
        {t.cta.description}
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0`}>
        <Button/>
      </div>
    </section>
  )
}

export default CTA
