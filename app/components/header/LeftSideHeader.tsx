import useAuth from "../../hooks/useAuth";
import { AiFillCaretDown } from "react-icons/ai";
import { HiOutlineLogin } from "react-icons/hi";
import { HiOutlineUser } from "react-icons/hi2";
import { TfiShoppingCart } from "react-icons/tfi";

function LeftSideHeader() {
  const { user } = useAuth();

  return (
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
          <span className="hidden lg:block text-sm font-medium">| ثبت نام</span>
        </div>
      )}
      <div className="lg:border-r-[1px] lg:pr-6 cursor-pointer">
        <TfiShoppingCart className="w-6 h-6 text-gray-700" />
      </div>
    </div>
  );
}

export default LeftSideHeader;
