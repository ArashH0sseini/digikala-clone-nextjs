import type { NextPage } from "next";
import Head from "next/head";
import Divider from "../app/components/shared/Divider";
import DividerFull from "../app/components/shared/DividerFull";
import MainHeader from "../app/layouts/TopHeader";
import Header from "../app/layouts/Header";
import Navbar from "../app/layouts/Navbar";
import Slider from "../app/layouts/Slider";
import Category from "../app/layouts/Category";
import AmazingProducts from "../app/layouts/AmazingProducts";
import AmazingMarket from "../app/layouts/AmazingMarket";
import FirstSideBanner from "../app/components/banner/FirstSideBanner";
import ProductsCategory from "../app/layouts/ProductsCategory";
import SecondSideBanner from "../app/components/banner/SecondSideBanner";
import ProductsOffer from "../app/layouts/ProductsOffer";
import PopularBrands from "../app/layouts/PopularBrands";
import ThirdSideBanner from "../app/components/banner/ThirdSideBanner";
import StoryBox from "../app/layouts/StoryBox";
import VisitedProducts from "../app/layouts/VisitedProducts";
import DigiPlus from "../app/layouts/DigiPlus";
import DigiClub from "../app/layouts/DigiClub";
import SecondVisitedProducts from "../app/layouts/SecondVisitedProducts";
import DigikalaMag from "../app/layouts/DigikalaMag";
import Footer from "../app/layouts/Footer";
import BestSellingProducts from "../app/layouts/BestSellingProducts";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>فروشگاه اینترنتی دیجی کالا</title>
        <meta name="digikala" content="Digikala Clone NEXT.JS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <StoryBox />
      <Slider />
      <div className="lg:max-w-7xl lg:mx-auto lg:px-6">
        <Category />
        <AmazingProducts />
        <AmazingMarket />
        <FirstSideBanner />
        <ProductsCategory />
        <SecondSideBanner />
        <ProductsOffer />
        <PopularBrands />
        <ThirdSideBanner />
        <VisitedProducts />
        <DigiPlus />
        <DigiClub />
        <SecondVisitedProducts />
        {/* <BestSellingProducts /> */}
        <DigikalaMag />
      </div>

      <DividerFull />
      <Footer />
    </div>
  );
};

export default Home;
