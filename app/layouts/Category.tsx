import Image from "next/image";
import Link from "next/link";
import React from "react";
import { categoriesData } from "../constants/categoriesData";

const Category = () => {
  const categories = categoriesData();
  return (
    <div className="grid grid-rows-2 grid-cols-4 lg:flex lg:justify-between lg:items-center px-4 max-w-5xl xl:max-w-6xl mx-auto gap-6 my-6 lg:my-10">
      {categories.map((category, index) => (
        <Link key={index} href="/">
          <div className="flex flex-col items-center space-y-2 cursor-pointer">
            <Image src={category.image} alt="" height="52" width="52" />
            <span className="text-[7px] xs:text-[10px] sm:text-xs">
              {category.title}
            </span>
          </div>
        </Link>
      ))}

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
};

export default Category;
