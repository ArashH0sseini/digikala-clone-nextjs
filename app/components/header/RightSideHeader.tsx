import Image from "next/image";
import SearchProducts from "./SearchProducts";
import Logo from "../../assets/images/logo.svg";

function RightSideHeader() {
  return (
    <div className="flex items-center flex-1">
      <div className="hidden lg:block lg: mt-2">
        <Image src={Logo} alt="" height="30" width="150" />
      </div>

        <SearchProducts />
    </div>
  );
}

export default RightSideHeader;
