import "../styles/global.scss";
import "../styles/reset.scss";
// import "../styles/bootstrap.scss"
// import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../store";


export default function App({ Component, pageProps }: AppProps) {

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
