import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation } from "swiper";
import Product1 from "../assets/images/product1.webp";
import Product2 from "../assets/images/product2.webp";
import Product3 from "../assets/images/product3.webp";
import Product4 from "../assets/images/product4.webp";
import Product5 from "../assets/images/product5.webp";
import Product6 from "../assets/images/product6.webp";
import Product7 from "../assets/images/product7.webp";
import Product8 from "../assets/images/product8.webp";
import Product9 from "../assets/images/product9.webp";
import Product10 from "../assets/images/product10.webp";
import Product11 from "../assets/images/product11.webp";
import Product12 from "../assets/images/product12.webp";
import Toman from "../components/shared/Toman";
import { HiOutlineArrowLeft } from "react-icons/hi";

export default function ProductSlider() {
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
        navigation={true}
        freeMode={true}
        modules={[FreeMode, Navigation, Pagination]}
        className="h-56 mySwiper"
      >
        <SwiperSlide>
          <div className="bg-white h-full flex flex-col items-center justify-center rounded-r-lg">
            <div className="h-36">
              <Image
                src={Product1}
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
                    ۸٪
                  </span>
                  <div className="flex items-center space-x-1 space-x-reverse">
                    <span className="text-gray-600 text-base font-semibold">
                      ۵,۸۹۰,۰۰۰
                    </span>
                    <Toman />
                  </div>
                </div>
                <span className="text-gray-300 text-left pl-5 text-xs line-through w-full py-1">
                  ۶,۳۸۴,۰۰۰
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white h-full flex flex-col items-center justify-center ">
            <div className="h-36">
              <Image
                src={Product2}
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
                    ۸٪
                  </span>
                  <div className="flex items-center space-x-1 space-x-reverse">
                    <span className="text-gray-600 text-base font-semibold">
                      ۵,۸۹۰,۰۰۰
                    </span>
                    <Toman />
                  </div>
                </div>
                <span className="text-gray-300 text-left pl-5 text-xs line-through w-full py-1">
                  ۶,۳۸۴,۰۰۰
                </span>
              </div>
              <div className="relative bg-gray-200 h-1 w-full m-auto rounded-full">
                <div className="absolute left-0 h-1 w-[60%] bg-[#ef4056] rounded-full"></div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white h-full flex flex-col items-center justify-center ">
            <div className="h-36">
              <Image
                src={Product4}
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
                    ۸٪
                  </span>
                  <div className="flex items-center space-x-1 space-x-reverse">
                    <span className="text-gray-600 text-base font-semibold">
                      ۵,۸۹۰,۰۰۰
                    </span>
                    <Toman />
                  </div>
                </div>
                <span className="text-gray-300 text-left pl-5 text-xs line-through w-full py-1">
                  ۶,۳۸۴,۰۰۰
                </span>
              </div>
              <div className="relative bg-gray-200 h-1 w-full m-auto rounded-full">
                <div className="absolute left-0 h-1 w-[80%] bg-[#ef4056] rounded-full"></div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white h-full flex flex-col items-center justify-center ">
            <div className="h-36">
              <Image
                src={Product3}
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
                    ۸٪
                  </span>
                  <div className="flex items-center space-x-1 space-x-reverse">
                    <span className="text-gray-600 text-base font-semibold">
                      ۵,۸۹۰,۰۰۰
                    </span>
                    <Toman />
                  </div>
                </div>
                <span className="text-gray-300 text-left pl-5 text-xs line-through w-full py-1">
                  ۶,۳۸۴,۰۰۰
                </span>
              </div>
              <div className="relative bg-gray-200 h-1 w-full m-auto rounded-full">
                <div className="absolute left-0 h-1 w-[40%] bg-[#ef4056] rounded-full"></div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white h-full flex flex-col items-center justify-center ">
            <div className="h-36">
              <Image
                src={Product5}
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
                    ۸٪
                  </span>
                  <div className="flex items-center space-x-1 space-x-reverse">
                    <span className="text-gray-600 text-base font-semibold">
                      ۵,۸۹۰,۰۰۰
                    </span>
                    <Toman />
                  </div>
                </div>
                <span className="text-gray-300 text-left pl-5 text-xs line-through w-full py-1">
                  ۶,۳۸۴,۰۰۰
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white h-full flex flex-col items-center justify-center ">
            <div className="h-36">
              <Image
                src={Product6}
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
                    ۸٪
                  </span>
                  <div className="flex items-center space-x-1 space-x-reverse">
                    <span className="text-gray-600 text-base font-semibold">
                      ۵,۸۹۰,۰۰۰
                    </span>
                    <Toman />
                  </div>
                </div>
                <span className="text-gray-300 text-left pl-5 text-xs line-through w-full py-1">
                  ۶,۳۸۴,۰۰۰
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white h-full flex flex-col items-center justify-center ">
            <div className="h-36">
              <Image
                src={Product7}
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
                    ۸٪
                  </span>
                  <div className="flex items-center space-x-1 space-x-reverse">
                    <span className="text-gray-600 text-base font-semibold">
                      ۵,۸۹۰,۰۰۰
                    </span>
                    <Toman />
                  </div>
                </div>
                <span className="text-gray-300 text-left pl-5 text-xs line-through w-full py-1">
                  ۶,۳۸۴,۰۰۰
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white h-full flex flex-col items-center justify-center ">
            <div className="h-36">
              <Image
                src={Product8}
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
                    ۸٪
                  </span>
                  <div className="flex items-center space-x-1 space-x-reverse">
                    <span className="text-gray-600 text-base font-semibold">
                      ۵,۸۹۰,۰۰۰
                    </span>
                    <Toman />
                  </div>
                </div>
                <span className="text-gray-300 text-left pl-5 text-xs line-through w-full py-1">
                  ۶,۳۸۴,۰۰۰
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white h-full flex flex-col items-center justify-center ">
            <div className="h-36">
              <Image
                src={Product9}
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
                    ۸٪
                  </span>
                  <div className="flex items-center space-x-1 space-x-reverse">
                    <span className="text-gray-600 text-base font-semibold">
                      ۵,۸۹۰,۰۰۰
                    </span>
                    <Toman />
                  </div>
                </div>
                <span className="text-gray-300 text-left pl-5 text-xs line-through w-full py-1">
                  ۶,۳۸۴,۰۰۰
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white h-full flex flex-col items-center justify-center ">
            <div className="h-36">
              <Image
                src={Product10}
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
                    ۸٪
                  </span>
                  <div className="flex items-center space-x-1 space-x-reverse">
                    <span className="text-gray-600 text-base font-semibold">
                      ۵,۸۹۰,۰۰۰
                    </span>
                    <Toman />
                  </div>
                </div>
                <span className="text-gray-300 text-left pl-5 text-xs line-through w-full py-1">
                  ۶,۳۸۴,۰۰۰
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white h-full flex flex-col items-center justify-center ">
            <div className="h-36">
              <Image
                src={Product11}
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
                    ۸٪
                  </span>
                  <div className="flex items-center space-x-1 space-x-reverse">
                    <span className="text-gray-600 text-base font-semibold">
                      ۵,۸۹۰,۰۰۰
                    </span>
                    <Toman />
                  </div>
                </div>
                <span className="text-gray-300 text-left pl-5 text-xs line-through w-full py-1">
                  ۶,۳۸۴,۰۰۰
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white h-full flex flex-col items-center justify-center ">
            <div className="h-36">
              <Image
                src={Product12}
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
                    ۸٪
                  </span>
                  <div className="flex items-center space-x-1 space-x-reverse">
                    <span className="text-gray-600 text-base font-semibold">
                      ۵,۸۹۰,۰۰۰
                    </span>
                    <Toman />
                  </div>
                </div>
                <span className="text-gray-300 text-left pl-5 text-xs line-through w-full py-1">
                  ۶,۳۸۴,۰۰۰
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white cursor-pointer h-full flex flex-col items-center justify-center space-y-3 rounded-l-lg ml-2">
            <HiOutlineArrowLeft className="text-cyan-500 border-[1px] border-cyan-500 w-11 h-11 p-3 rounded-full" />
            <p className="text-gray-700 text-sm font-medium">مشاهده همه</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
