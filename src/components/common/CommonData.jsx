import React from 'react'

const CommonData = ({heading, para, image, reverse = false, accentColor, accentPosition, imageClass}) => {

  return (
    <div className={` relative max-w-265.5 mx-auto w-full min-h-73 max-pl-2.5 py-3 pr-[33.27px]  rounded-xl border border-light-gray bg-white overflow-hidden flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row pl-11.25"}  items-center justify-between gap-6 lg:gap-33 hover:shadow-[2px_4px_23px_0px_#078DFC40] transition-all duration-500 cursor-pointer`}>
        <div className={` absolute top-0 h-full ${accentColor} ${accentPosition === "left" ? "left-0 w-4.5" : "right-0 w-3"}`}>

        </div>

        <div className={`w-full max-w-[473.71px] text-center lg:text-left`}>
            <h3 className='font-semibold text-[24px] leading-[100%] text-dark-gray'>{heading}</h3>
            <p className='font-normal text-[16px] leading-[154%] text-dim-gray mt-3'>{para}</p>
        </div>

        <div className='w-full lg:w-1/2 flex items-center justify-center lg:justify-end '>
            <img src={image} alt={heading} className={`w-full h-auto object-contain ${imageClass} `} />
        </div>
    </div>
  )
}

export default CommonData