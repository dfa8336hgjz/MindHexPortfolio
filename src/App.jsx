import React from 'react'
import { 
  Website, 
  DesktopApp,
  Business, 
  MobileApp, 
  Clients, 
  CTA, 
  Footer, 
  Hero, 
  Navbar, 
  Stats, 
  Testimonials 
} from './components'
import { LanguageProvider } from './contexts/LanguageContext'
import styles from './style'

const App = () => {
  return (
    <LanguageProvider>
      <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>      
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats/>
          <Business/>
          <Website/>
          <MobileApp/>
          <DesktopApp/>
          <Testimonials/>
          <Clients/>
          <CTA/>
          <Footer/>     
        </div>
      </div>
    </div>
    </LanguageProvider>
  )
}

export default App