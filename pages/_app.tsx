import React from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import "../styles/globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Background from "../components/Background";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const ignoreNav = ["/donate"];

  return (
    <div className="h-full flex flex-col justify-between">
      <Head>
        <title>BlairHacks</title>
        <link rel="icon" type="image/x-icon" href="/assets/logo.png" />

        <meta
          name="description"
          content="An annual hackathon hosted by MBHS students in Silver Spring, MD."
        />
        <meta
          property="og:description"
          content="An annual hackathon hosted by MBHS students in Silver Spring, MD."
          key="ogdesc"
        />
        <meta property="og:image" content="/assets/logo.png" key="ogimage" />
        <meta property="og:title" content="BlairHacks" key="ogtitle" />
        <meta property="og:site_name" content="BlairHacks" key="ogsitename" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <Background />
      <div className="flex justify-center fixed pl-3 md:pl-3 pt-3 md:pt-0 bottom-5 md:top-3 z-50">
        <Nav />
      </div>
      <div
        className={`${
          !ignoreNav.includes(router.pathname) && "pb-16 md:pb-0 md:pl-16"
        }`}
      >
        <div
          className={`text-white ${
            !ignoreNav.includes(router.pathname) && "p-8 md:p-16"
          }`}
        >
          <Component {...pageProps} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
