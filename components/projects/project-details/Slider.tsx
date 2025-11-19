"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import BodyText from "@/components/globals/typography/BodyText";

const images = [
  { img: "/project-details/s1.jpg" },
  { img: "/project-details/s1.jpg" },
  { img: "/project-details/s1.jpg" },
  { img: "/project-details/s1.jpg" },
  { img: "/project-details/s1.jpg" },
];

const Slider = () => {
  const [current, setCurrent] = useState(1);
  return (
    <div className="relative w-full h-[580px]">
      {/* Swiper */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={(swiper) => setCurrent(swiper.activeIndex + 1)}
        navigation={{
          prevEl: ".prevBtn",
          nextEl: ".nextBtn",
        }}
        className="w-full h-full"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[580px]">
              <Image src={item.img} alt="" fill className="object-cover" />
              {/* <div className="absolute inset-0 bg-black/40"></div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Controls bottom-center */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-8 z-99">
        {/* Counter */}
        <div className="bg-dark1 border border-primary flex items-center justify-center  rounded-[2px] w-22 h-8">
          <BodyText variant="body-sm" className="text-primary">
            {current}/{images.length}
          </BodyText>
        </div>
        {/* navigation */}
        <div className="flex items-center gap-2">
          {/* Prev */}
          <button
            className={`prevBtn ${
              current === 1
                ? "bg-transparent border border-primary"
                : "border border-primary"
            }  w-8 h-8 flex items-center justify-center rounded-[2px]`}
          >
            <Image
              src="/globals/left-arrow.svg"
              width={13}
              height={13}
              alt="left nav"
            />
          </button>

          {/* Next */}
          <button
            className={`nextBtn ${
              current === images.length
                ? "bg-transparent border border-primary"
                : "bg-primary"
            } w-8 h-8 flex items-center justify-center rounded-[2px]`}
          >
            <Image
              src="/globals/right-arrow.svg"
              width={13}
              height={13}
              alt="left nav"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
