import React from 'react'
import { DATAS } from '../../utils/helper'
import CommonData from '../common/CommonData'

const Datas = () => {
  return (
    <section className='px-4 mt-10 sm:mt-15 md:mt-25 lg:mt-32.25'>
        <div className='flex flex-col gap-8 lg:gap-12.25'>
            {DATAS.map((card) => (

                <CommonData key={card.id} heading={card.heading} para={card.para} image={card.image} reverse={card.reverse} accentColor={card.accentColor} accentPosition={card.accentPosition} imageClass={card.imageClass} classWidth={card.classWidth} />
            ))}
        </div>
    </section>
  )
}

export default Datas