import React from 'react'

const Heading = ({heading, vari}) => {
    const variants = {
        pri: "md:text-[56px] sm:text-[42px] text-[32px] text-lite-black mb-4",
        sec: "md:text-5xl sm:text-[38px] text-[32px] text-lite-black mb-4",
        dan: "md:text-5xl sm:text-[38px] text-[32px] text-white max-w-[632px] w-full mb-4"
        
    }
  return (
    <h2 className={` ${variants[vari]}`}>{heading}</h2>
  )
}

export default Heading