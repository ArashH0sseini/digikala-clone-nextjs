import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  HiChevronLeft,
  HiFire,
  HiMenu,
  HiOutlineLocationMarker,
  HiOutlineLogin,
  HiOutlineUser,
} from "react-icons/hi";
import { HiMagnifyingGlass, HiOutlineReceiptPercent } from "react-icons/hi2";
import { TfiShoppingCart } from "react-icons/tfi";
import Divider from "../components/shared/Divider";
import Logo from "../assets/images/logo.svg";
import { GiFruitBowl } from "react-icons/gi";
import { TbDiscount2 } from "react-icons/tb";
import { AiFillCaretDown } from "react-icons/ai";
import useAuth from "../hooks/useAuth";

function Header() {
  const { user } = useAuth();
  return (
    <div className="lg:border-b-[1px] lg:border-gray-300 bg-white lg:sticky lg:top-0 z-10">
      <div className="flex items-center py-2 pr-4 lg:pr-0 space-x-4">
        <div className="hidden lg:block lg: mt-2">
          <Image src={Logo} alt="" height="30" width="150" />
        </div>

        <div className="flex-1 mx-4">
          <form
            className="flex lg:w-[600px] items-center space-x-2 space-x-reverse rounded-lg py-3 px-2 
        bg-gray-100"
          >
            <button hidden>Search</button>
            <HiMagnifyingGlass className="w-5 h-5 text-gray-500 cursor-pointer" />
            <input
              type="text"
              placeholder="جستجو"
              className="flex-1 outline-none bg-transparent
             text-gray-400 placeholder:text-gray-500 text-xs"
            />
          </form>
        </div>

        <div className="flex items-center space-x-4 space-x-reverse">
          {user ? (
            <div className="flex items-center cursor-pointer">
              <HiOutlineUser className="w-7 h-7 text-gray-700" />
              <AiFillCaretDown className="hidden lg:block w-3 h-3 text-gray-700" />
            </div>
          ) : (
            <div className="flex items-center justify-center space-x-2 space-x-reverse w-24 lg:w-36 cursor-pointer lg:border-[1px] lg:rounded-lg lg:py-2">
              <HiOutlineLogin className="h-6 w-6 text-gray-700" />
              <span className="text-sm font-medium">ورود</span>
              <span className="hidden lg:block text-sm font-medium">
                | ثبت نام
              </span>
            </div>
          )}
          <div className="lg:border-r-[1px] lg:pr-6 cursor-pointer">
            <TfiShoppingCart className="w-6 h-6 text-gray-700" />
          </div>
        </div>
      </div>

      <div className="block lg:hidden">
        <Divider />
      </div>

      <div className="flex items-center justify-between p-2 px-4 cursor-pointer">
        <div className="hidden lg:flex items-center">
          <div className="flex items-center space-x-2 space-x-reverse border-l-[1px] pl-4">
            <HiMenu className="w-4 h-4 text-gray-800" />
            <span className="text-sm">دسته بندی کالاها</span>
          </div>
          <div className="hidden lg:flex items-center space-x-5 space-x-reverse border-l-[1px] pl-4">
            <div className="flex items-center space-x-1 space-x-reverse pr-3">
              <GiFruitBowl className="w-4 h-4 text-gray-400" />
              <span className="text-xs text-gray-500">سوپرمارکت</span>
            </div>
            <div className="flex items-center space-x-1 space-x-reverse">
              <HiFire className="w-4 h-4 text-gray-400" />
              <span className="text-xs text-gray-500">پرفروش ترین ها</span>
            </div>
            <div className="flex items-center space-x-1 space-x-reverse">
              <HiOutlineReceiptPercent className="w-4 h-4 text-gray-400 -rotate-90" />
              <span className="text-xs text-gray-500">تخفیف ها پیشنهادها</span>
            </div>
            <div className="flex items-center space-x-1 space-x-reverse">
              <TbDiscount2 className="w-4 h-4 text-gray-400" />
              <span className="text-xs text-gray-500">شگفت انگیزها</span>
            </div>
          </div>
          <div className="space-x-6 space-x-reverse">
            <span className="text-xs text-gray-500 pr-3">سوالی دارید؟</span>
            <span className="text-xs text-gray-500">در دیجی کالا بفروشید!</span>
          </div>
        </div>

        <div className="flex items-center space-x-2 space-x-reverse">
          <HiOutlineLocationMarker className="text-orange-400 lg:text-gray-700 w-5 h-5" />
          <p className="text-xs text-gray-600">لطفا شهر خود را انتخاب کنید</p>
        </div>
        <HiChevronLeft className="w-6 h-6 text-gray-700 lg:hidden" />
      </div>
    </div>
  );
}

export default Header;
