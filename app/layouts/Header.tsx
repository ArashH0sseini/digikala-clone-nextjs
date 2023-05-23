import TopHeader from "./TopHeader";
import MobileHeader from "../components/header/MobileHeader";
import RightSideHeader from "../components/header/RightSideHeader";
import LeftSideHeader from "../components/header/LeftSideHeader";
import Divider from "../components/shared/Divider";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <TopHeader />
      <MobileHeader />
      <div className="lg:border-b-[1px] lg:border-gray-300 bg-white lg:sticky lg:top-0 z-10">
        <div className="flex items-center justify-between py-2 pr-4 lg:pr-0 space-x-4">
          <RightSideHeader />
          <LeftSideHeader />
        </div>

        <div className="block lg:hidden">
          <Divider />
        </div>

        <Navbar />
      </div>
    </header>
  );
};

export default Header;
