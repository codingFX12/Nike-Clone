import React from 'react'
import Button from '../components/Button'

const Subscribe = () => {
  return (
    <div className='max-container flex flex-col items-center justify-between'>
      <h2 className='text-4xl font-bold font-palanquin max-lg:text-center leading-[68px] '>Sign Up for 
        <span className='text-coral-red'> Updates </span>
        & Newsletter
      </h2>
      
      <div className='mt-8 flex items-center border-2 border-slate-300 p-2.5 w-full rounded-full'>
        <input 
          type="text" 
          placeholder='subscribe@gmail.com'
          className='input border-none bg-transparent'
        />

        <div className='flex max-sm:justify-end items-center max-sm:w-full'>
          <Button label={'sign up'}/>
        </div>
      </div>
    </div>
  )
}

export default Subscribe