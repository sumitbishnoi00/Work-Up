import React from "react";
import Navbar from "../common/Navbar";

const Hero = () => {
  return (
    <section className="min-h-200 bg-[linear-gradient(180deg,rgba(44,185,233,0.3)_0%,rgba(98,104,250,0.3)_23.05%,rgba(255,255,255,0.3)_71.54%,rgba(255,255,255,0.3)_103.55%)]">
      <Navbar />
      <div className="max-w-285 mx-auto mt-[33.94px]">
        <div className="max-w-206.5 mx-auto text-center flex justify-center flex-col items-center">
          <div className="bg-white max-w-67.75 rounded-3xl items-center  py-1.25 px-3.25">
            <p className="text-[16px]  font-normal leading-[120%] para bg-[linear-gradient(90.79deg,#994FFF_0.27%,#4AB6FE_98.57%)] bg-clip-text text-transparent">
              Empowering Autopilot Automation
            </p>
          </div>
          <h1 className="font-semibold  text-[54px] leading-[120%] mt-2 para">
            Superpower your business finance
          </h1>
          <h2 className="font-normal text-2xl leading-[120%] mt-2">Be empowered to completely run your finances on autopilot</h2>
        </div>
        <div>
          <img className="" src="/assets/Component.webp" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
