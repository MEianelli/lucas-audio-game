import { css } from "@/styles/stitches.config";

export const HeartIcon = () => {
  return (
    <svg width={25} height={20} viewBox="0 0 16 16" fill="#EC364C">
      <path
        d="M1.24264 8.24264L8 15L14.7574 8.24264C15.553 7.44699 16 6.36786 16 5.24264V5.05234C16 2.8143 14.1857 1 11.9477 1C10.7166 1 9.55233 1.55959 8.78331 2.52086L8 3.5L7.21669 2.52086C6.44767 1.55959 5.28338 1 4.05234 1C1.8143 1 0 2.8143 0 5.05234V5.24264C0 6.36786 0.44699 7.44699 1.24264 8.24264Z"
        fill="#EC364C"
      />
    </svg>
  );
};

export const HeartFillingIcon = () => {
  return (
    <svg width={25} height={20} viewBox="0 0 16 16" fill="#00ff00">
      <path
        d="M1.24264 8.24264L8 15L14.7574 8.24264C15.553 7.44699 16 6.36786 16 5.24264V5.05234C16 2.8143 14.1857 1 11.9477 1C10.7166 1 9.55233 1.55959 8.78331 2.52086L8 3.5L7.21669 2.52086C6.44767 1.55959 5.28338 1 4.05234 1C1.8143 1 0 2.8143 0 5.05234V5.24264C0 6.36786 0.44699 7.44699 1.24264 8.24264Z"
        fill="#00ff00"
      />
    </svg>
  );
};

export const HeartEmptyIcon = ({
  width = 25,
  height = 20,
  stroke = "red",
  strokeWidth = 1.5,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    stroke={stroke}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M11.6 2.2C10.1 0.8 7.9 0.8 6.4 2.2L4.8 3.8L3.2 2.2C1.7 0.8 0 1.6 0 3.5C0 5.4 1.7 8.1 4.8 11.2L8 14.4L11.2 11.2C14.3 8.1 16 5.4 16 3.5C16 1.6 13.1 0.8 11.6 2.2Z" />
  </svg>
);

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

export const ExplodingHeart = ({
  width = 25,
  height = 20,
  stroke = "#EC364C",
  strokeWidth = 1.5,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    stroke={stroke}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Exploding Heart */}
    <path
      fill="#EC364C"
      d="M11.6 2.2C10.1 0.8 7.9 0.8 6.4 2.2L4.8 3.8L3.2 2.2C1.7 0.8 0 1.6 0 3.5C0 5.4 1.7 8.1 4.8 11.2L8 14.4L11.2 11.2C14.3 8.1 16 5.4 16 3.5C16 1.6 13.1 0.8 11.6 2.2Z"
    >
      {/* Explode Animation: Scale up and fade out */}
      <animate
        attributeName="transform"
        attributeType="XML"
        type="scale"
        values="1;5;1"
        dur="1.55s"
        begin="0s"
        repeatCount="1"
        fill="freeze"
      />
      <animate
        attributeName="opacity"
        values="1;0"
        dur="1.55s"
        begin="0s"
        repeatCount="1"
        fill="freeze"
      />
    </path>

    {/* Empty Heart */}
    <path
      fill="none"
      d="M11.6 2.2C10.1 0.8 7.9 0.8 6.4 2.2L4.8 3.8L3.2 2.2C1.7 0.8 0 1.6 0 3.5C0 5.4 1.7 8.1 4.8 11.2L8 14.4L11.2 11.2C14.3 8.1 16 5.4 16 3.5C16 1.6 13.1 0.8 11.6 2.2Z"
    >
      {/* Fill Animation: Fill with red */}
      <animate
        attributeName="fill"
        values="none;#EC364C"
        dur="1.5s"
        begin="1.55s"
        repeatCount="indefinite"
      />
    </path>

    {/* Red Drops */}
    <circle cx="5" cy="5" r="0.5" fill="#EC364C">
      <animate
        attributeName="r"
        values="0.5;1.5;0.5"
        dur="1.5s"
        begin="1.55s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="opacity"
        values="0;1;0"
        dur="1.5s"
        begin="1.55s"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx="11" cy="5" r="0.5" fill="#EC364C">
      <animate
        attributeName="r"
        values="0.5;1.5;0.5"
        dur="1.5s"
        begin="1s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="opacity"
        values="0;1;0"
        dur="1.5s"
        begin="1s"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx="8" cy="8" r="0.5" fill="#EC364C">
      <animate
        attributeName="r"
        values="0.5;1.5;0.5"
        dur="1.5s"
        begin="1.25s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="opacity"
        values="0;1;0"
        dur="1.5s"
        begin="1.25s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
);

export default ExplodingHeart;
