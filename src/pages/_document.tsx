import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID}`}
          crossOrigin="anonymous"
        ></script>
        <meta name="google-adsense-account" content={process.env.NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID}/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
