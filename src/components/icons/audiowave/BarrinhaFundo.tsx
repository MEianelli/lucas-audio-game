import { CSS } from "@stitches/react";
import { Svg } from "../svg";

export function BarrinhaFundo({ css, size = 40 }: { css?: CSS; size?: number }) {
  return (
    <Svg viewBox="0 0 100 100" css={{ width: `${size}px`, height: `${size}px`, position: "absolute", ...css }}>
      <rect fill="#ff004f" strokeWidth="0" x="0" y="83.76" width="30.77" height="16.24" rx="3.93" ry="3.93" />
      <rect fill="#ff004f" strokeWidth="0" x="34.62" y="83.76" width="30.77" height="16.24" rx="3.93" ry="3.93" />
      <rect fill="#ff004f" strokeWidth="0" x="69.23" y="83.76" width="30.77" height="16.24" rx="3.93" ry="3.93" />
      <rect fill="#ff004f" strokeWidth="0" x="0" y="62.82" width="30.77" height="16.24" rx="3.93" ry="3.93" />
      <rect fill="#ff004f" strokeWidth="0" x="34.62" y="62.82" width="30.77" height="16.24" rx="3.93" ry="3.93" />
      <rect fill="#ff004f" strokeWidth="0" x="69.23" y="62.82" width="30.77" height="16.24" rx="3.93" ry="3.93" />
      <rect fill="#ff004f" strokeWidth="0" x="0" y="41.88" width="30.77" height="16.24" rx="3.93" ry="3.93" />
      <rect fill="#ff004f" strokeWidth="0" x="34.62" y="41.88" width="30.77" height="16.24" rx="3.93" ry="3.93" />
      <rect fill="#ff004f" strokeWidth="0" x="69.23" y="41.88" width="30.77" height="16.24" rx="3.93" ry="3.93" />
      <rect fill="#ff004f" strokeWidth="0" x="0" y="20.94" width="30.77" height="16.24" rx="3.93" ry="3.93" />
      <rect fill="#ff004f" strokeWidth="0" x="34.62" y="20.94" width="30.77" height="16.24" rx="3.93" ry="3.93" />
      <rect fill="#ff004f" strokeWidth="0" x="69.23" y="20.94" width="30.77" height="16.24" rx="3.93" ry="3.93" />
      <rect fill="#ff004f" strokeWidth="0" x="0" y="0" width="30.77" height="16.24" rx="3.93" ry="3.93" />
      <rect fill="#ff004f" strokeWidth="0" x="34.62" y="0" width="30.77" height="16.24" rx="3.93" ry="3.93" />
      <rect fill="#ff004f" strokeWidth="0" x="69.23" y="0" width="30.77" height="16.24" rx="3.93" ry="3.93" />
    </Svg>
  );
}
