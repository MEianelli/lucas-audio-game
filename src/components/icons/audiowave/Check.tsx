import { CSS } from "@stitches/react";
import { Svg } from "../svg";

export function Check({ css, size = 60 }: { css?: CSS; size?: number }) {
  return (
    <Svg viewBox="0 0 100 100" css={{ width: `${size}px`, height: `${size}px`, position: "absolute", ...css }}>
      <path
        fill="#00b757"
        d="M83.44,30.22l-5.2-5.2c-1.64-1.64-4.29-1.64-5.92,0l-30.68,30.68-13.97-13.97c-1.64-1.64-4.29-1.64-5.92,0l-5.2,5.2c-1.64,1.64-1.64,4.29,0,5.92l16.93,16.93,5.2,5.2c1.64,1.64,4.29,1.64,5.92,0l5.2-5.2,33.64-33.64c1.64-1.64,1.64-4.29,0-5.92Z"
      />
    </Svg>
  );
}
