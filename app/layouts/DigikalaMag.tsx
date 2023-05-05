import Image from "next/image";
import React from "react";
import { HiChevronLeft } from "react-icons/hi";
import Mag1 from "../assets/images/mag1.jpg";
import Mag2 from "../assets/images/mag2.jpg";
import Mag3 from "../assets/images/mag3.jpg";
import Mag4 from "../assets/images/mag4.jpg";

function DigikalaMag() {
  return (
    <div className="mt-8 mb-20">
      <div className="flex items-center justify-between p-5">
        <h3>خواندنی ها</h3>
        <div className="bg-white flex items-center justify-center cursor-pointer text-cyan-500">
          <span className="text-xs">مطالب بیشتر در دیجی کالا مگ</span>
          <HiChevronLeft />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-1 px-6 lg:px-0 space-y-4 lg:space-y-0 space-x-0 lg:space-x-2 lg:space-x-reverse">
        <div className="flex flex-col rounded-lg overflow-hidden border-[1px]">
          <div className="relative w-full aspect-[610/380]">
            <Image src={Mag1} alt="" objectFit="contain" layout="fill" />
          </div>
          <p className="text-[12px] px-4 leading-6 py-3">
            بررسی تبلت گلکسی تب S8 اولترا؛ غول‌پیکر و همه‌فن‌حریف
          </p>
        </div>
        <div className="flex flex-col rounded-lg overflow-hidden border-[1px]">
          <div className="relative w-full aspect-[610/380]">
            <Image src={Mag2} alt="" objectFit="contain" layout="fill" />
          </div>
          <p className="text-[12px] px-4 leading-6 py-3">
            ۸ هارد اکسترنال برتر که می‌توانید اردیبهشت امسال از دیجی کالا بخرید
          </p>
        </div>
        <div className="flex flex-col rounded-lg overflow-hidden border-[1px]">
          <div className="relative w-full aspect-[610/380]">
            <Image src={Mag3} alt="" objectFit="contain" layout="fill" />
          </div>
          <p className="text-[12px] px-4 leading-6 py-3">
            بررسی بازی کارتی لوتوس؛ بازی چشم بسته
          </p>
        </div>
        <div className="flex flex-col rounded-lg overflow-hidden border-[1px]">
          <div className="relative w-full aspect-[610/380]">
            <Image src={Mag4} alt="" objectFit="contain" layout="fill" />
          </div>
          <p className="text-[12px] px-4 leading-6 py-3">
            ۷ توصیه‌ی مهم که قبل از خرید پرینتر سه بعدی باید در نظر بگیرید
          </p>
        </div>
      </div>
    </div>
  );
}

export default DigikalaMag;
