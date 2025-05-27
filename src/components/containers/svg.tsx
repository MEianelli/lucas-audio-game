import { styled } from "@/styles/stitches.config";
import { CSS } from "@stitches/react";

export const Svg = styled("svg");

export function TemplateSVG({ css, size = 60 }: { css?: CSS; size?: number }) {
  return <Svg css={{ width: `${size}px`, height: `${size}px`, ...css }}></Svg>;
}
