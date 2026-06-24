import React, { useEffect, useState } from "react";
import { NAV_DATA } from "../../utils/helper";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const path = useLocation().pathname;

  useEffect(() => {
    document.body.style.overflow = nav ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [nav]);

  return (
    <div className="px-4  py-4.25 ">
      <div className="max-w-285 mx-auto flex flex-row justify-between items-center">
        <img
          className="md:w-[169.98px] md:h-14 cursor-pointer  w-35"
          src="/assets/LOgo.webp"
          alt="logo"
        />
        <div className="flex flex-row items-center md:gap-8 gap-6">
          <ul
            className={`flex flex-row md:gap-8.25 gap-6 max-sm:fixed max-sm:top-0 max-sm:w-full max-sm:h-screen max-sm:bg-white max-sm:z-50 max-sm:flex-col max-sm:justify-center max-sm:items-center transition-all duration-500 ${nav ? "max-sm:right-0" : "max-sm:-right-full"} `}
          >
            {" "}
            {NAV_DATA.map((item, index) => (
              <Link to={item.link} key={index} onClick={() => setNav(false)}>
                <li
                  className={` md:text-[16px] text-[14px] font-normal leading-[119%] text-gunmetal hover:text-sky transition-all duration-300 ${item.link === path ? "active" : ""}`}
                >
                  {item.title}
                </li>
              </Link>
            ))}
          </ul>
          <button className="sm:px-6 sm:py-3 px-5 py-2 bg-white rounded-[100px] text-sky font-semibold sm:text-[16px] text-[14px] hover:text-white hover:bg-sky duration-300 transition-all cursor-pointer leading-[119%]">
            Log In
          </button>
        </div>
        <button
          onClick={() => setNav(!nav)}
          className="sm:hidden relative w-6 h-6 z-60 cursor-pointer"
        >
          <span
            className={`absolute left-0 w-6 h-1 bg-black rounded transition-all duration-300 ${
              nav ? "rotate-45 top-2.5" : "top-0"
            }`}
          ></span>

          <span
            className={`absolute left-0 w-6 h-1 bg-black rounded transition-all duration-300 ${
              nav ? "opacity-0" : "top-2.5"
            }`}
          ></span>

          <span
            className={`absolute left-0 w-6 h-1 bg-black rounded transition-all duration-300 ${
              nav ? "-rotate-45 top-2.5" : "top-5"
            }`}
          ></span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
