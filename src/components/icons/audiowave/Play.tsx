import { CSS } from "@stitches/react";
import { Svg } from "../svg";

export function Play({ css, size = 60 }: { css?: CSS; size?: number }) {
  return (
    <Svg viewBox="0 0 100 100" css={{ width: `${size}px`, height: `${size}px`, position: "absolute", ...css }}>
      <path
        fill="#00b757"
        strokeWidth="0px"
        d="M25.61,17.79l55.4,26.52c4.78,2.29,4.78,9.1,0,11.38l-55.4,26.52c-4.73,2.26-10.21-1.18-10.21-6.43V24.22c0-5.25,5.47-8.69,10.21-6.43Z"
      />
    </Svg>
  );
}
