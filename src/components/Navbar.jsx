import React, { useState } from 'react'
import { close, logo, menu } from '../assets'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import LanguageToggle from './LanguageToggle'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const { language } = useLanguage()
  const t = translations[language]

  const navLinks = [
    {
      id: "home",
      title: t.nav.home,
    },
    {
      id: "features", 
      title: t.nav.features,
    },
    {
      id: "product",
      title: t.nav.product,
    },
    {
      id: "clients",
      title: t.nav.clients,
    },
  ]

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo} alt='MINDHEX' className='w-[124px] h-[32px]'/>
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, i) => (
          <li 
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${i === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white mr-10`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>        
        ))}
      </ul>
      <div className='flex items-center gap-4'>
        <LanguageToggle />
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle((previous) => !previous)}
          />
          <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
            <ul className='list-none flex flex-col justify-end items-center flex-1'>
              {navLinks.map((nav, i) => (
                <li 
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] ${i === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white mr-10`}
                >
                  <a href={`#${nav.id}`}>
                    {nav.title}
                  </a>
                </li>        
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
