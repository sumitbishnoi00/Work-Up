import React from 'react'
import Icons from './Icons'
import { FOOTER_LINKS } from '../../utils/helper'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <section className='bg-[linear-gradient(223.31deg,#FBC524_-34.99%,#E939D9_21.89%,#2ABAE9_74.4%)] pt-14 sm:pt-20 lg:pt-[106.83px] text-center pb-5 sm:pb-[22.1px]'>
      <div className='max-w-360 w-full mx-auto flex flex-col lg:flex-row justify-center gap-10 lg:gap-84.75 px-3'>
        <div className='max-w-[420.36px] w-full flex flex-col items-center lg:items-start mx-auto lg:mx-0'>
          <img src="/assets/footer-logo.webp" className='w-[169.98px] h-14' alt="footer-logo" />
          <p className='mt-3 font-medium text-[14px] leading-[150%] text-soft-periwinkle text-left'>The is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

          <div className='flex items-center'>
            <Icons icon="facebook" />
            <Icons icon="instagram" />
            <Icons icon="twiter" />
            <Icons icon="inLink" />
          </div>
        </div>

        <div className='max-w-95 w-full'>
          <div className='flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-8 sm:gap-12 lg:gap-16'>
            {FOOTER_LINKS.map((section, index) => (

              <div key={index} className='gap-2.5 flex flex-col items-start'>
                <h3 className='font-semibold text-[20px] leading-[100%] text-white'>{section.title}</h3>

                <ul className='text-white space-y-3.5 text-start'>
                  {section.links.map((link, idx) => (

                    <li key={idx} className='font-medium text-[14px] leading-[100%]'>
                      <Link to={"/"}>{link}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='w-full border-2 border-royal-blue mt-12 sm:mt-16 lg:mt-[86.82px] mb-[15.84px]'></div>

      <span className='font-semibold text-[14px] sm:text-[16px] lg:text-[18px] leading-[177.78%] text-baby-blue px-3 inline-block'>Copyright 2023 JesMor Enterprises, All Rights Reserved.</span>
    </section>
  )
}

export default Footer