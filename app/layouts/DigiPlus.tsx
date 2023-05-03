import Image from "next/image";
import React from "react";
import { HiArrowLeft, HiChevronLeft } from "react-icons/hi";
import { RxRocket } from "react-icons/rx";
import Digiplus from "../assets/images/digiplus-logo.svg";
import PlusWidget from "../assets/images/plus-widget.png";
import Plus1 from "../assets/images/plus1.jpg";
import Plus2 from "../assets/images/plus2.jpg";
import Plus3 from "../assets/images/plus3.jpg";
import Plus4 from "../assets/images/plus4.jpg";
import Plus5 from "../assets/images/plus5.jpg";
import Plus6 from "../assets/images/plus6.jpg";
import Plus7 from "../assets/images/plus7.jpg";
import Plus8 from "../assets/images/plus8.jpg";
import Plus9 from "../assets/images/plus9.jpg";
import Plus10 from "../assets/images/plus10.jpg";
import Plus11 from "../assets/images/plus11.jpg";
import Plus12 from "../assets/images/plus12.jpg";

function DigiPlus() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between w-full bg-[#941b80] lg:rounded-2xl mb-10 p-4">
      <div className="pt-2 mb-6 lg:mb-0 lg:pl-0 bg-digiPlus lg:bg-none bg-contain bg-left-bottom bg-no-repeat min-h-[355px] flex-grow-1 xl:max-w-[416px] xl:bg-[length:372px_279px] ">
        <div className="px-4">
          <div className="my-4">
            <Image src={Digiplus} alt="" />
            <p className="text-white text-xs lg:text-sm">
              خدمات ویژه برای اعضای دیجی پلاس
            </p>
          </div>
          <div className="text-white border-[1px] flex items-center justify-between w-28 rounded-lg py-2 px-4">
            <span className="text-sm">عضویت</span>
            <HiArrowLeft className="h-5 w-5" />
          </div>
        </div>
        <div className="hidden lg:block lg:w-80">
          <Image src={PlusWidget} alt="" />
        </div>
      </div>

      <div className="bg-white px-4 lg:w-full rounded-lg">
        <div className="flex items-center justify-between py-3 lg:py-6">
          <div className="flex items-center space-x-2 space-x-reverse">
            <RxRocket className="text-[#941b80] -rotate-45 w-6 h-6" />
            <h3 className="text-sm lg:text-base font-semibold text-gray-700">
              ارسال فوری رایگان
            </h3>
          </div>
          <div className="flex items-center justify-center cursor-pointer text-[#941b80]">
            <span className="text-xs lg:text-sm">مشاهده همه</span>
            <HiChevronLeft />
          </div>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-7 pb-5">
          <div className="flex items-center justify-center cursor-pointer">
            <div className="w-28 h-28 ">
              <Image src={Plus1} alt="" />
            </div>
          </div>

          <div className="flex items-center justify-center cursor-pointer">
            <div className="w-28 h-28 ">
              <Image src={Plus2} alt="" />
            </div>
          </div>

          <div className="flex items-center justify-center cursor-pointer">
            <div className="w-28 h-28 ">
              <Image src={Plus3} alt="" />
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center cursor-pointer">
            <div className="w-28 h-28 ">
              <Image src={Plus4} alt="" />
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center cursor-pointer">
            <div className="w-28 h-28 ">
              <Image src={Plus5} alt="" />
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center cursor-pointer">
            <div className="w-28 h-28 ">
              <Image src={Plus6} alt="" />
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center cursor-pointer">
            <div className="w-28 h-28 ">
              <Image src={Plus7} alt="" />
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center cursor-pointer">
            <div className="w-28 h-28 ">
              <Image src={Plus8} alt="" />
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center cursor-pointer">
            <div className="w-28 h-28 ">
              <Image src={Plus9} alt="" />
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center cursor-pointer">
            <div className="w-28 h-28 ">
              <Image src={Plus10} alt="" />
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center cursor-pointer">
            <div className="w-28 h-28 ">
              <Image src={Plus11} alt="" />
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center cursor-pointer">
            <div className="w-28 h-28 ">
              <Image src={Plus12} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DigiPlus;
