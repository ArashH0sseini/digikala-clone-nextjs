import Image from "next/image";
import Link from "next/link";
import { HiChevronLeft } from "react-icons/hi";
import ErrorImage from "../app/assets/images/page-not-found.png";
import Divider from "../app/components/shared/Divider";
import DividerFull from "../app/components/shared/DividerFull";
import Footer from "../app/layouts/Footer";
import Header from "../app/layouts/Header";
import MainHeader from "../app/layouts/TopHeader";
import Navbar from "../app/layouts/Navbar";

const Custom404 = () => {
  return (
    <div>
      <MainHeader />
      <Navbar />
      <Divider />
      <Header />
      <div className="flex flex-col items-center justify-center my-10 space-y-8">
        <p className="font-semibold text-xl text-gray-800">صفحه‌ای که دنبال آن بودید پیدا نشد!</p>
        <Link href="/">
        <div className="flex items-center text-cyan-500 cursor-pointer">
          <span className="text-xs">صفحه اصلی</span>
          <HiChevronLeft />
        </div>
        </Link>
        <div>
          <Image src={ErrorImage} alt="" />
        </div>
      </div>
      <DividerFull />
      <Footer />
    </div>
  );
};

export default Custom404;
