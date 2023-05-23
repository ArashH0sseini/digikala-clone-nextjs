import { GiFruitBowl } from "react-icons/gi";
import { TbDiscount2 } from "react-icons/tb";
import {
  HiChevronLeft,
  HiFire,
  HiMenu,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { HiOutlineReceiptPercent } from "react-icons/hi2";

function Navbar() {
  return (
    <nav className="flex items-center justify-between p-2 px-4 cursor-pointer">
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
    </nav>
  );
}

export default Navbar;
