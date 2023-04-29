import Image from "next/image";
import React from "react";
import { BsQuestionLg } from "react-icons/bs";
import Logo from '../assets/images/logo.svg'
import DrawerMenu from "../components/drawer/DrawerMenu";

function Navbar() {
  return (
    <div className="p-4 flex justify-between items-center">
      <div>
        {/* <HiMenu className="w-5 h-5" /> */}
       <DrawerMenu />
      </div>

      <div>
        <Image src={Logo} alt="" height="25" />
      </div>

      <div>
        <BsQuestionLg className="w-5 h-5 p-[1px] border-2 border-black rounded-md" />
      </div>
    </div>
  );
}

export default Navbar;
