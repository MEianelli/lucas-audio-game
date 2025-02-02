import { globalStyles } from "@/styles/stitches.config";
import type { AppProps } from "next/app";
import "@/styles/fonts.css";

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return <Component {...pageProps} />;
}

export default MyApp;
