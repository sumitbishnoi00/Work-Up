import React from 'react'
import Heading from '../common/Heading'
import { PLANS } from '../../utils/helper'
import Icons from '../common/Icons'

const Plans = () => {
  return (
    <section className='bg-white pt-10 sm:pt-15 md:pt-20 lg:pt-29 px-3'>
        <div className='max-w-282.75 w-full mx-auto flex flex-col items-center justify-center'>
            <div className='max-w-25 md:max-w-[143.77px] w-full border-2 md:border-4 border-blue rounded-full mb-2.5'></div>
            <Heading heading={"Potential Plans"} vari="not" />

            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-9 mt-[57.65px] justify-items-center'>
                {PLANS.map((plan, index) => (

                    <div key={index} className='group w-88.25 rounded-[10px] border border-light-gray bg-white pt-[30.54px] pb-[18.14px] px-[42.55px] flex flex-col min-h-138 transition-all duration-500 hover:border-transparent hover:border-none hover:bg-[linear-gradient(90.79deg,#994FFF_0.27%,#4AB6FE_98.57%),linear-gradient(224.77deg,#E939D9_2.18%,#2ABAE9_111.89%)] cursor-pointer'>
                        <div className='text-center'>
                            <h3 className='font-medium text-[20px] leading-[100%] text-eerie-black group-hover:text-white transition-all duration-500 para'>{plan.name}</h3>
                            <p className='mt-[3.39px] font-normal text-[16px] leading-[100%] text-dim-gray group-hover:text-soft-lilac transition-all duration-500'>{plan.subtitle}</p>
                        </div>
                        <div className='text-center mt-5 md:mt-[25.14px] lg:mt-[27.14px]'>
                            <div className='flex justify-center items-start'>
                                {plan.pricePrefix && (
                                    <span className='font-semibold text-[21.07px] leading-[100%] bg-[linear-gradient(90.79deg,#994FFF_0.27%,#4AB6FE_98.57%)] bg-clip-text text-transparent group-hover:text-white transition-all duration-500'>{plan.pricePrefix}</span>
                                )}

                                <span className='font-semibold text-5xl leading-[100%] bg-[linear-gradient(90.79deg,#994FFF_0.27%,#4AB6FE_98.57%)] bg-clip-text text-transparent group-hover:text-white transition-all duration-500 plan'>{plan.price}</span>
                            </div>

                            <p className='mt-[13.4px] font-normal text-[16px] leading-[100%] text-stone-gray group-hover:text-white transition-all duration-500'>{plan.period}</p>
                        </div>

                        <ul className='mt-4.5 flex-1 space-y-4 flex flex-col pl-11'>
                                {plan.features.map((feature, i) => (

                                    <li key={i} className='flex items-center gap-[5.43px]'>
                                        <div className='group-hover:hidden'>
                                            <Icons icon="normalTick" />
                                        </div>

                                        <div className='hidden group-hover:block'>
                                            <Icons icon="hoverTick" />
                                        </div>

                                        <span className='font-normal text-[16px] leading-[100%] text-dim-gray group-hover:text-pastel-lavender transition-all duration-500'>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                        </ul>

                        <button className='mt-[32.4px] mx-auto max-w-[267.9px] w-full h-[47.48px] rounded-[123px] font-medium text-[18px] leading-[150.39%] text-white bg-[linear-gradient(90.79deg,#994FFF_0.27%,#4AB6FE_98.57%)] group-hover:text-dark-black group-hover:bg-none group-hover:bg-white transition-all duration-500 cursor-pointer'>
                                {plan.button}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Plans