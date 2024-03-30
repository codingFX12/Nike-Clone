import React from 'react'
import { footerLogo } from '../assets/images'

const Footer = () => {
  return (
    <footer className='max-container'>
      <div className='flex justify-between items-start flex-wrap max-lg:flex-col'>
        <img src={footerLogo} alt="" width={150} height={46}/>
        <p className='mt-6 text-slate-300 sm:max-sm text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit laudantium nisi sint.</p>
      </div>
    </footer>
  )
}

export default Footer