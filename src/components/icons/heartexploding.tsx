import { css } from "@/styles/stitches.config";
import React from "react";

export const HeartExploding = () => {
  const scaleCss = css({
    scale: 1.2,
  });

  return (
    <svg
      className={scaleCss()}
      width={25}
      height={20}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
    >
      <style type="text/css">{`.st0{fill:#EC364C;}`}</style>
      <g>
        <g style={{ transformOrigin: "center" }}>
          <g id="baixo-direito">
            <g>
              <path
                className="st0"
                d="M6.62,12.77c0.79,0.62,1.36,0.98,1.36,0.98s3.02-1.96,4.89-4.53l-5.34-2.38L6.62,12.77z"
              />
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                dur="0.4s"
                begin="1s"
                fill="freeze"
                values="0,0; 2,2; 3,3; 3.3,3.3; 3.4,3.4; 3.5,3.5"
                keyTimes="0; 0.2; 0.4; 0.6; 0.8; 1"
              />
              <animate
                attributeName="opacity"
                from="1"
                to="0"
                dur="0.4s"
                begin="1s"
                fill="freeze"
              />
            </g>
          </g>
          <g id="baixo-esquerdo">
            <path
              className="st0"
              d="M1.77,4.32c-0.12,0.37-0.19,0.77-0.19,1.19c0,2.91,3.14,5.81,5.01,7.28l0.91-5.92L1.77,4.32z"
            />
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              dur="0.4s"
              begin="1s"
              fill="freeze"
              values="0,0; -2,2; -3,3; -3.3,3.3; -3.4,3.4; -3.5,3.5"
              keyTimes="0; 0.2; 0.4; 0.6; 0.8; 1"
            />
            <animate
              attributeName="opacity"
              from="1"
              to="0"
              dur="0.4s"
              begin="1s"
              fill="freeze"
            />
          </g>
          <g id="cima-esquerdo">
            <path
              className="st0"
              d="M7.94,4.07c-0.09-0.17-1.1-1.85-3.1-1.85c-1.62,0-2.67,0.9-3.07,2.13l5.73,2.55L7.94,4.07z"
            />
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              dur="0.4s"
              begin="1s"
              fill="freeze"
              values="0,0; -2,-2; -3,-3; -3.3,-3.3; -3.4,-3.4; -3.5,-3.5"
              keyTimes="0; 0.2; 0.4; 0.6; 0.8; 1"
            />
            <animate
              attributeName="opacity"
              from="1"
              to="0"
              dur="0.4s"
              begin="1s"
              fill="freeze"
            />
          </g>
          <g id="cima-direito">
            <path
              className="st0"
              d="M11,2.22C8.88,2.22,7.88,4.08,7.88,4.08s-0.02-0.01-0.07-0.01l-0.44,2.83l5.34,2.38c0.85-1.16,1.46-2.45,1.46-3.74C14.17,3.75,13.1,2.22,11,2.22z"
            />
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              dur="0.4s"
              begin="1s"
              fill="freeze"
              values="0,0; 2,-2; 3,-3; 3.3,-3.3; 3.4,-3.4; 3.5,-3.5"
              keyTimes="0; 0.2; 0.4; 0.6; 0.8; 1"
            />
            <animate
              attributeName="opacity"
              from="1"
              to="0"
              dur="0.4s"
              begin="1s"
              fill="freeze"
            />
          </g>
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="scale"
            from="1"
            to="1.1"
            dur="0.3s"
            begin="0s"
            repeatCount="3"
          />
        </g>
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0; -0.1,0.1; 0.1,-0.1; 0,0"
          dur="0.3s"
          repeatCount="3"
        />
      </g>
    </svg>
  );
};
