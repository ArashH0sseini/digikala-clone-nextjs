import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { ConfigProvider } from 'antd';

import { store } from "../app/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ConfigProvider direction="rtl" theme={{
                token: {
                    fontFamily: 'IRANSans',
                },
            }}>
      <Component {...pageProps} />
      </ConfigProvider>
    </Provider>
  );
}

export default MyApp;
