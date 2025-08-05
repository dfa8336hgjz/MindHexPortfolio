import React from 'react'
import { card } from '../assets'
import styles, { layout } from '../style'

const MobileApp = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Dịch vụ xây dựng 
          <br/> <span className='text-gradient'>Mobile App</span></h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Chúng tôi phát triển ứng dụng di động iOS & Android tối ưu trải nghiệm người dùng, hiệu suất cao và dễ mở rộng.
        Phù hợp cho các nhu cầu như đặt lịch, bán hàng, học trực tuyến hay quản lý công việc – với giao diện hiện đại và thao tác mượt mà.
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
