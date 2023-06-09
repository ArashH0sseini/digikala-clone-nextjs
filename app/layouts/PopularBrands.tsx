import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid } from "swiper";
import Brand1 from "../assets/images/brand1.png";
import Brand2 from "../assets/images/brand2.png";
import Brand3 from "../assets/images/brand3.png";
import Brand4 from "../assets/images/brand4.png";
import Brand5 from "../assets/images/brand5.png";
import Brand6 from "../assets/images/brand6.png";
import Brand7 from "../assets/images/brand7.jpg";
import Brand8 from "../assets/images/brand8.png";
import Brand9 from "../assets/images/brand9.png";
import Brand10 from "../assets/images/brand10.jpg";
import Brand11 from "../assets/images/brand11.png";
import Brand12 from "../assets/images/brand12.jpg";
import Brand13 from "../assets/images/brand13.jpg";
import Brand14 from "../assets/images/brand14.png";
import Brand15 from "../assets/images/brand15.png";
import Brand16 from "../assets/images/brand16.png";
import Brand17 from "../assets/images/brand17.png";
import Brand18 from "../assets/images/brand18.jpg";
import Brand19 from "../assets/images/brand19.png";
import Brand20 from "../assets/images/brand20.jpg";
import { BsStars } from "react-icons/bs";

function PopularBrands() {
  return (
    <div className="my-10 px-6 lg:px-0">
      <div className="lg:border-[1px] rounded-2xl lg:py-8">
        <div className="flex items-center justify-center space-x-2 space-x-reverse mb-6">
          <BsStars className="text-yellow-400 w-6 h-6" />
          <h3 className="text-center text-xl">محبوب ترین برندها</h3>
        </div>
        <Swiper
          slidesPerView={4.5}
          breakpoints={{
            360: {
              slidesPerView: 2,
              spaceBetween: 0,
              grid: {
                rows: 1,
              },
            },
            460: {
              slidesPerView: 2.8,
              spaceBetween: 0,
              grid: {
                rows: 1,
              },
            },
            560: {
              slidesPerView: 3.3,
              spaceBetween: 0,
              grid: {
                rows: 1,
              },
            },
            640: {
              slidesPerView: 3.8,
              spaceBetween: 0,
              grid: {
                rows: 1,
              },
            },
            768: {
              slidesPerView: 4.5,
              spaceBetween: 0,
              grid: {
                rows: 1,
              },
            },
            1024: {
              slidesPerView: 5.5,
              spaceBetween: 0,
              grid: {
                rows: 1,
              },
            },
            1280: {
              slidesPerView: 7,
              spaceBetween: 0,
              grid: {
                rows: 1,
              },
            },
          }}
          grid={{
            rows: 1,
            fill: "row",
          }}
          spaceBetween={0}
          modules={[Grid]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex items-center justify-center border-l-[1px] h-28 w-44 p-8">
                <Image
                  src={Brand1}
                  alt=""
                  objectFit="cover"
                />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center border-l-[1px] h-28 w-44 p-8">
                <Image
                  src={Brand2}
                  alt=""
                  objectFit="cover"
                />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center border-l-[1px] h-28 w-44 p-8">
                <Image
                  src={Brand3}
                  alt=""
                  objectFit="cover"
                />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center border-l-[1px] h-28 w-44 p-8">
                <Image
                  src={Brand4}
                  alt=""
                  objectFit="cover"
                />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center border-l-[1px] h-28 w-44 p-8">
                <Image
                  src={Brand5}
                  alt=""
                  objectFit="cover"
                />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center border-l-[1px] h-28 w-44 p-8">
                <Image
                  src={Brand6}
                  alt=""
                  objectFit="cover"
                />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center border-l-[1px] h-28 w-44 p-8">
                <Image
                  src={Brand7}
                  alt=""
                  objectFit="cover"
                />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center border-l-[1px] h-28 w-44 p-8">
                <Image
                  src={Brand8}
                  alt=""
                  objectFit="cover"
                />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center border-l-[1px] h-28 w-44 p-8">
                <Image
                  src={Brand9}
                  alt=""
                  objectFit="cover"
                />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center border-l-[1px] h-28 w-44 p-8">
                <Image
                  src={Brand10}
                  alt=""
                  objectFit="cover"
                />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center border-l-[1px] h-28 w-44 p-8">
                <Image
                  src={Brand11}
                  alt=""
                  objectFit="cover"
                />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center border-l-[1px] h-28 w-44 p-8">
                <Image
                  src={Brand12}
                  alt=""
                  objectFit="cover"
                />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center border-l-[1px] h-28 w-44 p-8">
                <Image
                  src={Brand13}
                  alt=""
                  objectFit="cover"
                />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center border-l-[1px] h-28 w-44 p-8">
                <Image
                  src={Brand14}
                  alt=""
                  objectFit="cover"
                />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center border-l-[1px] h-28 w-44 p-8">
                <Image
                  src={Brand15}
                  alt=""
                  objectFit="cover"
                />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center border-l-[1px] h-28 w-44 p-8">
                <Image
                  src={Brand16}
                  alt=""
                  objectFit="cover"
                />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center border-l-[1px] h-28 w-44 p-8">
                <Image
                  src={Brand17}
                  alt=""
                  objectFit="cover"
                />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center border-l-[1px] h-28 w-44 p-8">
                <Image
                  src={Brand18}
                  alt=""
                  objectFit="cover"
                />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center border-l-[1px] h-28 w-44 p-8">
                <Image
                  src={Brand19}
                  alt=""
                  objectFit="cover"
                />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center border-l-[1px] h-28 w-44 p-8">
                <Image
                  src={Brand20}
                  alt=""
                  objectFit="cover"
                />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default PopularBrands;
