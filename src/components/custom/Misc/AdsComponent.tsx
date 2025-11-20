import React, { useEffect, useRef } from "react";

interface AdComponentProps {
  adSlot: string;
  adFormat?: string;
  adLayout?: string;
  mobile?: boolean;
}

const AdComponent: React.FC<AdComponentProps> = ({ adSlot, adFormat = "auto", adLayout = "", mobile }) => {
  const adInitialized = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined" || adInitialized.current) return;
    
    try {
      adInitialized.current = true;
      //eslint-disable-next-line
      (window as any).adsbygoogle = (window as any).adsbygoogle || [];
      //eslint-disable-next-line
      (window as any).adsbygoogle.push({});
    } catch (e) {
      console.error("Error loading ads:", e);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{
        display: "block",
        overflow: "hidden",
        width: mobile ? '300px': "unset",
        height:  mobile ? '150px' : "unset",
        border: process.env.NODE_ENV === "development" ? "2px dashed red" : "none",
      }}
      data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID}
      data-ad-slot={adSlot}
      data-ad-layout={adLayout}
      data-ad-format={adFormat}
      data-full-width-responsive="true"
    ></ins>
  );
};

export default AdComponent;
