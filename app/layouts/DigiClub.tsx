import Image from "next/image";
import React from "react";
import DigiClubLogo from "../assets/images/digiclub-logo-white.svg";
import Wheel from "../assets/images/wheel-spinner.jpg";
import Awards from "../assets/images/awards.png";
import Missions from "../assets/images/missions.png";
import { GiDiamondRing } from "react-icons/gi";
import { TbTargetArrow } from "react-icons/tb";
import { HiOutlineReceiptPercent } from "react-icons/hi2";

function DigiClub() {
  return (
    <div className="p-4 lg:p-10 lg:pl-4 space-y-2 lg:space-y-0 bg-gradient-to-l from-cyan-800 to-cyan-500 w-full h-[200px] lg:h-[88px] flex flex-col lg:flex-row lg:items-center lg:justify-between lg:rounded-2xl mb-8">
      <div className="w-32 h-10">
        <Image src={DigiClubLogo} alt="" />
      </div>
      <div className="flex items-center justify-center space-x-1 space-x-reverse">
        <div className="flex flex-col lg:flex-row items-center border-2 rounded-r-lg overflow-hidden bg-white">
          <div className="flex flex-col py-2 lg:flex-row items-center justify-center space-x-2  space-x-reverse px-2">
            <GiDiamondRing className="text-cyan-500 w-6 h-6" />
            <span className="text-xs lg:text-sm">چرخ و بخت</span>
          </div>
          <div className="w-32 h-16">
            <Image src={Wheel} alt="" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center border-2 bg-white">
          <div className="flex flex-col py-2 lg:flex-row items-center justify-center space-x-2 space-x-reverse px-2">
            <TbTargetArrow className="text-cyan-500 w-6 h-6" />
            <span className="text-xs lg:text-sm">ماموریت ها</span>
          </div>
          <div className="w-32 h-16">
            <Image src={Missions} alt="" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center border-2 rounded-l-lg overflow-hidden bg-white">
          <div className="flex flex-col py-2 lg:flex-row items-center justify-center space-x-2  space-x-reverse px-2">
            <HiOutlineReceiptPercent className="-rotate-90 text-cyan-500 w-6 h-6" />
            <span className="text-xs lg:text-sm">جایزه ها</span>
          </div>
          <div className="w-32 h-16">
            <Image src={Awards} alt="" objectFit="contain" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DigiClub;
