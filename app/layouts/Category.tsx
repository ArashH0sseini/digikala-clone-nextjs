import Image from "next/image";
import Link from "next/link";
import React from "react";
import Cat1 from "../assets/images/cat1.png";
import Cat2 from "../assets/images/cat2.png";
import Cat3 from "../assets/images/cat3.png";
import Cat4 from "../assets/images/cat4.png";
import Cat5 from "../assets/images/cat5.png";
import Cat6 from "../assets/images/cat6.png";
import Cat7 from "../assets/images/cat7.png";

function Category() {
  return (
    <div className="grid grid-rows-2 grid-cols-4 lg:flex lg:justify-between lg:items-center px-4 max-w-5xl xl:max-w-6xl mx-auto gap-6 my-6 lg:my-10">
      <Link href="/">
        <div className="flex flex-col items-center space-y-2 cursor-pointer">
          <Image src={Cat1} alt="" height="52" width="52" />
          <span className="text-[7px] xs:text-[10px] sm:text-xs">دیجی‌کالا جت</span>
        </div>
      </Link>
      <Link href="/">
        <div className="flex flex-col items-center space-y-2 cursor-pointer">
          <Image src={Cat2} alt="" height="52" width="52" />
          <span className="text-[7px] xs:text-[10px] sm:text-xs">حراج استایل</span>
        </div>
      </Link>

      <Link href="/">
        <div className="flex flex-col items-center space-y-2 cursor-pointer">
          <Image src={Cat3} alt="" height="52" width="52" />
          <span className="text-[7px] xs:text-[10px] sm:text-xs">خرید اقساطی</span>
        </div>
      </Link>

      <Link href="/">
        <div className="flex flex-col items-center space-y-2 cursor-pointer">
          <Image src={Cat4} alt="" height="52" width="52" />
          <span className="text-[7px] xs:text-[10px] sm:text-xs">دیجی‌کالا سرویس</span>
        </div>
      </Link>

      <Link href="/">
        <div className="flex flex-col items-center space-y-2 cursor-pointer">
          <Image src={Cat5} alt="" height="52" width="52" />
          <span className="text-[7px] xs:text-[10px] sm:text-xs">چرخ و بخت</span>
        </div>
      </Link>

      <Link href="/">
        <div className="flex flex-col items-center space-y-2 cursor-pointer">
          <Image src={Cat6} alt="" height="52" width="52" />
          <span className="text-[7px] xs:text-[10px] sm:text-xs">دیجی‌کالا پلاس</span>
        </div>
      </Link>

      <Link href="/">
        <div className="flex flex-col items-center space-y-2 cursor-pointer">
          <Image src={Cat7} alt="" height="52" width="52" />
          <span className="text-[7px] xs:text-[10px] sm:text-xs">ماموریت ها</span>
        </div>
      </Link>

      <Link href="/">
        <div className="flex flex-col items-center space-y-2 cursor-pointer">
          <p className=" w-[52px] h-[52px] text-center text-gray-400 font-semibold text-4xl bg-gray-100 rounded-full">
            ...
          </p>
          <span className="text-[7px] xs:text-[10px] sm:text-xs">بیشتر</span>
        </div>
      </Link>
    </div>
  );
}

export default Category;
