import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiChevronLeft } from "react-icons/hi";
import Visit1 from "../assets/images/visit1.jpg";
import Visit2 from "../assets/images/visit2.jpg";
import Visit3 from "../assets/images/visit3.jpg";
import Visit4 from "../assets/images/visit4.jpg";
import Visit5 from "../assets/images/visit5.jpg";
import Visit6 from "../assets/images/visit6.jpg";
import Visit7 from "../assets/images/visit7.jpg";
import Visit8 from "../assets/images/visit8.jpg";
import Visit9 from "../assets/images/visit9.jpg";
import Visit10 from "../assets/images/visit10.jpg";
import Visit11 from "../assets/images/visit11.jpg";
import Visit12 from "../assets/images/visit12.jpg";
import Visit13 from "../assets/images/visit13.jpg";
import Visit14 from "../assets/images/visit14.jpg";
import Visit15 from "../assets/images/visit15.jpg";
import Visit16 from "../assets/images/visit16.jpg";

function VisitedProducts() {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-4 gap-[1px] bg-gray-200 lg:border-[1px] rounded-2xl overflow-hidden mb-6">
      <div className=" bg-white">
        <div className="space-y-2 px-4 py-4">
          <h3>گوشی موبایل</h3>
          <h4 className="text-xs text-gray-500">براساس بازدیدهای شما</h4>
        </div>
        <div className="grid grid-cols-2 gap-[1px] bg-gray-200">
          <Link href="/">
            <div className="p-2 bg-white flex items-center justify-center">
              <div className="lg:w-32 lg:h-32 p-2 bg-white">
                <Image src={Visit1} alt="" />
              </div>
            </div>
          </Link>
          <Link href="/">
          <div className="p-2 bg-white flex items-center justify-center">
              <div className="lg:w-32 lg:h-32 p-2 bg-white">
                <Image src={Visit2} alt="" />
              </div>
            </div>
          </Link>
          <Link href="/">
          <div className="p-2 bg-white flex items-center justify-center">
              <div className="lg:w-32 lg:h-32 p-2 bg-white">
                <Image src={Visit3} alt="" />
              </div>
            </div>
          </Link>
          <Link href="/">
          <div className="p-2 bg-white flex items-center justify-center">
              <div className="lg:w-32 lg:h-32 p-2 bg-white">
                <Image src={Visit4} alt="" />
              </div>
            </div>
          </Link>
        </div>
        <div className="bg-white flex items-center justify-center cursor-pointer mx-auto w-20 text-cyan-500 pt-2 mb-6">
          <span className="text-sm">مشاهده</span>
          <HiChevronLeft />
        </div>
      </div>


      <div className=" bg-white">
        <div className="space-y-2 px-4 py-4">
          <h3>کیف و کاور گوشی</h3>
          <h4 className="text-xs text-gray-500">براساس بازدیدهای شما</h4>
        </div>
        <div className="grid grid-cols-2 gap-[1px] bg-gray-200">
          <Link href="/">
          <div className="p-2 bg-white flex items-center justify-center">
              <div className="lg:w-32 lg:h-32 p-2 bg-white">
                <Image src={Visit5} alt="" />
              </div>
            </div>
          </Link>
          <Link href="/">
          <div className="p-2 bg-white flex items-center justify-center">
              <div className="lg:w-32 lg:h-32 p-2 bg-white">
                <Image src={Visit6} alt="" />
              </div>
            </div>
          </Link>
          <Link href="/">
          <div className="p-2 bg-white flex items-center justify-center">
              <div className="lg:w-32 lg:h-32 p-2 bg-white">
                <Image src={Visit7} alt="" />
              </div>
            </div>
          </Link>
          <Link href="/">
          <div className="p-2 bg-white flex items-center justify-center">
              <div className="lg:w-32 lg:h-32 p-2 bg-white">
                <Image src={Visit8} alt="" />
              </div>
            </div>
          </Link>
        </div>
        <div className="bg-white flex items-center justify-center cursor-pointer mx-auto w-20 text-cyan-500 pt-2 mb-6">
          <span className="text-sm">مشاهده</span>
          <HiChevronLeft />
        </div>
      </div>

      <div className=" bg-white">
        <div className="space-y-2 px-4 py-4">
          <h3>هدفون، هدست و هنذفری</h3>
          <h4 className="text-xs text-gray-500">براساس بازدیدهای شما</h4>
        </div>
        <div className="grid grid-cols-2 gap-[1px] bg-gray-200">
          <Link href="/">
          <div className="p-2 bg-white flex items-center justify-center">
              <div className="lg:w-32 lg:h-32 p-2 bg-white">
                <Image src={Visit9} alt="" />
              </div>
            </div>
          </Link>
          <Link href="/">
          <div className="p-2 bg-white flex items-center justify-center">
              <div className="lg:w-32 lg:h-32 p-2 bg-white">
                <Image src={Visit10} alt="" />
              </div>
            </div>
          </Link>
          <Link href="/">
          <div className="p-2 bg-white flex items-center justify-center">
              <div className="lg:w-32 lg:h-32 p-2 bg-white">
                <Image src={Visit11} alt="" />
              </div>
            </div>
          </Link>
          <Link href="/">
          <div className="p-2 bg-white flex items-center justify-center">
              <div className="lg:w-32 lg:h-32 p-2 bg-white">
                <Image src={Visit12} alt="" />
              </div>
            </div>
          </Link>
        </div>
        <div className="bg-white flex items-center justify-center cursor-pointer mx-auto w-20 text-cyan-500 pt-2 mb-6">
          <span className="text-sm">مشاهده</span>
          <HiChevronLeft />
        </div>
      </div>


      <div className=" bg-white">
        <div className="space-y-2 px-4 py-4">
          <h3>ساعت هوشمند</h3>
          <h4 className="text-xs text-gray-500">براساس بازدیدهای شما</h4>
        </div>
        <div className="grid grid-cols-2 gap-[1px] bg-gray-200">
          <Link href="/">
          <div className="p-2 bg-white flex items-center justify-center">
              <div className="lg:w-32 lg:h-32 p-2 bg-white">
                <Image src={Visit13} alt="" />
              </div>
            </div>
          </Link>
          <Link href="/">
          <div className="p-2 bg-white flex items-center justify-center">
              <div className="lg:w-32 lg:h-32 p-2 bg-white">
                <Image src={Visit14} alt="" />
              </div>
            </div>
          </Link>
          <Link href="/">
          <div className="p-2 bg-white flex items-center justify-center">
              <div className="lg:w-32 lg:h-32 p-2 bg-white">
                <Image src={Visit15} alt="" />
              </div>
            </div>
          </Link>
          <Link href="/">
          <div className="p-2 bg-white flex items-center justify-center">
              <div className="lg:w-32 lg:h-32 p-2 bg-white">
                <Image src={Visit16} alt="" />
              </div>
            </div>
          </Link>
        </div>
        <div className="bg-white flex items-center justify-center cursor-pointer mx-auto w-20 text-cyan-500 pt-2 mb-6">
          <span className="text-sm">مشاهده</span>
          <HiChevronLeft />
        </div>
      </div>

    </div>
  );
}

export default VisitedProducts;
