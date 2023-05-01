import Image from "next/image";
import React from "react";
import { BsQuestionLg } from "react-icons/bs";
import Logo from '../assets/images/logo.svg'
import DrawerMenu from "../components/drawer/DrawerMenu";

function Navbar() {
  return (
    <div className="lg:hidden py-1 px-4 flex justify-between items-center">
      <div>
       <DrawerMenu />
      </div>

      <div className="mt-3">
        <Image src={Logo} alt="" height="25"  />
      </div>

      <div>
        <BsQuestionLg className="w-5 h-5 p-[1px] border-2 border-black rounded-md" />
      </div>
    </div>
  );
}

export default Navbar;
