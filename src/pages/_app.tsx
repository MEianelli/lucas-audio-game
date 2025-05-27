import { globalStyles } from "@/styles/stitches.config";
import type { AppProps } from "next/app";
import "@/styles/fonts.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { LoadingScreen } from "@/components/custom/Misc/LoadingScreen";

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  const router = useRouter();
  const [pageLoading, setPageLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setPageLoading(true);
    const handleComplete = () => setPageLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
    //eslint-disable-next-line
  }, []);

  return pageLoading ? <LoadingScreen /> : <Component {...pageProps} />;
}

export default MyApp;
