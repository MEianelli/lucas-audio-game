import { CSS } from "@stitches/react";
import { Svg } from "../svg";

export function Barrinha({ css }: { css?: CSS }) {
  return (
    <Svg
      x="0px"
      y="0px"
      width="20px"
      height="40px"
      viewBox="0 0 30 100"
      css={{
        position: "absolute",
        filter: "blur(0.5px) drop-shadow(0 0 3px rgb(255, 47, 0))",
        maskImage: "linear-gradient(to bottom, transparent, black 0%, black 100%, transparent);",
        maskPosition: "bottom",
        maskRepeat: "no-repeat",
        ...css,
      }}
    >
      <g>
        <path
          fill="#FF004F"
          d="M26.5,86.3H3.5c-0.8,0-1.4,0.6-1.4,1.4v8.4c0,0.8,0.6,1.4,1.4,1.4h22.9c0.8,0,1.4-0.6,1.4-1.4v-8.4
		C27.9,86.9,27.2,86.3,26.5,86.3z"
        />
        <path
          fill="#FF004F"
          d="M26.5,65.3H3.5c-0.8,0-1.4,0.6-1.4,1.4v8.4c0,0.8,0.6,1.4,1.4,1.4h22.9c0.8,0,1.4-0.6,1.4-1.4v-8.4
		C27.9,66,27.2,65.3,26.5,65.3z"
        />
        <path
          fill="#FF004F"
          d="M26.5,44.4H3.5c-0.8,0-1.4,0.6-1.4,1.4v8.4c0,0.8,0.6,1.4,1.4,1.4h22.9c0.8,0,1.4-0.6,1.4-1.4v-8.4
		C27.9,45,27.2,44.4,26.5,44.4z"
        />
        <path
          fill="#FF004F"
          d="M26.5,23.4H3.5c-0.8,0-1.4,0.6-1.4,1.4v8.4c0,0.8,0.6,1.4,1.4,1.4h22.9c0.8,0,1.4-0.6,1.4-1.4v-8.4
		C27.9,24.1,27.2,23.4,26.5,23.4z"
        />
        <path
          fill="#FF004F"
          d="M3.5,13.7h22.9c0.8,0,1.4-0.6,1.4-1.4V3.9c0-0.8-0.6-1.4-1.4-1.4H3.5c-0.8,0-1.4,0.6-1.4,1.4v8.4
		C2.1,13.1,2.8,13.7,3.5,13.7z"
        />
      </g>
    </Svg>
  );
}
