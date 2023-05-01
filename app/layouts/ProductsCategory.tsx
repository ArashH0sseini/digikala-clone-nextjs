import Image from "next/image";
import Link from "next/link";
import React from "react";
import Category1 from "../assets/images/category1.webp";
import Category2 from "../assets/images/category2.webp";
import Category3 from "../assets/images/category3.webp";
import Category4 from "../assets/images/category4.webp";
import Category5 from "../assets/images/category5.webp";
import Category6 from "../assets/images/category6.webp";
import Category7 from "../assets/images/category7.webp";
import Category8 from "../assets/images/category8.webp";
import Category9 from "../assets/images/category9.webp";
import Category10 from "../assets/images/category10.webp";
import Category11 from "../assets/images/category11.webp";
import Category12 from "../assets/images/category12.webp";

function ProductsCategory() {
  return (
    <div className="px-6">
      <h2 className="text-center my-8 text-lg">دسته‌بندی‌های دیجی‌کالا</h2>
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-6">
        <Link href="/">
          <div className="flex flex-col items-center space-y-2 cursor-pointer">
            <div className="w-24 h-24 lg:w-40 lg:h-40">
              <Image src={Category1} alt="" objectFit="contain" />
            </div>
            <span className="text-[7px] xs:text-[10px] sm:text-xs">موبایل</span>
          </div>
        </Link>

        <Link href="/">
          <div className="flex flex-col items-center space-y-2 cursor-pointer">
            <div className="w-24 h-24 lg:w-40 lg:h-40">
              <Image src={Category2} alt="" objectFit="contain" />
            </div>
            <span className="text-[7px] xs:text-[10px] sm:text-xs">
              کالا دیجیتال
            </span>
          </div>
        </Link>

        <Link href="/">
          <div className="flex flex-col items-center space-y-2 cursor-pointer">
            <div className="w-24 h-24 lg:w-40 lg:h-40">
              <Image src={Category3} alt="" objectFit="contain" />
            </div>
            <span className="text-[7px] xs:text-[10px] sm:text-xs">
              خانه و آشپزخانه
            </span>
          </div>
        </Link>

        <Link href="/">
          <div className="flex flex-col items-center space-y-2 cursor-pointer">
            <div className="w-24 h-24 lg:w-40 lg:h-40">
              <Image src={Category4} alt="" objectFit="contain" />
            </div>
            <span className="text-[7px] xs:text-[10px] sm:text-xs">
              مد و پوشاک
            </span>
          </div>
        </Link>

        <Link href="/">
          <div className="flex flex-col items-center space-y-2 cursor-pointer">
          <div className="w-24 h-24 lg:w-40 lg:h-40">
            <Image src={Category5} alt="" objectFit="contain"  />
            </div>
            <span className="text-[7px] xs:text-[10px] sm:text-xs">
              کالاهای سوپرمارکتی
            </span>
          </div>
        </Link>

        <Link href="/">
          <div className="flex flex-col items-center space-y-2 cursor-pointer">
          <div className="w-24 h-24 lg:w-40 lg:h-40">
            <Image src={Category6} alt="" objectFit="contain"  />
            </div>
            <span className="text-[7px] xs:text-[10px] sm:text-xs">
              کتاب، لوازم تحریر و هنر
            </span>
          </div>
        </Link>

        <Link href="/">
          <div className="flex flex-col items-center space-y-2 cursor-pointer">
          <div className="w-24 h-24 lg:w-40 lg:h-40">
            <Image src={Category7} alt="" objectFit="contain"  />
            </div>
            <span className="text-[7px] xs:text-[10px] sm:text-xs">
              اسباب بازی، کودک و نوزاد
            </span>
          </div>
        </Link>

        <Link href="/">
          <div className="flex flex-col items-center space-y-2 cursor-pointer">
          <div className="w-24 h-24 lg:w-40 lg:h-40">
            <Image src={Category8} alt="" objectFit="contain"  />
            </div>
            <span className="text-[7px] xs:text-[10px] sm:text-xs">
              زیبایی و سلامت
            </span>
          </div>
        </Link>

        <Link href="/">
          <div className="flex flex-col items-center space-y-2 cursor-pointer">
          <div className="w-24 h-24 lg:w-40 lg:h-40">
            <Image src={Category9} alt="" objectFit="contain"  />
            </div>
            <span className="text-[7px] xs:text-[10px] sm:text-xs">
              ورزش و سفر
            </span>
          </div>
        </Link>

        <Link href="/">
          <div className="flex flex-col items-center space-y-2 cursor-pointer">
          <div className="w-24 h-24 lg:w-40 lg:h-40">
            <Image src={Category10} alt="" objectFit="contain"  />
            </div>
            <span className="text-[7px] xs:text-[10px] sm:text-xs">
              ابزار، الوازم ساختمانی و صنعتی
            </span>
          </div>
        </Link>

        <Link href="/">
          <div className="flex flex-col items-center space-y-2 cursor-pointer">
          <div className="w-24 h-24 lg:w-40 lg:h-40">
            <Image src={Category11} alt="" objectFit="contain"  />
            </div>
            <span className="text-[7px] xs:text-[10px] sm:text-xs">
              خودرو و موتورسیکلت
            </span>
          </div>
        </Link>

        <Link href="/">
          <div className="flex flex-col items-center space-y-2 cursor-pointer">
          <div className="w-24 h-24 lg:w-40 lg:h-40">
            <Image src={Category12} alt="" objectFit="contain"  />
            </div>
            <span className="text-[7px] xs:text-[10px] sm:text-xs">
              محصولات بومی و محلی
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ProductsCategory;
