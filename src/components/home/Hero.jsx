import React from "react";
import Navbar from "../common/Navbar";
import CommonInput from "../common/CommonInput";

const Hero = () => {
  return (
    <section className="pb-12.5 bg-[linear-gradient(180deg,rgba(44,185,233,0.3)_0%,rgba(98,104,250,0.3)_23.05%,rgba(255,255,255,0.3)_71.54%,rgba(255,255,255,0.3)_103.55%)]">
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

      <div className="max-w-285 relative mx-auto mt-[33.94px] px-4">
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
        <img
          className=" absolute w-[428.72px] lg:h-[559.28px] md:120 sm:h-100 h-70 md:-bottom-50 sm:-bottom-40 -bottom-20 left-0  "
          src="public/assets/hbottomleft.webp"
          alt=""
        />
      </div>
    </section>
  );
};

export default Hero;
