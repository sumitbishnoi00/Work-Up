import React from "react";
import Heading from "../common/Heading";
import CommonInput from "../common/CommonInput";

const Waitlist = () => {
  return (
    <section className="px-4 ">
      <div className="max-w-190.25 text-center pt-[29.74px] px-3 pb-11.75 flex flex-col rounded-2xl bg-[linear-gradient(104.91deg,#2ABAE9_0%,#1B77CC_100%)] mx-auto">
        <Heading heading={"Join our waitlist"} vari={"sec"} />
        <CommonInput />
      </div>
    </section>
  );
};

export default Waitlist;
