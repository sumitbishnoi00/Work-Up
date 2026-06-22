import React from 'react'

const Para = ({para, vari}) => {
    const variants = {
        pri: " leading-[120%] text-dim-gray",
        sec: "leading-[160%] text-soft-lilac",
        dan: "leading-[160%] text-dim-gray",
        not: "leading-[154%] text-dim-gray",
        sum: "leading-[170%] text-dim-gray"
        
    }
  return (
    <p className={` font-normal text-[16px] ${variants[vari]}`}>{para}</p>
  )
}

export default Para