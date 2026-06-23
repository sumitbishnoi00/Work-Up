import React from "react";
import Heading from "../common/Heading";
import { CARD_DATA } from "../../utils/helper";

const Card = () => {
  return (
    <section className="px-4 lg:pt-34.25 md:pt-30 sm:pt-25 pt-15 lg:pb-27 md:pb-23 sm:pb-18 pb-12 ">
      <div className="max-w-285 mx-auto text-center">
        <div className="flex flex-col justify-center items-center">
          <div className="w-[143.77px] border-[3px] border-sky rounded-2xl mb-2.5"></div>
          <Heading heading={"Problem We are solving"} vari={"not"} />
        </div>
        <div className="grid md:grid-cols-3 grid-cols-2 max-[552px]:grid-cols-1 justify-items-center gap-5 text-left lg:mt-19 md:mt-16 sm:mt-13
         mt-10">
          {CARD_DATA.map((item, index) => (
            <div
              key={index}
              className={`max-w-91 rounded-xl border hover:border-transparent hover:shadow-[0px_6px_13px_0px_#0000001A] transition-all duration-300 cursor-pointer border-sogt-gray ${item.cardp}`}
            >
              <img
                className="w-[57.29px] h-[57.29px]"
                src={item.image}
                alt=""
              />
              <h3 className="text-[20px] font-medium leading-[160%] mt-4 para text-black">{item.heading}</h3>
              <p className="text-[16px] font-normal leading-[160%] text-dim-gray mt-3.25">{item.para}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Card;
