import { Html, Head, Main, NextScript } from "next/document";
import { useEffect } from "react";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.1.0/kakao.min.js"
          integrity="sha384-dpu02ieKC6NUeKFoGMOKz6102CLEWi9+5RQjWSV0ikYSFFd8M3Wp2reIcquJOemx"
          crossOrigin="anonymous"
        />
        <script
          type="text/javascript"
          src="/js/naveridlogin_js_sdk_2.0.2.js"
          crossOrigin="anonymous"
        />
        <script src="https://accounts.google.com/gsi/client" async defer />
      </Head>

      <body data-theme="light">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
