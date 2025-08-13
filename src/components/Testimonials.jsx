import React from 'react'
import { feedback } from '../constants'
import styles from '../style'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import Feedback from './Feedback'

const Testimonials = () => {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section id='clients' className={`${styles.paddingY} ${styles.flexce} flex-col relative`}>
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40'/>
      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <h2 className={styles.heading2}> <span className='text-gradient'>{t.testimonials.title}</span></h2>
        <div className='w-full md:mt-0 mt-6'>
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            {t.testimonials.description}
          </p>  
        </div>
      </div>
      <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-contrainer relative z-[1]'>
        {feedback.map((card) => (
          <Feedback key={card.id} {...card}/>        
        ))}
      </div>      
    </section>
  )
}

export default Testimonials
