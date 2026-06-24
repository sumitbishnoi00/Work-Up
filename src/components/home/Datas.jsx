import React from 'react'
import { DATAS } from '../../utils/helper'
import CommonData from '../common/CommonData'

const Datas = () => {
  return (
    <section className=' relative px-4 mt-10 sm:mt-15 md:mt-25 lg:mt-32.25 pb-10 sm:pb-15 md:pb-20 lg:pb-[101.68px]'>

      <img src="/assets/Datas-right.webp" className='w-[95.15px] h-[190.92px] absolute bottom-70 right-0' alt="Datas-right" />
      <img src="/assets/Datas-bg.webp" className='w-[51.51px] h-[81.44px] absolute top-19 right-41 z-20' alt="Datas-bg" />
      <img src="/assets/Datas-bg.webp" className='w-[51.51px] h-[81.44px] absolute bottom-10 right-43 z-20' alt="Datas-bg" />

      <div className='flex flex-col gap-8 lg:gap-12.25'>
        {DATAS.map((card) => (

          <CommonData key={card.id} heading={card.heading} para={card.para} image={card.image} reverse={card.reverse} accentColor={card.accentColor} accentPosition={card.accentPosition} imageClass={card.imageClass} classWidth={card.classWidth} />
        ))}
      </div>
    </section>
  )
}

export default Datas