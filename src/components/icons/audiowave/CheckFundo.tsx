import { CSS } from "@stitches/react";
import { Svg } from "../svg";

export function CheckFundo({ css, size = 60 }: { css?: CSS; size?: number }) {
  return (
    <Svg viewBox="0 0 100 100" css={{ width: `${size}px`, height: `${size}px`, position: "absolute", ...css }}>
      <path d="M41.64,84.7c-3.39,0-6.58-1.32-8.97-3.72l-22.12-22.12c-4.95-4.95-4.95-13,0-17.94l5.2-5.2c4.95-4.95,13-4.94,17.94,0l7.96,7.96,24.67-24.67c4.95-4.95,13-4.95,17.94,0l5.2,5.2c4.95,4.95,4.95,13,0,17.94l-38.84,38.84c-2.39,2.4-5.58,3.72-8.97,3.72Z" />
    </Svg>
  );
}
