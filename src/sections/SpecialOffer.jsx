import React from 'react'
import { offer } from '../assets/images'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'

const SpecialOffer = () => {
  return (
    <section className='flex max-xl:flex-col-reverse items-center justify-wrap w-full max-container gap-10'>
      <div className='flex-1'>
        <img src={offer} alt="" width={773} height={687}/>
      </div>

      <div className='flex-1 flex flex-col'>
        <h1 className='text-4xl font-bold font-palanquin'> <span className='text-coral-red'>Special</span> Offer</h1>
        <p className='mt-4 info-text lg:max-w-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus accusamus incidunt eius praesentium voluptas, architecto, exercitationem eligendi inventore ipsam libero non quam vero expedita repellat deserunt est quasi aliquam necessitatibus ad nobis. Ipsum, consequatur corporis.</p>
        <p className='mt-6 info-text lg:max-w-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ratione eius dolorem animi alias architecto reiciendis!</p>

        <div className='mt-8 flex flex-wrap gap-4 max-lg:mb-4'>
          <Button iconURL={arrowRight} label={'Shop Now'}/>
          <Button label={'Learn More'} bgColor={'transparant'} textColor={'text-slate-600'} border={'border-2 border-slate-600 rounded-full'}/>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer