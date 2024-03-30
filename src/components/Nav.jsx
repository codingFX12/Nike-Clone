import { headerLogo } from '../assets/images'
import { navLinks } from '../constants'
import { hamburger } from '../assets/icons'
import { useState } from 'react';

import Button from './Button';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHarmbuger = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a>
          <img src={headerLogo} alt="logo" width={130} height={30}/>
        </a>

        <ul className='flex-1 flex items-center justify-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label} className='hover:border-b hover:border-black duration-200 leading-8 font-semibold'>
              <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-600 hover:text-black'>
                {item.label}
              </a>
            </li>
          ))}

          <Button label={'Sign up'}/>

        </ul>
        
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="harmburger" width={30} height={30} className='cursor-pointer hover:scale-90'
          onClick={toggleHarmbuger}
          />
          <ul className={`${!isOpen ? 'hidden' : 'flex'} absolute left-0 flex-col items-center justify-center w-full gap-20 pt-3 bg-white ease-in h-[90vh]`}>
          {navLinks.map((item) => (
            <li key={item.label} className='hover:scale-90 duration-200'>
              <a href={item.href} className='font-montserrat leading-normal text-2xl font-bold text-slate-600 hover:text-black'>
                {item.label}
              </a>
            </li>
          ))}

          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Nav