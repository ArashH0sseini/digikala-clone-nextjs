import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid } from "swiper";
import Offer1 from "../assets/images/offer1.jpg";
import Offer2 from "../assets/images/offer2.jpg";
import Offer3 from "../assets/images/offer3.jpg";
import Offer4 from "../assets/images/offer4.jpg";
import Offer5 from "../assets/images/offer5.jpg";
import Offer6 from "../assets/images/offer6.jpg";
import Offer7 from "../assets/images/offer7.jpg";
import Offer8 from "../assets/images/offer8.jpg";
import Offer9 from "../assets/images/offer9.jpg";
import Offer10 from "../assets/images/offer10.jpg";
import Offer11 from "../assets/images/offer11.jpg";
import Offer12 from "../assets/images/offer12.jpg";
import Offer13 from "../assets/images/offer13.jpg";
import Offer14 from "../assets/images/offer14.jpg";

function ProductsOffer() {
  return (
    <div className="px-6">
      <h3 className="text-center text-xl mb-8">پیشنهاد دیجی‌کالا</h3>
      <div className="border-2 rounded-2xl cursor-pointer">
        <Swiper
          slidesPerView={4.5}
          breakpoints={{
            360: {
              slidesPerView: 2,
              spaceBetween:0,
              grid:{
                rows:2
              }
            },
            460: {
              slidesPerView: 2.8,
              spaceBetween:0,
              grid:{
                rows:2
              }
            },
            560: {
              slidesPerView: 3.3,
              spaceBetween:0,
              grid:{
                rows:2
              }
            },
            640: {
              slidesPerView: 3.8,
              spaceBetween:0,
              grid:{
                rows:2
              }
            },
            768: {
              slidesPerView: 4.5,
              spaceBetween:0,
              grid:{
                rows:2
              }
            },
            1024: {
              slidesPerView: 5.5,
              spaceBetween:0,
              grid:{
                rows:2
              }
            },
            1280: {
              slidesPerView: 7,
              spaceBetween:0,
              grid:{
                rows:2
              }
            },
          }}
          grid={{
            rows: 2,
            fill: "row",
          }}
          spaceBetween={0}
          modules={[Grid]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex flex-col space-y-2 items-center justify-center border-[1px] border-t-0 border-r-0 w-40 h-40">
              <div className="flex items-center justify-center w-20 h-20 bg-white border-2 rounded-full">
                <Image
                  src={Offer1}
                  alt=""
                  width={50}
                  height={50}
                  objectFit="cover"
                />
              </div>
                <span className="text-xs">گوشی موبایل</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col space-y-2 items-center justify-center border-[1px] border-t-0 border-r-0 w-40 h-40">
              <div className="flex items-center justify-center w-20 h-20 bg-white border-2 rounded-full">
                <Image
                  src={Offer2}
                  alt=""
                  width={50}
                  height={50}
                  objectFit="cover"
                />
              </div>
                <span className="text-xs">ساعت هوشمند</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col space-y-2 items-center justify-center border-[1px] border-t-0 border-r-0 w-40 h-40">
              <div className="flex items-center justify-center w-20 h-20 bg-white border-2 rounded-full">
                <Image
                  src={Offer3}
                  alt=""
                  width={50}
                  height={50}
                  objectFit="cover"
                />
              </div>
                <span className="text-xs">لپ تاپ و الترابوک</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col space-y-2 items-center justify-center border-[1px] border-t-0 border-r-0 w-40 h-40">
              <div className="flex items-center justify-center w-20 h-20 bg-white border-2 rounded-full">
                <Image
                  src={Offer4}
                  alt=""
                  width={50}
                  height={50}
                  objectFit="cover"
                />
              </div>
                <span className="text-xs">اسپیکر (بلندگو)</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col space-y-2 items-center justify-center border-[1px] border-t-0 border-r-0 w-40 h-40">
              <div className="flex items-center justify-center w-20 h-20 bg-white border-2 rounded-full">
                <Image
                  src={Offer5}
                  alt=""
                  width={50}
                  height={50}
                  objectFit="cover"
                />
              </div>
                <span className="text-xs">کیف و کاور گوشی</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col space-y-2 items-center justify-center border-[1px] border-t-0 border-r-0 w-40 h-40">
              <div className="flex items-center justify-center w-20 h-20 bg-white border-2 rounded-full">
                <Image
                  src={Offer6}
                  alt=""
                  width={50}
                  height={50}
                  objectFit="cover"
                />
              </div>
                <span className="text-xs">هدفون و هدست و...</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col space-y-2 items-center justify-center border-[1px] border-t-0 border-r-0 border-l-0  w-40 h-40">
              <div className="flex items-center justify-center w-20 h-20 bg-white border-2 rounded-full">
                <Image
                  src={Offer7}
                  alt=""
                  width={50}
                  height={50}
                  objectFit="cover"
                />
              </div>
                <span className="text-xs">موتورسیکلت</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col space-y-2 items-center justify-center border-[1px] border-t-0 border-r-0 w-40 h-40">
              <div className="flex items-center justify-center w-20 h-20 bg-white border-2 rounded-full">
                <Image
                  src={Offer8}
                  alt=""
                  width={50}
                  height={50}
                  objectFit="cover"
                />
              </div>
                <span className="text-xs">کنسول خانگی</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col space-y-2 items-center justify-center border-[1px] border-t-0 border-r-0 w-40 h-40">
              <div className="flex items-center justify-center w-20 h-20 bg-white border-2 rounded-full">
                <Image
                  src={Offer9}
                  alt=""
                  width={50}
                  height={50}
                  objectFit="cover"
                />
              </div>
                <span className="text-xs">استند و پایه...</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col space-y-2 items-center justify-center border-[1px] border-t-0 border-r-0 w-40 h-40">
              <div className="flex items-center justify-center w-20 h-20 bg-white border-2 rounded-full">
                <Image
                  src={Offer10}
                  alt=""
                  width={50}
                  height={50}
                  objectFit="cover"
                />
              </div>
                <span className="text-xs">کیبورد  (صفحه کلید)</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col space-y-2 items-center justify-center border-[1px] border-t-0 border-r-0 w-40 h-40">
              <div className="flex items-center justify-center w-20 h-20 bg-white border-2 rounded-full">
                <Image
                  src={Offer11}
                  alt=""
                  width={50}
                  height={50}
                  objectFit="cover"
                />
              </div>
                <span className="text-xs">تبلت</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col space-y-2 items-center justify-center border-[1px] border-t-0 border-r-0  w-40 h-40">
              <div className="flex items-center justify-center w-20 h-20 bg-white border-2 rounded-full">
                <Image
                  src={Offer12}
                  alt=""
                  width={50}
                  height={50}
                  objectFit="cover"
                />
              </div>
                <span className="text-xs">جوراب زنانه</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col space-y-2 items-center justify-center border-[1px] border-t-0 border-r-0 w-40 h-40">
              <div className="flex items-center justify-center w-20 h-20 bg-white border-2 rounded-full">
                <Image
                  src={Offer13}
                  alt=""
                  width={50}
                  height={50}
                  objectFit="cover"
                />
              </div>
                <span className="text-xs">لباس زیر</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col space-y-2 items-center justify-center border-[1px] border-t-0 border-r-0 border-l-0  w-40 h-40">
              <div className="flex items-center justify-center w-20 h-20 bg-white border-2 rounded-full">
                <Image
                  src={Offer14}
                  alt=""
                  width={50}
                  height={50}
                  objectFit="cover"
                />
              </div>
                <span className="text-xs">جوراب مردانه</span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default ProductsOffer;
