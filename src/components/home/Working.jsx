import React from "react";
import Heading from "../common/Heading";
import { WORKING_DATA } from "../../utils/helper";

const Working = () => {
  return (
    <section className=" bg-ice-blue pt-[53.95px] pb-8 px-4">
      <div className="flex flex-col justify-center items-center">
        <div className="w-[143.77px] border-[3px] border-sky rounded-2xl mb-2.5"></div>
        <Heading heading={"How it’s working"} vari={"not"} />
      </div>
      <div className="flex lg:flex-row flex-col max-w-285 mx-auto justify-between items-center">
        <img
          className="lg:w-[703.53px] lg:h-[722.70px] md:w-150 lg:-mt-16.75 lg:-ml-50 object-center object-cover "
          src="/assets/working.webp"
          alt="rkmfe,"
        />
        <div className="flex items-center">
          <img
            className="md:w-[45.74px] md:h-[269.43px] h-50 left-[50%]"
            src="/assets/workingsvg.webp"
            alt=""
          />
          <div className="flex flex-col gap-4  ">
            {WORKING_DATA.map((item, index) => (
              <div
                key={index}
                className="md:px-5.5 md:py-4 px-4 py-3 bg-white rounded-xl max-w-[500.85px] gap-4 justify-center flex flex-row border-b-2 hover:border-b-transparent hover:shadow-[0px_10px_22px_0px_#0000000D] duration-300 transition-all border-b-sogt-gray"
              >
                <img
                  className="lg:w-12.5 md:w-10 sm:w-8 w-6 md:h-10 sm:h-8 h-6 lg:h-12.5"
                  src={item.image}
                  alt=""
                />
                <div className="">
                  <h3 className="lg:text-[20px] md:text-[18px] text-[16px] font-medium leading-[150%] para text-black">
                    {item.heading}
                  </h3>
                  <p className="lg:text-[16px] md:text-[14px] text-[12px] font-normal leading-[160%] text-dim-gray md:mt-1 mt-0.5">
                    {item.para}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Working;
