import React from "react";
import Icons from "./Icons";
import { FOOTER_LINKS } from "../../utils/helper";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section className="bg-[linear-gradient(223.31deg,#FBC524_-34.99%,#E939D9_21.89%,#2ABAE9_74.4%)] pt-14 sm:pt-20 lg:pt-[106.83px] text-center pb-5 sm:pb-[22.1px]">
      <div className="max-w-360 w-full mx-auto flex flex-col sm:flex-row justify-center gap-10 lg:gap-84.75 px-3">
        <div className="max-w-[420.36px] w-full flex flex-col  md:items-start md:mx-0 max-sm:mt-4">
          <img
            src="/assets/footer-logo.webp"
            className="w-[169.98px] h-14"
            alt="footer-logo"
          />
          <p className="mt-3 font-medium text-[14px] leading-[150%] text-soft-periwinkle text-left">
            The is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>

          <div className="flex items-center gap-4 mt-3">
            <div className="bg-white w-8 h-8 flex justify-center items-center rounded-full shadow-[0px_4px_14px_0px_#00000026] cursor-pointer hover:scale-120  transition-all duration-300 ">
              <Icons icon="facebook" />
            </div>
            <div className="bg-white w-8 h-8 flex justify-center items-center rounded-full shadow-[0px_4px_14px_0px_#00000026] cursor-pointer hover:scale-120 transition-all duration-300">
              <Icons icon="instagram" />
            </div>
            <div className="bg-white w-8 h-8 flex justify-center items-center rounded-full shadow-[0px_4px_14px_0px_#00000026] cursor-pointer hover:scale-120 transition-all duration-300">
              <Icons icon="twiter" />
            </div>
            <div className="bg-white w-8 h-8 flex justify-center items-center rounded-full shadow-[0px_4px_14px_0px_#00000026] cursor-pointer hover:scale-120 transition-all duration-300">
              <Icons icon="inLink" />
            </div>
          </div>
        </div>

        <div className="max-w-95 w-full ">
          <div className="flex md:flex-row flex-col gap-8 sm:gap-12 lg:gap-16">
            {FOOTER_LINKS.map((section, index) => (
              <div key={index} className="gap-2.5 flex flex-col items-start">
                <h3 className="font-semibold lg:text-[20px] md:text-[18px] text-[16px] leading-[100%] text-white">
                  {section.title}
                </h3>

                <ul className="text-white space-y-3.5 text-start">
                  {section.links.map((link, idx) => (
                    <li
                      key={idx}
                      className="font-medium lg:text-[14px] text-[12px] leading-[100%]"
                    >
                      <Link to={"/"}>{link}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full border-2 border-royal-blue md:mt-12 sm;mt-10 mt-8  sm:mt-16 lg:mt-[86.82px] mb-[15.84px]"></div>

      <span className="font-semibold text-[14px] sm:text-[16px] lg:text-[18px] leading-[177.78%] text-baby-blue px-3 inline-block">
        Copyright {currentYear} JesMor Enterprises, All Rights Reserved.
      </span>
    </section>
  );
};

export default Footer;
