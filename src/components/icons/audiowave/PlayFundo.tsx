import { CSS } from "@stitches/react";
import { Svg } from "../svg";

export function PlayFundo({ css, size = 60 }: { css?: CSS; size?: number }) {
  return (
    <Svg viewBox="0 0 100 100" css={{ width: `${size}px`, height: `${size}px`, position: "absolute", ...css }}>
      <path d="M84.46,37.09L29.06,10.57h0c-4.71-2.26-10.17-1.94-14.6.85-4.42,2.79-7.06,7.57-7.06,12.8v51.56c0,5.23,2.64,10.01,7.06,12.8,2.47,1.55,5.25,2.34,8.05,2.34,2.22,0,4.46-.5,6.54-1.49l55.4-26.52c5.02-2.4,8.13-7.35,8.13-12.91s-3.12-10.51-8.13-12.91Z" />
    </Svg>
  );
}
