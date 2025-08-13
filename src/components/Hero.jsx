import styles from '../style'
import { discount, robot } from '../assets'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import GetStarted from './GetStarted'

const Hero = () => {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
          <img
            src={discount}
            alt='discount'
            className='w-[32px] h-[32px]'
          />
          <p className={`${styles.paragraph} ml-2`}>
            <span className='text-white'>{t.hero.discount}</span> {" "}
            <span className='text-white'>{t.hero.month}</span> {t.hero.account}
          </p>
        </div>
        <div className='flex flex-row items-center w-full'>
          <h1 className='font-poppins font-semibold ss:text-[40px] text-[32px] text-white ss:leading-[64px] leading-[75px]'>
            {t.hero.title}
            <br/>
            <span className='text-gradient'>{t.hero.subtitle}</span> 
            <br/>
            {t.hero.subtitle2}
          </h1>
          <div className='flex justify-center mt-8'>
            <GetStarted/>
          </div>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        {t.hero.description}
        </p>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img
          src={robot}
          alt='billing'
          className='w-[100%] h-[100%] relative z-[5]'
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"/>
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted/>
      </div>
    </section>
  )
}

export default Hero
