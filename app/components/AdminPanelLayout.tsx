import Image from "next/image";
import { useRouter } from "next/router";
import React, { ReactNode, useState } from "react";
import useAuth from "../hooks/useAuth";
import Admin from "../assets/images/admin.jpg";
import { BiHomeSmile, BiWorld } from "react-icons/bi";
import { RiShoppingBag3Line } from "react-icons/ri";
import { CgMenuRight, CgUserlane } from "react-icons/cg";
import { RxMoon } from "react-icons/rx";
import { BsEmojiSunglasses, BsSearchHeart } from "react-icons/bs";
import { HiOutlineBellAlert } from "react-icons/hi2";
import DividerFull from "./shared/DividerFull";
import Link from "next/link";
interface Props {
  children: ReactNode;
}

function AdminPanelLayout({ children }: Props) {
  const router = useRouter();
  const { user, error, loading } = useAuth();
  const [pages, setPages] = useState(0);

  if (loading) return <h1>Loading...</h1>;

  if (error) {
    router.push("/login");
    return <></>;
  }

  // if (!user?.is_admin) {
  //   router.push("/");
  //   return <></>;
  // }

  return (
    <div>
      <div className="flex h-full">
        <div
          id="sidebar"
          className="hidden md:block dark:bg-gray-800 bg-[#ef4056] p-5 w-[400px] h-screen rounded-l-3xl"
        >
          <div className="flex items-center px-1 py-6">
             <div className="flex">
              <RxMoon className="text-white w-8 h-8 cursor-pointer" />
              {/* <BsEmojiSunglasses className="text-white w-8 h-8 cursor-pointer" /> */}
            </div> 

             <p className="text-white md:text-base lg:text-2xl px-2 font-bold">
              پنل مدیریت
            </p> 

          </div>
          <DividerFull />

          <div className="my-4">
            <ul className="space-y-4">
              <Link href="/admin">
                <li
                  onClick={() => setPages(0)}
                  className={`flex items-center p-2 cursor-pointer group rounded-lg mb-1 hover:bg-white ${
                    pages === 0 ? "bg-white" : ""
                  }`}
                >
                  <BiHomeSmile
                    className={`text-gray-100 w-7 h-7 group-hover:text-[#ef4056] ${
                      pages === 0 ? "text-[#ef4056]" : ""
                    }`}
                  />
                  <p
                    className={`text-gray-100 mr-2 text-lg group-hover:text-[#ef4056] ${
                      pages === 0 ? "text-[#ef4056]" : ""
                    }`}
                  >
                    داشبورد
                  </p>
                </li>
              </Link>

              <Link href="/admin/products">
                <li
                  onClick={() => setPages(1)}
                  className={`flex items-center p-2 cursor-pointer group rounded-lg mb-1 hover:bg-white ${
                    pages === 1 ? "bg-white" : ""
                  }`}
                >
                  <RiShoppingBag3Line
                    className={`text-gray-100 w-7 h-7 group-hover:text-[#ef4056] ${
                      pages === 1 ? "text-[#ef4056]" : ""
                    }`}
                  />
                  <p
                    className={`text-gray-100 mr-2 text-lg group-hover:text-[#ef4056] ${
                      pages === 1 ? "text-[#ef4056]" : ""
                    }`}
                  >
                    محصولات
                  </p>
                </li>
              </Link>

              <Link href="/admin/users">
                <li
                  onClick={() => setPages(2)}
                  className={`flex items-center p-2 cursor-pointer group rounded-lg mb-1 hover:bg-white ${
                    pages === 2 ? "bg-white" : ""
                  }`}
                >
                  <CgUserlane
                    className={`text-gray-100 w-7 h-7 group-hover:text-[#ef4056] ${
                      pages === 2 ? "text-[#ef4056]" : ""
                    }`}
                  />
                  <p
                    className={`text-gray-100 mr-2 text-lg group-hover:text-[#ef4056] ${
                      pages === 2 ? "text-[#ef4056]" : ""
                    }`}
                  >
                    کاربران
                  </p>
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="w-full">
          <div className="dark:bg-gray-600">
            <div className="bg-white shadow dark:bg-gray-700 h-16 px-5 flex justify-center items-center">
              <div className="flex items-center space-x-2 space-x-reverse">
                <CgMenuRight className="h-7 w-7 mx-5 md:hidden text-gray-400 cursor-pointer" />
                <BsSearchHeart className="text-gray-400 w-6 h-6" />
                <input
                  className="outline-none dark:bg-gray-700"
                  type="text"
                  name=""
                  id=""
                  placeholder="دنبال چی میگردی؟"
                />
              </div>
              <div className="flex justify-end w-full h-full items-center space-x-4 space-x-reverse">
                <BiWorld className="text-gray-400 w-7 h-7 cursor-pointer" />
                <HiOutlineBellAlert className="text-gray-400 w-7 h-7 cursor-pointer" />
                <div className="ring-[#ef4056] ring-2 ml-4 rounded-full p-[2px] cursor-pointer">
                  <div className="relative rounded-full overflow-hidden w-8 h-8">
                    <Image
                      src={Admin}
                      alt=""
                      objectFit="contain"
                      layout="fill"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

export default AdminPanelLayout;
