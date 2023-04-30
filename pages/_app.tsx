import "../styles/globals.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { ConfigProvider } from 'antd';

import { store } from "../app/store";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ConfigProvider direction="rtl" theme={{
                token: {
                    fontFamily: 'IRANSans',
                },
            }}>
      <Component {...pageProps} />
      <Script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js" />
      </ConfigProvider>
    </Provider>
  );
}

export default MyApp;
