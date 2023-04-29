import Link from "next/link";
import React from "react";
import {
  HiChevronLeft,
  HiOutlineLocationMarker,
  HiOutlineLogin,
} from "react-icons/hi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { TfiShoppingCart } from "react-icons/tfi";
import Divider from "../components/shared/Divider";

function Header() {
  return (
    <div>
      <div className="flex items-center py-2 space-x-4">
        <div className="flex-1 mx-4">
          <form
            className="flex w-full items-center space-x-2 space-x-reverse rounded-lg py-3 px-2 
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
        <Link href="/users/login">
          <div className="flex items-center justify-center space-x-2 space-x-reverse w-24 cursor-pointer">
            <HiOutlineLogin className="h-6 w-6" />
            <span className="text-sm font-medium">ورود</span>
          </div>
        </Link>
        <div>
          <TfiShoppingCart className="w-6 h-6" />
        </div>
      </div>
      <Divider />
      <div className="flex items-center justify-between p-3 px-4 cursor-pointer">
        <div className="flex items-center space-x-2 space-x-reverse">
          <HiOutlineLocationMarker className="text-orange-400 w-5 h-5" />
          <p className="text-xs text-gray-600">لطفا شهر خود را انتخاب کنید</p>
        </div>
        <HiChevronLeft className="w-6 h-6 text-gray-700" />
      </div>
    </div>
  );
}

export default Header;
