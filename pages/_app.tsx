import "../styles/global.style";

import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "../store/store";
import { YandexMetrika } from "../head/yandex-metrika";
import React from "react";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ТеплоКварц</title>
        <YandexMetrika/>
      </Head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
