import React from 'react'
import { features } from '../constants'
import styles, { layout } from '../style'
import Button from './Button'

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card`}>
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
  return (
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Bạn phát triển kinh doanh,<br className='sm:block hidden'/> 
        <span className='text-gradient'>MINDHEX lo phần công nghệ!</span>
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Một hệ thống web hoặc app được thiết kế đúng cách sẽ giúp bạn đặt lịch dễ dàng, 
        quản lý nội bộ hiệu quả, bán hàng nhanh hơn và nâng cao trải nghiệm khách hàng. 
        MINDHEX chuyên xây dựng các giải pháp phần mềm theo yêu cầu: từ website đặt lịch cho nhà hàng
         - khách sạn, app học trực tuyến, hệ thống quản trị nội bộ, đến nền tảng bán hàng đa kênh.
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
