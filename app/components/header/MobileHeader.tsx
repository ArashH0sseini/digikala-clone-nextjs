import Image from "next/image";
import { BsQuestionLg } from "react-icons/bs";
import DrawerMenu from "../drawer/DrawerMenu";
import Logo from "../../assets/images/logo.svg";
import Divider from "../shared/Divider";

function MobileHeader() {
  return (
    <div>
      <div className="lg:hidden my-3 px-4 flex justify-between items-center">
        <DrawerMenu />
        <Image src={Logo} alt="" height="25" />
        <BsQuestionLg className="w-5 h-5 p-[1px] border-2 border-black rounded-md" />
      </div>
      <Divider />
    </div>
  );
}

export default MobileHeader;
