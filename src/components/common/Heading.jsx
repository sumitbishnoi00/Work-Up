import React from 'react'

const Heading = ({heading, vari}) => {
    const variants = {
        pri: "leading-[120%] text-eerie-black ",
        sec: "leading-[100%] text-white",
        dan: "leading-[100%] text-jet-black",
        not: "leading-[125%] text-eerie-black"
        
    }
  return (
    <h2 className={`font-medium text-[26px] sm:text-[28px] md:text-[36px] lg:text-[40px] ${variants[vari]}`}>{heading}</h2>
  )
}

export default Heading