import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Heading from '../common/Heading'
import FeatureCard from "../common/FeatureCard";
import { FEATURES_DATA } from "../../utils/helper";
import Icons from "../common/Icons";


const CardSwiper = () => {

  const swiperRef = useRef(null);
  return (
    <section className=' relative z-20 px-3 pt-10 sm:pt-15 md:pt-20 lg:pt-[105.72px] pb-10 sm:pb-20 md:pb-25 lg:pb-[137.27px] overflow-hidden'>

      <img src="/assets/swiper-right-top.webp" className="w-[107.15px] h-[190.92px] absolute top-13 right-0" alt="swiper-right-top" />
      <img src="/assets/swiper-right-buttom.webp" className="w-12.5 h-[81.44px] absolute top-51 right-0" alt="swiper-right-buttom" />
      <img src="/assets/swiper-bg.webp" className="max-sm:hidden w-[167.51px] h-[157.12px] absolute bottom-22 right-84" alt="swiper-bg" />
      <img src="/assets/swiper-left.webp" className="w-10 h-[81.44px] absolute left-0 top-51" alt="swiper-left" />


      <div className='max-w-360 w-full mx-auto flex flex-col items-center justify-center'>
        <div className='max-w-[155.69px] w-full border-4 border-blue mb-2.5 rounded-full'></div>
        <Heading heading={"Explore Our Features"} vari="pri" />

        <div className="relative mt-8 sm:mt-12 lg:mt-17.5 z-10 flex items-center justify-center gap-4 sm:gap-6 lg:gap-8 w-full">

          <button
            className="feature-prev w-10 h-10 bg-white group hover:bg-[linear-gradient(223.49deg,#FBC524_-75.58%,#E939D9_2.42%,#2ABAE9_74.42%)] hover:text-white duration-500 hover:border-none border rounded-full min-[413px]:flex hidden items-center justify-center text-lg font-bold transition-all shrink-0 cursor-pointer"
          >
            <Icons icon={'prev'} />
          </button>

          <div className="flex-1 min-w-0 max-w-285 w-full">
            <Swiper
              ref={swiperRef}
              modules={[Navigation, Autoplay]}
              loop={true}
              slidesPerView={"auto"}
              spaceBetween={24}
              navigation={{
                nextEl: ".feature-next",
                prevEl: ".feature-prev",
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              speed={800}
              breakpoints={{
                0: { spaceBetween: 12 },
                640: { spaceBetween: 16 },
                1024: { spaceBetween: 24 },
              }}
            >
              {FEATURES_DATA.map((item, index) => (
                <SwiperSlide key={index} className="w-[267.1px]!">
                  <FeatureCard icon={item.icon} title={item.title} desc={item.desc} iconClass={item.iconClass} cardClass={item.cardClass} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <button
            className="feature-next w-10 h-10 bg-white group hover:bg-[linear-gradient(223.49deg,#FBC524_-75.58%,#E939D9_2.42%,#2ABAE9_74.42%)] hover:text-white duration-500 hover:border-none border rounded-full min-[413px]:flex hidden items-center justify-center text-lg font-bold transition-all shrink-0 cursor-pointer"
          >
            <Icons icon={'next'} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default CardSwiper