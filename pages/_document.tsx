import { Html, Head, Main, NextScript } from "next/document";
import { useEffect } from "react";

export default function Document() {
  useEffect(() => {
    const theme = localStorage.getItem("data-theme");
    console.log(theme);
  }, []);
  return (
    <Html lang="en">
      <Head />
      <body data-theme="light" >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
