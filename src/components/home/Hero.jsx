import React from "react";
import Navbar from "../common/Navbar";
import CommonInput from "../common/CommonInput";

const Hero = () => {
  return (
    <section className=" relative bg-[linear-gradient(180deg,rgba(44,185,233,0.3)_0%,rgba(98,104,250,0.3)_23.05%,rgba(255,255,255,0.3)_71.54%,rgba(255,255,255,0.3)_103.55%)]">
      <Navbar />
      <img
        className=" absolute top-30 h-20.25 pointer-events-none right-0 "
        src="/assets/hrightbox.webp"
        alt=""
      />
      <img
        className="absolute top-0 right-0 pointer-events-none  w-[462.21px] h-[597.29px]"
        src="/assets/hero-right.webp"
        alt=""
      />
      <img
        className=" absolute w-[428.72px] h-[559.28px] -bottom-47 left-0 "
        src="/assets/hbottomleft.webp"
        alt=""
      />
      <img
        className="absolute md:w-[51.50px] w-9 md:h-[81.43px] h-15 top-[237.9px] left-0 "
        src="/assets/heroboxleft.webp"
        alt=""
      />

      <div className="max-w-285  mx-auto mt-[33.94px] px-4">
        <div className="max-w-206.5 mx-auto text-center flex justify-center flex-col items-center">
          <div className="bg-white max-w-67.75 rounded-3xl items-center  py-1.25 px-3.25">
            <p className=" md:text-[16px] text-[14px]  font-normal leading-[120%] para bg-[linear-gradient(90.79deg,#994FFF_0.27%,#4AB6FE_98.57%)] bg-clip-text text-transparent">
              Empowering Autopilot Automation
            </p>
          </div>
          <h1 className="font-semibold  lg:text-[54px] md:text-[48px] text-[36px] leading-[120%] mt-2 para">
            Superpower your business finance
          </h1>
          <h2 className="font-normal lg:text-2xl md:text-[20px] text-[16px] leading-[120%] mt-2">
            Be empowered to completely run your finances on autopilot
          </h2>
        </div>
        <CommonInput />
        <div>
          <img className="" src="/assets/Component.webp" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
