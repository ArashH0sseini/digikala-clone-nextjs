import "../styles/globals.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import "swiper/css/pagination";

import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import { store } from "../app/store";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout ?? (page => page)

  return (
    <Provider store={store}>
      <ConfigProvider
        direction="rtl"
        theme={{
          token: {
            fontFamily: "IRANSans",
          },
        }}
      >
        {getLayout(<Component {...pageProps} />)}
      </ConfigProvider>
    </Provider>
  );
}

export default MyApp;
