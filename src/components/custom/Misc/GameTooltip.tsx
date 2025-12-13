import { useState, useEffect, useRef } from "react";
import { styled } from "@/styles/stitches.config";
import { FlexC } from "@/components/containers/flex";

const TooltipContainer = styled("div", {
  position: "relative",
  display: "inline-block",
});

const TooltipContent = styled(FlexC, {
  position: "absolute",
  top: "100%",
  left: "50%",
  transform: "translateX(-50%)",
  marginTop: "10px",
  padding: "12px 16px",
  backgroundColor: "rgba(15, 0, 48, 0.98)",
  border: "1px solid rgba(178, 242, 253, 0.4)",
  borderRadius: "8px",
  minWidth: "250px",
  maxWidth: "300px",
  zIndex: 1000,
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.6), 0 0 8px rgba(178, 242, 253, 0.2)",
  pointerEvents: "auto",
  opacity: 0,
  visibility: "hidden",
  transition: "opacity 0.2s ease, visibility 0.2s ease",
  
  "&::before": {
    content: '""',
    position: "absolute",
    bottom: "100%",
    left: "50%",
    transform: "translateX(-50%)",
    border: "6px solid transparent",
    borderBottomColor: "rgba(15, 0, 48, 0.98)",
  },

  variants: {
    visible: {
      true: {
        opacity: 1,
        visibility: "visible",
      },
    },
  },
  
  "@s": {
    minWidth: "200px",
    maxWidth: "250px",
    padding: "10px 14px",
    fontSize: "11px",
  },
});

const TooltipText = styled("p", {
  color: "rgba(255, 255, 255, 0.95)",
  fontSize: "12px",
  lineHeight: "1.6",
  margin: 0,
  textAlign: "center",
  
  "@s": {
    fontSize: "11px",
    lineHeight: "1.5",
  },
});

interface GameTooltipProps {
  children: React.ReactNode;
  content: string;
}

export function GameTooltip({ children, content }: GameTooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsVisible(false);
      }
    };

    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isVisible]);

  return (
    <TooltipContainer
      ref={containerRef}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onClick={(e) => {
        e.stopPropagation();
        setIsVisible(!isVisible);
      }}
    >
      {children}
      <TooltipContent visible={isVisible}>
        <TooltipText>{content}</TooltipText>
      </TooltipContent>
    </TooltipContainer>
  );
}

