import React from "react";
import { RECORD_DATA } from "../../utils/helper";
const Recordwork = () => {
  return (
    <section className="px-4 lg:mt-32 md:mt-28 sm:mt-20 mt-15">
      <div className="max-w-285 rounded-xl mx-auto px-29.75 py-13 bg-[linear-gradient(90.79deg,#994FFF_0.27%,#4AB6FE_98.57%),linear-gradient(226.79deg,#E939D9_-11.53%,#2ABAE9_92.1%)]">
        <div className="flex flex-row justify-between max-lg:flex-wrap">
          {RECORD_DATA.map((item, index) => (
            <div
              key={index}
              className="flex items-stretch border border-transparent"
            >
              <div className="flex flex-col ">
                <h2 className="text-5xl font-semibold leading-[120%] text-white">
                  {item.number}
                </h2>
                <p className="text-[16px] font-normal leading-[150%] text-light-ice mt-2">
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
    </section>
  );
};

export default Recordwork;
