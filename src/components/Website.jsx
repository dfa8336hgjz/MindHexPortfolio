import React from 'react'
import { bill } from '../assets'
import styles, { layout } from '../style'

const Website = () => {
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
        <h2 className={styles.heading2}>Dịch vụ xây dựng 
          <br/> <span className='text-gradient'>Website</span></h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Giải pháp website đẹp, tối ưu SEO, tốc độ tải nhanh, dễ dàng quản trị.
        Phù hợp cho các nhu cầu như bán hàng, giới thiệu công ty, dịch vụ hay nền tảng đặt lịch online – với giao diện hiện đại và thao tác mượt mà.
        </p>
      </div>  
    </section>
  )
}

export default Website
