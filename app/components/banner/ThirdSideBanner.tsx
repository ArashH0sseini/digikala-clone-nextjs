import Image from "next/image";
import React from "react";
import Banner7 from "../../assets/images/banner7.webp";
import Banner8 from "../../assets/images/banner8.webp";

function ThirdSideBanner() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-6 lg:mx-0 mt-10 mb-8">
      <Image src={Banner7} alt="" className="rounded-2xl" objectFit="cover" />
      <Image src={Banner8} alt="" className="rounded-2xl" objectFit="cover" />
    </div>
  );
}

export default ThirdSideBanner;
