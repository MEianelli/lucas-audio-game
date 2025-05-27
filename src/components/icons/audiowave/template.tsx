import { CSS } from "@stitches/react";
import { Svg } from "../svg";

export function XXXXXX({ css, size = 60 }: { css?: CSS; size?: number }) {
  return <Svg css={{ width: `${size}px`, height: `${size}px`, ...css }}></Svg>;
}
