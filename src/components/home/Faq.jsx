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
        <div className="flex flex-col justify-center items-center mb-12">
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
                className={`border-b border-dim-white ${
                  index === 0 ? "border-b border-light-gray" : ""
                }`}
              >
                <div
                  className="flex justify-between items-center py-5 cursor-pointer"
                  onClick={() => toggleAccordion(index)}
                >
                  <h3 className={`text-base font-medium leading-[150%]  pr-4 ${openIndex === index ? "text-sky" : "text-dim-gray"}`}>
                    {section.heading}
                  </h3>

                  <Icons icon={openIndex === index ? "minus" : "plus"} />
                </div>

                {openIndex === index && (
                  <div className="pb-5">
                    <p className="text-sm leading-[160%] text-gray">
                      {section.para}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
