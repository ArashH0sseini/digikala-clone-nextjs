import React, { useState } from "react";
import { Drawer } from "antd";
import { HiFire, HiMenu } from "react-icons/hi";
import { HiOutlineReceiptPercent } from "react-icons/hi2";
import Digi from "../../assets/images/digi.svg";
import Image from "next/image";
import { GiFruitBowl } from "react-icons/gi";
import { TbDiscount2 } from "react-icons/tb";
import { RiQuestionLine } from "react-icons/ri";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import DropDownMenu from "./DropDownMenu";

const DrawerMenu: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button onClick={showDrawer}>
        <HiMenu className="w-5 h-5" />
      </button>
      <Drawer placement="right" closable={false} onClose={onClose} open={open} maskStyle={{background:"#080a3871"}}>
        <div>
          <div className="border-b-[1px] border-gray-200 pb-3">
            <Image src={Digi} alt="" height="25" />
          </div>
          <div className="space-y-6 px-4 my-4">
            <div className="flex items-center space-x-4 space-x-reverse cursor-pointer">
              <GiFruitBowl className="w-6 h-6 text-gray-400" />
              <p className="text-xs font-medium text-gray-700">سوپرمارکت</p>
            </div>
            <div className="flex items-center space-x-4 space-x-reverse cursor-pointer">
              <HiFire className="w-6 h-6 text-gray-400" />
              <p className="text-xs font-medium text-gray-700">
                پرفروش ترین ها
              </p>
            </div>
            <div className="flex items-center space-x-4 space-x-reverse cursor-pointer">
              <HiOutlineReceiptPercent className="w-6 h-6 text-gray-400 -rotate-90" />
              <p className="text-xs font-medium text-gray-700">
                تخفیف ها و پیشنهادها
              </p>
            </div>
            <div className="flex items-center space-x-4 space-x-reverse cursor-pointer">
              <TbDiscount2 className="w-6 h-6 text-gray-400" />
              <p className="text-xs font-medium text-gray-700">
                شگفت انگیزها
              </p>
            </div>
            <div className="flex items-center space-x-4 space-x-reverse cursor-pointer">
              <RiQuestionLine className="w-6 h-6 text-gray-400" />
              <p className="text-xs font-medium text-gray-700">
                سوالی دارید؟
              </p>
            </div>
            <div className="flex items-center space-x-4 space-x-reverse cursor-pointer">
              <SiHomeassistantcommunitystore className="w-5 h-5 text-gray-400" />
              <p className="text-xs font-medium text-gray-700">
                در دیجی کالا بفروشید
              </p>
            </div>
            <div className="border-b-[1px] border-gray-200 pb-3 "></div>
            <p className="font-medium text-gray-800">دسته بندی کالاها</p>
            <DropDownMenu />
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default DrawerMenu;
