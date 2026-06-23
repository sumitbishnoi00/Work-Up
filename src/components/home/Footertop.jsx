import React from "react";
import Heading from "../common/Heading";
import CommonInput from "../common/CommonInput";

const Footertop = () => {
  return (
    <section className="px-4 ">
      <div className='max-w-243.25 rounded-2xl mx-auto bg-[url("/assets/bgseacching.webp")] bg-center bg-cover min-h-56.25 justify-items-center'>
        <div className="max-w-190.25 text-center pt-[41.45px] px-3 pb-12.25 flex flex-col ">
          <Heading heading={"Join Free Demo"} vari={"sec"} />
          <CommonInput />
        </div>
      </div>
    </section>
  );
};

export default Footertop;
