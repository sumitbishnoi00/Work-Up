import React from 'react'

const CommonInput = ({placeholder = "", type = "text", buttonIcon, wrapperClass = "", inputClass = "", buttonClass = "",}) => {
  return (
    <div className={`max-w-116 w-full mx-auto flex items-center bg-white border border-transparent [border-image:linear-gradient(90.79deg,#994FFF_0.27%,#4AB6FE_98.57%)_1] rounded-[100px] py-2 pl-5.5${wrapperClass}`}>
        <input type={type} placeholder={placeholder} className={`w-full bg-transparent outline-none font-normal text-[16px] leading-[100%] text-black placeholder:text-medium-gray ${inputClass}`} />

        <button className={`min-w-[69.76px] h-9 rounded-[35px] bg-[linear-gradient(104.91deg,#2ABAE9_0%,#1B77CC_100%)] flex items-center justify-center${buttonClass}`}>

        </button>
    </div>
  )
}

export default CommonInput