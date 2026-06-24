import React, { useState } from "react";
import Heading from "../common/Heading";
import { FAQ_DATA } from "../../utils/helper";
import Icons from "../common/Icons";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-4 py-20">
      <div className="max-w-289 mx-auto">
        <div className="flex flex-col justify-center items-center lg:mb-12">
          <div className="w-[143.77px] border-[3px] border-sky rounded-2xl mb-2.5"></div>
          <Heading heading={"Frequently Awesome Questions"} vari={"not"} />
        </div>

        <div className="flex flex-row justify-between items-center gap-10 max-lg:flex-col">
          <img
            className="max-w-126.25 w-full h-auto"
            src="/assets/faq.webp"
            alt="FAQ"
          />

          <div className="max-w-162.5 w-full">
            {FAQ_DATA.map((section, index) => (
              <div
                key={index}
                className={`border-b border-dim-white  ${
                  index === 0 ? "border-b border-light-gray" : ""
                }`}
              >
                <div
                  className="flex justify-between items-center transition-all duration-300  lg:py-5 md:py-4 sm:py-3 py-2 cursor-pointer"
                  onClick={() => toggleAccordion(index)}
                >
                  <h3
                    className={`lg:text-base md:text-[14px] text-[12px]  font-medium leading-[150%] transition-all duration-300  pr-4 ${openIndex === index ? "text-sky" : "text-dim-gray"}`}
                  >
                    {section.heading}
                  </h3>

                  <Icons icon={openIndex === index ? "minus" : "plus"} />
                </div>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index
                      ? "max-h-40 opacity-100 pb-5"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className=" lg:text-sm md:text-[12px] text-[10px] leading-[160%] text-gray">
                    {section.para}
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

export default Faq;
