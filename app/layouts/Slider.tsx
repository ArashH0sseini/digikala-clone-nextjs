import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { imageSlider } from "../constants/imageSlider";

const Slider = () => {
  const slides = imageSlider();
  return (
    <>
      <Swiper
        dir="rtl"
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Navigation, Pagination]}
        className="h-[16.7rem] lg:h-[400px] hover:cursor-pointer mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Image src={slide.image} alt="" objectFit="cover" layout="fill" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
