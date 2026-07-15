import * as React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  progress?: number; // 0 to 100
  isFilled?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
}

export const Logo: React.FC<LogoProps> = ({
  className,
  progress,
  isFilled = false,
  size = "md",
}) => {
  const gradientId = React.useId().replace(/:/g, "");
  
  // Size classes
  const sizeClasses = {
    sm: {
      leela: "text-2xl leading-none font-bold font-logo text-white tracking-tight",
      filmsContainer: "gap-x-1.5 self-end",
      films: "text-[9px] font-extrabold tracking-[0.25em] font-heading text-white",
      svgWidth: "w-6 h-3",
    },
    md: {
      leela: "text-4xl leading-none font-bold font-logo text-white tracking-tight",
      filmsContainer: "gap-x-2 self-end",
      films: "text-[12px] font-extrabold tracking-[0.25em] font-heading text-white",
      svgWidth: "w-8 h-4",
    },
    lg: {
      leela: "text-6xl leading-none font-bold font-logo text-white tracking-tight",
      filmsContainer: "gap-x-3 self-end",
      films: "text-[18px] font-extrabold tracking-[0.25em] font-heading text-white",
      svgWidth: "w-12 h-6",
    },
    xl: {
      leela: "text-7xl md:text-8xl leading-none font-bold font-logo text-white tracking-tight",
      filmsContainer: "gap-x-4 self-end",
      films: "text-[20px] md:text-[24px] font-extrabold tracking-[0.25em] font-heading text-white",
      svgWidth: "w-16 h-8 md:w-20 md:h-10",
    },
  };

  const current = sizeClasses[size];

  // Fill logic
  const fillPercent = isFilled ? 100 : progress !== undefined ? progress : 0;

  return (
    <div className={cn("inline-flex flex-col items-start select-none self-start", className)}>
      {/* Row 1: leela wordmark */}
      <span className={cn(current.leela)}>
        leela
      </span>

      {/* Row 2: FILMS + Projector Beam SVG */}
      <div className={cn("flex items-center mt-1", current.filmsContainer)}>
        <span className={current.films}>FILMS</span>

        {/* SVG Projector Beam (the right trapezoid) */}
        <svg
          viewBox="0 0 56 28"
          className={cn("flex-shrink-0", current.svgWidth)}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id={`trapezoid-grad-${gradientId}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset={`${fillPercent}%`} stopColor="#E51B24" />
              <stop offset={`${fillPercent}%`} stopColor="transparent" />
            </linearGradient>
          </defs>
          <polygon
            points="48,0 48,28 8,21 8,7"
            fill={`url(#trapezoid-grad-${gradientId})`}
            stroke="#E51B24"
            strokeWidth="2.5"
            strokeLinejoin="miter"
          />
        </svg>
      </div>
    </div>
  );
};
export default Logo;
