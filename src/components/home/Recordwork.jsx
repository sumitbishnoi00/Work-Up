import React from "react";
import { RECORD_DATA } from "../../utils/helper";
const Recordwork = () => {
  return (
    <section className="px-4 relative lg:mt-27 md:mt-28 sm:mt-20 mt-15">
      <div className="max-w-285 rounded-xl mx-auto px-29.75 lg:py-13 md:py-10 sm:py-8 py-6 bg-[linear-gradient(90.79deg,#994FFF_0.27%,#4AB6FE_98.57%),linear-gradient(226.79deg,#E939D9_-11.53%,#2ABAE9_92.1%)]">
        <div className="flex flex-row justify-between max-lg:flex-wrap max-lg:gap-5 max-lg:justify-center">
          {RECORD_DATA.map((item, index) => (
            <div
              key={index}
              className="flex items-stretch border border-transparent"
            >
              <div className="flex flex-col text-center flex-nowrap whitespace-nowrap">
                <h2 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl  font-semibold leading-[120%] text-white">
                  {item.number}
                </h2>
                <p className="md:text-[16px] sm:text-[14px] text-[12px]  font-normal leading-[150%] text-light-ice mt-2">
                  {item.para}
                </p>
              </div>
              {index !== RECORD_DATA.length - 1 && (
                <>
                  <div className=" lg:w-px lg:bg-white mx-13.25 max-lg:hidden"></div>
                  <div className="hidden max-lg:block max-w-[225.25px] w-full "></div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      <img
        className="w-[104.14px] h-[190.91px] -z-1 -left-4 absolute -top-30"
        src="/assets/recordleft.webp"
        alt=""
      />
      <img
        className="w-[28.37px] h-[81.91px] -z-1 left-0 absolute top-16"
        src="/assets/recordleft2.webp"
        alt=""
      />
    </section>
  );
};

export default Recordwork;
