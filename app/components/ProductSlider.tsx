import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation } from "swiper";
import Toman from "./shared/Toman";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { amazingProductsData } from "../constants/amazingProducts";

export default function ProductSlider() {
  const products = amazingProductsData();
  return (
    <>
      <Swiper
        slidesPerView={1.2}
        breakpoints={{
          360: {
            slidesPerView: 1.5,
            spaceBetween: 5,
          },
          460: {
            slidesPerView: 1.8,
            spaceBetween: 5,
          },
          560: {
            slidesPerView: 2.2,
            spaceBetween: 5,
          },
          640: {
            slidesPerView: 3.2,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 3.8,
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 4.8,
            spaceBetween: 5,
          },
          1280: {
            slidesPerView: 6.2,
            spaceBetween: 5,
          },
        }}
        spaceBetween={10}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        className="h-56 mySwiper"
        style={{ paddingLeft: "20px" }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div
              className={`bg-white h-full flex flex-col items-center justify-center
             ${index === 0 ? "rounded-r-lg" : "rounded-none"} ${
                index === 11 ? "rounded-l-lg" : "rounded-none"
              }`}
            >
              <div className="h-36">
                <Image
                  src={product.image}
                  alt=""
                  objectFit="cover"
                  width={150}
                  height={150}
                />
              </div>
              <div className="h-14">
                <div className="flex flex-col">
                  <div className="flex w-full items-start justify-center space-x-7 space-x-reverse mt-2">
                    <span className="bg-[#ef4056] text-white text-xs px-2 mt-1 rounded-full">
                      {product.discount}
                    </span>
                    <div className="flex items-center space-x-1 space-x-reverse">
                      <span className="text-gray-600 text-base font-semibold">
                        {product.discountPrice}
                      </span>
                      <Toman />
                    </div>
                  </div>
                  <span className="text-gray-300 text-left pl-5 text-xs line-through w-full py-1">
                    {product.price}
                  </span>
                </div>
                {product.timer ? (
                  <div className="relative bg-gray-200 h-1 w-full m-auto rounded-full">
                    <div style={{width:product.timer}} className="absolute left-0 h-1 bg-[#ef4056] rounded-full"></div>
                  </div>
                ) : null}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
