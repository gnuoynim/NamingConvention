import "../styles/global.scss";
import "../styles/reset.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../store";
import { useEffect } from "react";


export default function App({ Component, pageProps }: AppProps) {

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
