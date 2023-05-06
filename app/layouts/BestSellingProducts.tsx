import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid } from "swiper";
import Brand1 from "../assets/images/Brand1.png";
import { HiFire } from "react-icons/hi";

function BestSellingProducts() {
  return (
    <div className="my-10 px-6 lg:px-0">
      <div className="lg:border-[1px] rounded-2xl lg:py-8">
        <div className="flex items-center justify-center space-x-2 space-x-reverse mb-6">
          <HiFire className="text-orange-400 w-6 h-6" />
          <h3 className="text-center text-xl">پرفروش‌ترین کالاها</h3>
        </div>
        <Swiper
          slidesPerView={4.5}
          breakpoints={{
            360: {
              slidesPerView: 2,
              spaceBetween: 0,
              grid: {
                rows: 3,
              },
            },
            460: {
              slidesPerView: 2.8,
              spaceBetween: 0,
              grid: {
                rows: 3,
              },
            },
            560: {
              slidesPerView: 3.3,
              spaceBetween: 0,
              grid: {
                rows: 3,
              },
            },
            640: {
              slidesPerView: 3.8,
              spaceBetween: 0,
              grid: {
                rows: 3,
              },
            },
            768: {
              slidesPerView: 4.5,
              spaceBetween: 0,
              grid: {
                rows: 3,
              },
            },
            1024: {
              slidesPerView: 5.5,
              spaceBetween: 0,
              grid: {
                rows: 3,
              },
            },
            1280: {
              slidesPerView: 7,
              spaceBetween: 0,
              grid: {
                rows: 3,
              },
            },
          }}
          grid={{
            rows: 3,
            fill: "row",
          }}
          spaceBetween={0}
          modules={[Grid]}
          className="mySwiper"
        >
          <SwiperSlide className="ml-2 w-72 grow">
            <div className="flex items-center">
              <div className="flex items-center justify-center h-28 w-36 ">
                <Image src={Brand1} alt="" objectFit="cover" />
              </div>
              <div className="flex items-center w-full space-x-4 space-x-reverse h-full">
                <span className="text-cyan-500 text-xl">1</span>
                <h3 className="border-b-[1px] text-xs">زعفران سحرخیز - 4.608 گرم</h3>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default BestSellingProducts;
