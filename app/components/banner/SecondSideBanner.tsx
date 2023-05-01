import Image from "next/image";
import React from "react";
import Banner5 from "../../assets/images/banner5.webp";
import Banner6 from "../../assets/images/banner6.webp";

function SecondSideBanner() {
  return (
    <div className="grid grid-cols-2 gap-4 mx-6 lg:mx-0 mt-10 mb-8">
      <Image src={Banner5} alt="" className="rounded-2xl" objectFit="cover" />
      <Image src={Banner6} alt="" className="rounded-2xl" objectFit="cover" />
    </div>
  );
}

export default SecondSideBanner;
