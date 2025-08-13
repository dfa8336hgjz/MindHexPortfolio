import React from 'react'
import styles, { layout } from '../style'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import { send, shield, star } from '../assets'
import Button from './Button'

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== 2 ? 'mb-6' : 'mb-0'} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img
        src={icon}
        alt='icon'
        className='w-[50%] h-[50%] object-contain'
      />
    </div>
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px]'>
        {content}
      </p>
    </div>
  </div>
)

const Business = () => {
  const { language } = useLanguage()
  const t = translations[language]

  const features = [
    {
      id: "feature-1",
      icon: star,
      title: t.business.features.feature1.title,
      content: t.business.features.feature1.content,
    },
    {
      id: "feature-2",
      icon: shield,
      title: t.business.features.feature2.title,
      content: t.business.features.feature2.content,
    },
    {
      id: "feature-3",
      icon: send,
      title: t.business.features.feature3.title,
      content: t.business.features.feature3.content,
    },
  ]

  return (
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>{t.business.title}<br className='sm:block hidden'/> 
        <span className='text-gradient'>{t.business.subtitle}</span>
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        {t.business.description}
        </p>
        <Button styles='mt-10'/>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index}/>
        ))}
      </div>
    </section>
  )
}

export default Business
