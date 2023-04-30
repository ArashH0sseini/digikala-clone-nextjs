import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import Slide1 from "../assets/images/slide1.gif";
import Slide2 from "../assets/images/slide2.jpg";
import Slide3 from "../assets/images/slide3.gif";
import Slide4 from "../assets/images/slide4.jpg";
import Slide5 from "../assets/images/slide5.jpg";
import Slide6 from "../assets/images/slide6.gif";
import Slide7 from "../assets/images/slide7.jpg";
import Slide8 from "../assets/images/slide8.jpg";
import Slide9 from "../assets/images/slide9.jpg";

export default function Slider() {
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
        className="h-[16.7rem] hover:cursor-pointer mySwiper"
      >
        <SwiperSlide>
          <Image src={Slide1} alt="" objectFit="cover" layout="fill" quality="100" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Slide2} alt="" objectFit="cover" layout="fill" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Slide3} alt="" objectFit="cover" layout="fill" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Slide4} alt="" objectFit="cover" layout="fill" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Slide5} alt="" objectFit="cover" layout="fill" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Slide6} alt="" objectFit="cover" layout="fill" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Slide7} alt="" objectFit="cover" layout="fill" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Slide8} alt="" objectFit="cover" layout="fill"/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Slide9} alt="" objectFit="cover" layout="fill" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
