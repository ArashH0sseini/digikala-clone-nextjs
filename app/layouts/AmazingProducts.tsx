import Image from "next/image";
import React from "react";
import { HiChevronLeft } from "react-icons/hi";
import AmazingImage from "../assets/images/Amazings.svg";
import BoxPize from "../assets/images/box.png";
import ProductSlider from "./ProductSlider";

function AmazingProducts() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-center bg-[#ef4056] h-64 lg:rounded-2xl">
        <div className="flex flex-col items-center w-[1010px] sm:w-[500px] md:w-[350px] lg:[250px] mx-4">
          <Image src={AmazingImage} alt="" width="80" height="80" />
          <Image src={BoxPize} alt="" width="140" height="120" />
          <div className="flex items-center font-medium">
            <p className="text-white text-sm ">مشاهده همه</p>
            <HiChevronLeft className="text-white" />
          </div>
        </div>
        <ProductSlider />
      </div>
    </div>
  );
}

export default AmazingProducts;
