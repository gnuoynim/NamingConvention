import "../styles/global.scss";
import "../styles/reset.scss";
// import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../store";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao?.init("7270da306046f8c3d3e7ad1ba11c2354");
      window.Kakao?.isInitialized();
    }
  }, []);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
