import React from 'react'
import Icons from './Icons'
import Para from './Para'

const FeatureCard = ({ icon, title, desc, iconClass = "", cardClass = ""}) => {
  return (
    <div className={`bg-white border border-light-gray rounded-[10px] flex flex-col items-center text-center hover:border-white transition-all duration-500 hover:shadow-[0px_1px_30px_0px_#0000001A] cursor-pointer ${cardClass}`}>
        <div className={`flex items-center justify-center mb-8.25`}>
            <Icons icon={icon} className={iconClass} />
        </div>

        <h3 className={`font-medium text-[20px] leading-[120%] para text-eerie-black mb-4`}>{title}</h3>

        <Para para={desc} vari="pri" />
    </div>
  )
}

export default FeatureCard