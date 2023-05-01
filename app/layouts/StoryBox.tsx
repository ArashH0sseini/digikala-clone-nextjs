import Image from "next/image";
import React from "react";
import Story1 from "../assets/images/story1.jpeg";
import Story2 from "../assets/images/story2.jpeg";
import Story3 from "../assets/images/story3.jpeg";
import Story4 from "../assets/images/story4.jpeg";
import Story5 from "../assets/images/story5.jpeg";
import Story6 from "../assets/images/story6.jpeg";
import Story7 from "../assets/images/story7.jpeg";
import Story8 from "../assets/images/story8.jpeg";
import Story9 from "../assets/images/story9.jpeg";

function StoryBox() {
  return (
    <div className="hidden lg:flex lg:flex-row lg:items-center lg:justify-between max-w-7xl mx-auto mt-5 mb-7 px-6">
      <div className="flex flex-col items-center space-y-1 cursor-pointer">
        <div className="rounded-full overflow-hidden border-2 border-red-500 w-20 h-20 focus:w-10 focus:h-10 p-[3px]">
          <Image src={Story1} alt="" className="rounded-full" />
        </div>
        <span className="text-sm font-medium">گوشی موبایل</span>
      </div>
      <div className="flex flex-col items-center space-y-1 cursor-pointer">
        <div className="rounded-full overflow-hidden border-2 border-red-500 w-20 h-20 p-[3px]">
          <Image src={Story2} alt="" className="rounded-full" />
        </div>
        <span className="text-sm font-medium">پوست جذاب</span>
      </div>
      <div className="flex flex-col items-center space-y-1 cursor-pointer">
        <div className="rounded-full overflow-hidden border-2 border-red-500 w-20 h-20 p-[3px]">
          <Image src={Story3} alt="" className="rounded-full" />
        </div>
        <span className="text-sm font-medium">سینما</span>
      </div>
      <div className="flex flex-col items-center space-y-1 cursor-pointer">
        <div className="rounded-full overflow-hidden border-2 border-red-500 w-20 h-20 p-[3px]">
          <Image src={Story4} alt="" className="rounded-full" />
        </div>
        <span className="text-sm font-medium">دکور جدید</span>
      </div>
      <div className="flex flex-col items-center space-y-1 cursor-pointer">
        <div className="rounded-full overflow-hidden border-2 border-red-500 w-20 h-20 p-[3px]">
          <Image src={Story5} alt="" className="rounded-full" />
        </div>
        <span className="text-sm font-medium">کارت بازی</span>
      </div>
      <div className="flex flex-col items-center space-y-1 cursor-pointer">
        <div className="rounded-full overflow-hidden border-2 border-red-500 w-20 h-20 p-[3px]">
          <Image src={Story6} alt="" className="rounded-full" />
        </div>
        <span className="text-sm font-medium">انواع دریل</span>
      </div>
      <div className="flex flex-col items-center space-y-1 cursor-pointer">
        <div className="rounded-full overflow-hidden border-2 border-red-500 w-20 h-20 p-[3px]">
          <Image src={Story7} alt="" className="rounded-full" />
        </div>
        <span className="text-sm font-medium">قمقمه سفری</span>
      </div>
      <div className="flex flex-col items-center space-y-1 cursor-pointer">
        <div className="rounded-full overflow-hidden border-2 border-red-500 w-20 h-20 p-[3px]">
          <Image src={Story8} alt="" className="rounded-full" />
        </div>
        <span className="text-sm font-medium">وسایل کمپ</span>
      </div>
      <div className="flex flex-col items-center space-y-1 cursor-pointer">
        <div className="rounded-full overflow-hidden border-2 border-red-500 w-20 h-20 p-[3px]">
          <Image src={Story9} alt="" className="rounded-full" />
        </div>
        <span className="text-sm font-medium">خاطره انگیز</span>
      </div>
    </div>
  );
}

export default StoryBox;
