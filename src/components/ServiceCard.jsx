import React from 'react'

const ServiceCard = ({ imgURL, label, subtext}) => {
  return (
    <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-xl px-10 py-16 shadow-3xl'>
        <div className='w-11 h-11 flex justify-center items-center rounded-full bg-coral-red'>
            <img src={imgURL} alt="Services card image" width={24} height={24}/>
        </div>
        <h3 className='font-palanquin font-bold text-3xl'>{label}</h3>
        <p className='mt-3 font-montserrat text-lg break-words'>{subtext}</p>
    </div>
  )
}

export default ServiceCard