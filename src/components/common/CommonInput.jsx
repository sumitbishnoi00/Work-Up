import React from "react";
import Icons from "./Icons";

const CommonInput = ({
  placeholder = "Enter email to join waitlist",
  type = "text",
  buttonIcon,
  wrapperClass = "",
  inputClass = "",
  buttonClass = "",
}) => {
  return (
    <div
      className={`max-w-116 w-full mx-auto flex items-center bg-white border-transparent border mt-[31.06px] [border-image:linear-gradient(90.79deg,#994FFF_0.27%,#4AB6FE_98.57%)_1]  rounded-[100px] py-2 pl-5.5 pr-2 ${wrapperClass}`}
    >
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full bg-transparent outline-none font-normal md:text-[16px] text-[14px] leading-[100%] text-black placeholder:text-medium-gray ${inputClass}`}
      />

      <button
        className={`min-w-[69.76px] h-9 rounded-[35px] hover:shadow-2xs hover:shadow-black transition-all duration-300 cursor-pointer bg-[linear-gradient(104.91deg,#2ABAE9_0%,#1B77CC_100%)] flex items-center justify-center ${buttonClass}`}
      >
        <Icons icon={"arrowRight"}  />
      </button>
    </div>
  );
};

export default CommonInput;
