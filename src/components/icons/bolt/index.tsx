import { IconsContainer } from "@/components/containers/containers";
import "./style.css";

export function Bolt({ size = "40px" }: { size?: string }) {
  return (
    <IconsContainer css={{ width: size, height: size }}>
      <svg className="raioglow" width={size} height={size} viewBox="0 0 100 100">
        <g>
          <path
            d="M86.1,41.9h-17c-2.6,0-4.3-2.8-3.1-5L83.7,3.5c1.2-2.2-1.6-4.5-3.5-2.9L12.6,53.9c-1.7,1.3-0.7,4.2,1.5,4.2
		h17c2.6,0,4.3,2.8,3.1,5L16.5,96.5c-1.2,2.2,1.6,4.5,3.5,2.9L87.4,46c1.7-1.3,0.7-4.2-1.5-4.2L86.1,41.9z"
          />
        </g>
      </svg>

      <svg className="raioborda" width={size} height={size} viewBox="0 0 100 100">
        <g>
          <path
            d="M86.1,41.9h-17c-2.6,0-4.3-2.8-3.1-5L83.7,3.5c1.2-2.2-1.6-4.5-3.5-2.9L12.6,53.9c-1.7,1.3-0.7,4.2,1.5,4.2
		h17c2.6,0,4.3,2.8,3.1,5L16.5,96.5c-1.2,2.2,1.6,4.5,3.5,2.9L87.4,46c1.7-1.3,0.7-4.2-1.5-4.2L86.1,41.9z"
          />
        </g>
      </svg>

      <svg className="raio" width={size} height={size} viewBox="0 0 100 100">
        <g>
          <path
            d="M86.1,41.9h-17c-2.6,0-4.3-2.8-3.1-5L83.7,3.5c1.2-2.2-1.6-4.5-3.5-2.9L12.6,53.9c-1.7,1.3-0.7,4.2,1.5,4.2
		h17c2.6,0,4.3,2.8,3.1,5L16.5,96.5c-1.2,2.2,1.6,4.5,3.5,2.9L87.4,46c1.7-1.3,0.7-4.2-1.5-4.2L86.1,41.9z"
          />
        </g>
      </svg>
    </IconsContainer>
  );
}
