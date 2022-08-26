import "faust.config";
import { FaustProvider } from "@faustjs/next";
import "normalize.css/normalize.css";
import React, { useEffect } from "react";
import "scss/main.scss";
import { client } from "client";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <FaustProvider client={client} pageProps={pageProps}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </FaustProvider>
    </>
  );
}
