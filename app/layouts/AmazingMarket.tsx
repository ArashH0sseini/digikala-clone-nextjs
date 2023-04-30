import Image from "next/image";
import React from "react";
import Link from "next/link";
import FreshPattern from "../assets/images/freshPattern.svg";
import FreshBascket from "../assets/images/fresh.png";
import Fresh from "../assets/images/fresh.svg";
import Market1 from "../assets/images/market1.webp";
import Market2 from "../assets/images/market2.webp";
import Market3 from "../assets/images/market3.webp";
import Market4 from "../assets/images/market4.webp";
import Market5 from "../assets/images/market5.webp";
import Market6 from "../assets/images/market6.webp";
import { HiOutlineArrowLeft } from "react-icons/hi";

function AmazingMarket() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="relative bg-gradient-to-r from-gray-100 to-green-100 h-40 lg:h-28 rounded-lg my-10 mx-4">
        <div className="absolute top-0 left-0">
          <Image src={FreshPattern} alt="" />
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between h-full px-8 py-3">
          <div className="flex items-center lg:justify-center space-x-3 lg:space-x-6 space-x-reverse">
            <div className="lg:mt-2">
              <img
                src={FreshBascket.src}
                alt=""
                className="w-10 h-10 lg:w-16 lg:h-16"
              />
            </div>
            <div className="lg:mt-2">
              <img
                src={Fresh.src}
                alt=""
                className="w-44 lg:w-64 lg:h-7"
                width={250}
                height={28}
              />
            </div>
            <div className="hidden xl:block">
              <Link href="/">
                <div className="text-white bg-[#39ae00] rounded-full py-1 px-3">
                  <span className="text-sm">تا ۴۴٪ تخفیف</span>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-between space-x-2 space-x-reverse">
            <div className="flex items-center space-x-2 space-x-reverse">
              <div className="relative bg-white rounded-full w-[75px] h-[75px] flex items-center justify-center">
                <Image
                  src={Market1}
                  alt=""
                  width={50}
                  height={50}
                  objectFit="cover"
                />
                <span className="absolute bottom-0 right-0 bg-[#ef4056] text-white text-sm px-3 mt-1 rounded-full">
                  ۸٪
                </span>
              </div>
              <div className="relative bg-white rounded-full w-[75px] h-[75px] flex items-center justify-center">
                <Image
                  src={Market2}
                  alt=""
                  width={50}
                  height={50}
                  objectFit="cover"
                />
                <span className="absolute bottom-0 right-0 bg-[#ef4056] text-white text-sm px-3 mt-1 rounded-full">
                  ۸٪
                </span>
              </div>
              <div className="relative bg-white rounded-full w-[75px] h-[75px] flex items-center justify-center">
                <Image
                  src={Market3}
                  alt=""
                  width={50}
                  height={50}
                  objectFit="cover"
                />
                <span className="absolute bottom-0 right-0 bg-[#ef4056] text-white text-sm px-3 mt-1 rounded-full">
                  ۸٪
                </span>
              </div>
              <div className="hidden lg:flex relative bg-white rounded-full w-[75px] h-[75px] items-center justify-center">
                <Image
                  src={Market4}
                  alt=""
                  width={50}
                  height={50}
                  objectFit="cover"
                />
                <span className="absolute bottom-0 right-0 bg-[#ef4056] text-white text-sm px-3 mt-1 rounded-full">
                  ۸٪
                </span>
              </div>
              <div className="hidden lg:flex relative bg-white rounded-full w-[75px] h-[75px] items-center justify-center">
                <Image
                  src={Market5}
                  alt=""
                  width={50}
                  height={50}
                  objectFit="cover"
                />
                <span className="absolute bottom-0 right-0 bg-[#ef4056] text-white text-sm px-3 mt-1 rounded-full">
                  ۸٪
                </span>
              </div>
              <div className="hidden xl:flex relative bg-white rounded-full w-[75px] h-[75px] items-center justify-center">
                <Image
                  src={Market6}
                  alt=""
                  width={50}
                  height={50}
                  objectFit="cover"
                />
                <span className="absolute bottom-0 right-0 bg-[#ef4056] text-white text-sm px-3 mt-1 rounded-full">
                  ۸٪
                </span>
              </div>
            </div>
            <div className="relative bg-white px-4 py-4 rounded-full lg:flex lg:justify-center lg:space-x-2 lg:space-x-reverse">
              <p className="hidden lg:block text-[#39ae00] text-sm">
                بیش از ۱۰۰ کالا
              </p>
              <HiOutlineArrowLeft className="text-[#39ae00] w-5 h-5 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AmazingMarket;
