import React from 'react'
import { apple, bill, google } from '../assets'
import styles, { layout } from '../style'

const DesktopApp = () => {
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
          <br/> <span className='text-gradient'>Desktop App</span></h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Giải pháp desktop app mạnh mẽ, bảo mật cao, hoạt động ổn định trên Windows/Mac.
Phù hợp cho các hệ thống nội bộ, phần mềm quản lý dữ liệu, kế toán, vận hành doanh nghiệp... với khả năng tùy chỉnh sâu và tích hợp dễ dàng.
        </p>
      </div>  
    </section>
  )
}

export default DesktopApp
