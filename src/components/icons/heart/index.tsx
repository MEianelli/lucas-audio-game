import { IconsContainer } from "@/components/containers/containers";
import "./style.css";

export function Heart({ size = "40px" }: { size?: string }) {
  return (
    <IconsContainer css={{ width: size, height: size }}>
      <svg className="heartglow" width={size} height={size} viewBox="0 0 100 100">
        <g>
          <g>
            <path d="M50,24.9C50,24.9,50.1,24.9,50,24.9c1.4-2.5,10.2-18,26.9-18s23,12.8,23,22.3c0,24.4-21.9,44-49.9,64.9" />
          </g>
          <g>
            <path d="M50,24.9C50,24.9,50,24.9,50,24.9c-1.4-2.5-10.2-18-26.9-18s-23,12.8-23,22.3c0,24.4,21.9,44,49.9,64.9" />
          </g>
        </g>
      </svg>

      <svg className="heart" width={size} height={size} viewBox="0 0 100 100">
        <g>
          <g>
            <path d="M50,24.9C50,24.9,50.1,24.9,50,24.9c1.4-2.5,10.2-18,26.9-18s23,12.8,23,22.3c0,24.4-21.9,44-49.9,64.9" />
          </g>
          <g>
            <path d="M50,24.9C50,24.9,50,24.9,50,24.9c-1.4-2.5-10.2-18-26.9-18s-23,12.8-23,22.3c0,24.4,21.9,44,49.9,64.9" />
          </g>
        </g>
      </svg>

      <svg className="heartshine" width={size} height={size} viewBox="0 0 100 100">
        <g>
          <g>
            <path d="M50,24.9C50,24.9,50.1,24.9,50,24.9c1.4-2.5,10.2-18,26.9-18s23,12.8,23,22.3c0,24.4-21.9,44-49.9,64.9" />
          </g>
          <g>
            <path d="M50,24.9C50,24.9,50,24.9,50,24.9c-1.4-2.5-10.2-18-26.9-18s-23,12.8-23,22.3c0,24.4,21.9,44,49.9,64.9" />
          </g>
        </g>
      </svg>
    </IconsContainer>
  );
}
