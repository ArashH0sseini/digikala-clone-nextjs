import Image from "next/image";
import React from "react";
import { HiChevronLeft, HiChevronUp } from "react-icons/hi";
import Digi from "../assets/images/digi.svg";
import Digimag from "../assets/images/digimag.svg";
import Digipay from "../assets/images/digipay.svg";
import Digistyle from "../assets/images/digistyle.svg";
import Digiplus from "../assets/images/digiplus.svg";
import Digiclub from "../assets/images/digiclub.svg";
import Digijet from "../assets/images/jet.svg";
import Magnet from "../assets/images/magnet.svg";
import Digimehr from "../assets/images/digimehr.svg";
import Fidibo from "../assets/images/fidibo.svg";
import Diginext from "../assets/images/diginext.svg";
import Pindo from "../assets/images/pindo.svg";
import Komodaa from "../assets/images/komodaa.svg";
import Digiexpress from "../assets/images/digiexpress.svg";
import Ganjeh from "../assets/images/ganjeh.svg";
import Digify from "../assets/images/digify.svg";
import Smartech from "../assets/images/smartech.svg";
import Digibusiness from "../assets/images/digikala-business.svg";
import Express from "../assets/images/express-delivery.svg";
import Cash from "../assets/images/cash-on-delivery.svg";
import Support from "../assets/images/support.svg";
import Days from "../assets/images/days-return.svg";
import Orginal from "../assets/images/original-products.svg";
import FooterLogo from "../assets/images/footerlogo.png";
import GooglePlay from "../assets/images/google-play.svg";
import Bazzar from "../assets/images/coffe-bazzar.svg";
import Myket from "../assets/images/myket.svg";
import SibApp from "../assets/images/sib-app.svg";
import More from "../assets/images/More.svg";
import Enamad from "../assets/images/enamad.png";
import Kasbokar from "../assets/images/kasbokar.png";
import Rezi from "../assets/images/rezi.png";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { SiAparat } from "react-icons/si";
import Divider from "../components/shared/DividerFull";

function Footer() {
  return (
    <div className=" mt-6">
      <div className="px-4">
        <div className="flex items-center justify-between">
          <Image src={Digi} alt="" width="120" />
          <div className="flex items-center cursor-pointer border-[1px] py-2 px-3 rounded-lg text-gray-400 space-x-2 space-x-reverse">
            <span className="text-sm">بازگشت به بالا</span>
            <HiChevronUp className="w-6 h-6" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center space-x-5 space-x-reverse lg:space-x-0 space-y-3 py-4 lg:space-y-0">
          <p className="text-xs text-gray-700">تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</p>
          <p className="hidden lg:block text-gray-400"> | </p>
          <p className="text-xs text-gray-700">
            ۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم
          </p>
        </div>

        <div className="hidden lg:flex items-center justify-between px-6 py-10">
          <div className="flex flex-col items-center justify-center space-y-2 cursor-pointer">
            <Image src={Express} alt="" />
            <span className="text-xs text-gray-700">امکان تحویل اکسپرس</span>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 cursor-pointer">
            <Image src={Cash} alt="" />
            <span className="text-xs text-gray-700">امکان پرداخت در محل</span>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 cursor-pointer">
            <Image src={Support} alt="" />
            <span className="text-xs text-gray-700">7 روز هفته، 24 ساعته</span>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 cursor-pointer">
            <Image src={Days} alt="" />
            <span className="text-xs text-gray-700">
              هفت روز ضمانت بازگشت کالا
            </span>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 cursor-pointer">
            <Image src={Orginal} alt="" />
            <span className="text-xs text-gray-700">ضمانت اصل بودن کالا</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between space-y-6 lg:space-y-0 my-6">
          <div className="flex space-x-28 space-x-reverse">
            <div>
              <h3 className="font-medium text-gray-800 mb-5 text-sm lg:text=base">
                با دیجی‌کالا
              </h3>
              <ul className="text-gray-500 text-xs lg:text-sm space-y-5">
                <li>اتاق خبر دیجی‌کالا</li>
                <li>فروش در دیجی‌کالا</li>
                <li>فرصت های شغلی</li>
                <li>گزارش تخلف دیجی‌کالا</li>
                <li>تماس با دیجی‌کالا</li>
                <li>درباره دیجی‌کالا</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-gray-800 mb-5 text-sm lg:text=base">
                خدمات مشتریان
              </h3>
              <ul className="text-gray-500 text-xs space-y-5">
                <li>پاسخ به پرسش های متداول</li>
                <li>رویه های بازگرداندن کالا</li>
                <li>شرایط استفاده</li>
                <li>حریم خصوصی</li>
                <li>گزارش باگ</li>
              </ul>
            </div>

            <div className="hidden lg:block">
              <h3 className="font-medium text-gray-800 mb-5">
                راهنمای خرید از دیجی‌کالا
              </h3>
              <ul className="text-gray-500 text-sm space-y-5">
                <li>نحوه ثبت سفارش</li>
                <li>رویه ارسال سفارش</li>
                <li>شیوه های پرداخت</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-row items-center justify-between lg:items-start lg:flex-col space-y-5">
              <h3 className="text-gray-800 font-medium text-sm lg:text-base">
                همراه ما باشید!
              </h3>
              <div className="flex items-center space-x-8 space-x-reverse text-gray-400 ">
                <FaInstagram className="w-7 h-7 lg:w-8 lg:h-8" />
                <FaTwitter className="w-7 h-7 lg:w-8 lg:h-8" />
                <FaLinkedin className="w-7 h-7 lg:w-8 lg:h-8" />
                <SiAparat className="w-7 h-7 lg:w-8 lg:h-8" />
              </div>
            </div>
            <span className="hidden lg:block text-gray-800 font-medium mt-10 mb-2">
              با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید
            </span>
            <div className="my-3 flex justify-between space-x-2 space-x-reverse">
              <input
                type="text"
                placeholder="ایمیل شما"
                className="bg-gray-100 py-3 px-3 rounded-lg w-full text-xs lg:text-sm"
              />
              <button className="bg-gray-200 py-3 px-3 rounded-lg text-white">
                ثبت
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between bg-[#3c4b6d] py-4 px-4 rounded-lg my-6 lg:my-10">
          <div className="flex items-center space-x-4 space-x-reverse">
            <div className="w-6 h-7 lg:w-11 lg:h-11">
              <Image src={FooterLogo} alt="" />
            </div>
            <h4 className="text-white text-xl">دانلود اپلیکیشن دیجی‌کالا</h4>
          </div>

          <div className="grid grid-cols-2 gap-5 lg:flex py-7 lg:py-0 lg:px-2">
            <div className="bg-white cursor-pointer w-36 h-11 rounded-md overflow-hidden flex items-center justify-center">
              <Image src={GooglePlay} alt="" />
            </div>
            <div className="bg-white cursor-pointer w-36 h-11 rounded-md overflow-hidden flex items-center justify-center">
              <Image src={Bazzar} alt="" />
            </div>
            <div className="bg-white cursor-pointer w-36 h-11 rounded-md overflow-hidden flex items-center justify-center">
              <Image src={Myket} alt="" />
            </div>
            <div className="bg-white cursor-pointer w-36 h-11 rounded-md overflow-hidden flex items-center justify-center">
              <Image src={SibApp} alt="" />
            </div>
            <div className="bg-white cursor-pointer h-11 w-11 rounded-md overflow-hidden hidden lg:flex items-center justify-center">
              <Image src={More} alt="" width={200} height={200} />
            </div>
          </div>
          <div className="flex lg:hidden items-center text-white text-xs">
            <p>اطلاعات بیشتر</p>
            <HiChevronLeft />
          </div>
        </div>

        <Divider />

        <div className="flex flex-col lg:flex-row justify-between items-center my-10">
          <div className="space-y-2">
            <h3 className="text-lg lg:text-xl text-gray-600">
              فروشگاه اینترنتی دیجی‌کالا، بررسی، انتخاب و خرید آنلاین.
            </h3>
            <p className="text-xs ml-10 leading-8">
              یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی
              متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمانی کوتاه به دست
              مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی
              که فروشگاه اینترنتی دیجی‌کالا سال‌هاست بر روی آن‌ها کار کرده و
              توانسته از این طریق مشتریان ثابت خود را داشته باشد.
            </p>
          </div>
          <div className="flex items-center space-x-3 space-x-reverse">
            <div className="flex items-center justify-center cursor-pointer border-[1px] px-2 py-2 lg:py-4 lg:px-4 rounded-lg w-24 h-24 lg:w-28 lg:h-28">
              <Image src={Rezi} alt="" objectFit="contain" />
            </div>
            <div className="flex items-center justify-center cursor-pointer border-[1px] p-4 lg:p-6 rounded-lg w-24 h-24 lg:w-28 lg:h-28">
              <Image src={Kasbokar} alt="" objectFit="contain" />
            </div>
            <div className="flex items-center justify-center cursor-pointer border-[1px] px-2 py-2 lg:py-4 lg:px-4 rounded-lg w-24 h-24 lg:w-28 lg:h-28">
              <Image src={Enamad} alt="" objectFit="contain" />
            </div>
          </div>
        </div>

        <Divider />

        <p className="lg:text-center leading-6 text-xs my-8 text-gray-500">
          برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع»
          کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه (فروشگاه
          آنلاین دیجی‌کالا) است.
        </p>
      </div>
      <div className="flex flex-wrap items-center w-full bg-gray-100">
        <div className="w-[33%] lg:w-[12%] h-[80px] flex items-center justify-center px-4 border-r-[1px] border-b-[1px] border-gray-200">
          <div className="w-20">
            <Image src={Digimag} alt="" objectFit="contain" />
          </div>
        </div>
        <div className="w-[33%] lg:w-[12%] h-[80px] flex items-center justify-center px-4 border-r-[1px] border-b-[1px] border-gray-200">
          <div className="w-20">
            <Image src={Digipay} alt="" objectFit="contain" />
          </div>
        </div>
        <div className="w-[33%] lg:w-[12%] h-[80px] flex items-center justify-center px-4 border-r-[1px] border-b-[1px] border-gray-200">
          <div className="w-20">
            <Image src={Digistyle} alt="" objectFit="contain" />
          </div>
        </div>
        <div className="w-[33%] lg:w-[12%] h-[80px] flex items-center justify-center px-4 border-r-[1px] border-b-[1px] border-gray-200">
          <div className="w-20">
            <Image src={Digiplus} alt="" objectFit="contain" />
          </div>
        </div>
        <div className="w-[33%] lg:w-[12%] h-[80px] flex items-center justify-center px-4 border-r-[1px] border-b-[1px] border-gray-200">
          <div className="w-20">
            <Image src={Digiclub} alt="" objectFit="contain" />
          </div>
        </div>
        <div className="w-[33%] lg:w-[12%] h-[80px] flex items-center justify-center px-4 border-r-[1px] border-b-[1px] border-gray-200">
          <div className="w-20">
            <Image src={Digijet} alt="" objectFit="contain" />
          </div>
        </div>
        <div className="w-[33%] lg:w-[12%] h-[80px] flex items-center justify-center  px-4 border-r-[1px] border-b-[1px] border-gray-200">
          <div className="w-20">
            <Image src={Magnet} alt="" objectFit="contain" />
          </div>
        </div>
        <div className="w-[33%] lg:w-[12%] h-[80px] flex items-center justify-center px-4 border-r-[1px] border-b-[1px] border-gray-200">
          <div className="w-20">
            <Image src={Digimehr} alt="" objectFit="contain" />
          </div>
        </div>
        <div className="w-[33%] lg:w-[12%] h-[80px] flex items-center justify-center px-4 border-r-[1px] border-b-[1px] border-gray-200">
          <div className="w-20">
            <Image src={Fidibo} alt="" objectFit="contain" />
          </div>
        </div>
        <div className="w-[33%] lg:w-[12%] h-[80px] flex items-center justify-center px-4 border-r-[1px] border-gray-200">
          <div className="w-20">
            <Image src={Diginext} alt="" objectFit="contain" />
          </div>
        </div>
        <div className="w-[33%] lg:w-[12%] h-[80px] flex items-center justify-center px-4 border-r-[1px] border-gray-200">
          <div className="w-20">
            <Image src={Pindo} alt="" objectFit="contain" />
          </div>
        </div>
        <div className="w-[33%] lg:w-[12%] h-[80px] flex items-center justify-center px-4 border-r-[1px] border-gray-200">
          <div className="w-20">
            <Image src={Komodaa} alt="" objectFit="contain" />
          </div>
        </div>
        <div className="w-[33%] lg:w-[12%] h-[80px] flex items-center justify-center px-4 border-r-[1px] border-gray-200">
          <div className="w-20">
            <Image src={Digiexpress} alt="" objectFit="contain" />
          </div>
        </div>
        <div className="w-[33%] lg:w-[12%] h-[80px] flex items-center justify-center px-4 border-r-[1px] border-gray-200">
          <div className="w-20">
            <Image src={Ganjeh} alt="" objectFit="contain" />
          </div>
        </div>
        <div className="w-[33%] lg:w-[12%] h-[80px] flex items-center justify-center px-4 border-r-[1px] border-gray-200">
          <div className="w-20">
            <Image src={Digify} alt="" objectFit="contain" />
          </div>
        </div>
        <div className="w-[33%] lg:w-[12%] h-[80px] flex items-center justify-center px-4 border-r-[1px] border-gray-200">
          <div className="w-20">
            <Image src={Smartech} alt="" objectFit="contain" />
          </div>
        </div>
        <div className="w-[33%] lg:w-[12%] h-[80px] flex items-center justify-center px-4 border-r-[1px] border-gray-200">
          <div className="w-20">
            <Image src={Digibusiness} alt="" objectFit="contain" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
