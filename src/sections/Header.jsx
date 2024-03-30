import React from 'react'
import { useState } from 'react'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'

import { statistics, shoes } from '../constants/index'
import { bigShoe1 } from '../assets/images'
import ShoeCard from '../components/ShoeCard'


const Header = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section className='w-full flex xl:flex-row flex-col justify-center min-h-screen max-container gap-10'>
      <div className="relative xl:w-[45%] flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className='text-coral-red font-bold text-xl font-serif'>Our Summer Collections</p>
        <h1 className='mt-10 text-8xl font-bold font-[montserrat] max-sm:text-[72px] '>
          <span className='xl:bg-slate-100 xl:whitespace-nowrap lg:z-10 relative pr-10'>The New Arrival</span>
          <br />
          <span className='text-coral-red inline-block mt-3'>Nike </span> Shoes
        </h1>

        <p className='text-md mt-5 mb-12 text-slate-500 max-w-md'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae rerum rem dignissimos.</p>
        <Button label={"Click here"} iconURL  ={arrowRight}/>

        <div className='flex justify-start items-start mt-20 w-full flex-wrap gap-16'>
          {statistics.map((stat) => (
            <div key={stat.value} className='flex flex-col gap-1'>
              <p className='text-4xl font-bold font-[montserrat]'>{stat.value}</p>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-hero bg-cover bg-center rounded-lg'>
        <img src={bigShoeImg} alt='images' width={540} height={442} className='object-contain relative z-10'/>
        <div className='flex absolute sm:gap-6 gap-4 -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard 
                imgURL={shoe}
                changeBigShoe={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Header