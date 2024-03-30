import React from 'react'
import { shoe8 } from '../assets/images'
import Button from '../components/Button'

const SuperQuality = () => {
  return (
    <div id='superQuality' className='flex flex-1 max-lg:flex-col justify-between items-start max-container w-full gap-8'>
      <div className='flex flex-col'>
        <h2 className='text-4xl font-montserrat font-bold '>
          We Provide You
          <span className='text-coral-red'> Super Quality </span>
          Shoes
        </h2>
        <p className='mt-4 info-text max-lg:mt-6 lg:max-w-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni exercitationem rerum similique atque velit dicta ea beatae molestiae ut facere minima recusandae, officia cum soluta fuga asperiores? Assumenda similique sint nihil harum unde asperiores!</p>
        <p className='mt-5 info-text max-lg:mt-8 lg:max-w-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere dolor expedita nostrum.
        </p>

        <div className='mt-10 max-md:mb-10'>
          <Button label={'View More'}/>
        </div>
      </div>

      <img src={shoe8} alt="" width={570} height={522} className='object-contain'/>
    </div>
  )
}

export default SuperQuality